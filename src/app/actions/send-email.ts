'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const files = formData.getAll('files') as File[];

    // Mailtrap configuration
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST || 'sandbox.smtp.mailtrap.io',
        port: parseInt(process.env.MAILTRAP_PORT || '2525'),
        auth: {
            user: process.env.MAILTRAP_USER,
            pass: process.env.MAILTRAP_PASS,
        },
    });

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
        from: '"Aurora Landing" <noreply@aurora-landing.com>',
        to: 'admin@td-avrora.ru',
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

