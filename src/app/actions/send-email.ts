'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const files = formData.getAll('files') as File[];

    const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg', '.png', '.webp', '.doc', '.docx', '.xls', '.xlsx', '.dwg', '.dxf'];
    const ALLOWED_MIME_TYPES = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/webp',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'image/vnd.dwg',
        'application/acad',
        'application/x-dwg',
        'image/vnd.dxf',
        'application/dxf',
        'application/x-dxf',
        'application/octet-stream' // DWG files often come as octet-stream
    ];
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

    // Server-side validation
    for (const file of files) {
        if (file.size > 0) {
            // 1. Size validation
            if (file.size > MAX_FILE_SIZE) {
                return { success: false, error: `Файл ${file.name} превышает лимит 10МБ` };
            }

            // 2. Extension validation
            const extension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
            if (!ALLOWED_EXTENSIONS.includes(extension)) {
                return { success: false, error: `Недопустимый формат файла: ${file.name}` };
            }

            // 3. MIME type validation
            if (!ALLOWED_MIME_TYPES.includes(file.type)) {
                // For CAD files, we might be more lenient if the extension is correct, 
                // but for general security, we check common types.
                if (file.type !== '') {
                   // Allow if it's a known extension even if MIME is weird (common for CAD)
                   if (!ALLOWED_EXTENSIONS.includes(extension)) {
                       return { success: false, error: `Недопустимый тип контента: ${file.type}` };
                   }
                }
            }
        }
    }

    // SMTP configuration
    const port = parseInt(process.env.MAILTRAP_PORT || '465');
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST || 'smtp.mail.ru',
        port: port,
        secure: port === 465,
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        },
    });

    if (!process.env.MAILTRAP_USER || !process.env.MAILTRAP_PASS) {
        return { 
            success: false, 
            error: 'Отсутствуют настройки почтового сервера (MAILTRAP_USER/PASS). Пожалуйста, добавьте их в переменные окружения Vercel.' 
        };
    }

    const attachments = await Promise.all(
        files
            .filter((file) => file.size > 0)
            .map(async (file) => ({
                filename: file.name,
                content: Buffer.from(await file.arrayBuffer()),
                contentType: file.type,
            }))
    );

    const mailOptions = {
        from: '"ЗМК Аврора" <info@zmk-avrora.ru>',
        to: process.env.MAIL_TO || 'info@zmk-avrora.ru',
        subject: `Новая заявка: ${name}`,
        text: `
            Имя: ${name}
            Телефон: ${phone}
            Сообщение: ${message}
            Количество файлов: ${attachments.length}
        `,
        html: `
            <h3>Новая заявка с сайта</h3>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Сообщение:</strong> ${message}</p>
            <p><strong>Файлы:</strong> ${attachments.length} шт.</p>
        `,
        attachments,
    };

    try {
        console.log('Attempting to send email with:', {
            host: process.env.MAILTRAP_HOST,
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS ? '******' : 'MISSING'
        });
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return { success: true };
    } catch (error: any) {
        console.error('Detailed error sending email:', error.message, error.code, error.command);
        return { success: false, error: error.message || 'Failed to send email' };
    }
}

