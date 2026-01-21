'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

// "Techno-Brutalism" button styles
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {

        // Base styles: uppercase, tracking, geometric
        const baseStyles = 'inline-flex items-center justify-center font-display font-medium uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none border-2 cursor-pointer';

        const variants = {
            primary: 'bg-aurora-orange border-aurora-orange text-white hover:bg-white hover:text-black transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(255,61,0,0.1)] hover:shadow-none',
            outline: 'bg-transparent border-aurora-gray text-aurora-white hover:border-aurora-orange hover:text-aurora-orange',
            ghost: 'bg-transparent border-transparent text-aurora-white/70 hover:text-aurora-orange',
        };

        const sizes = {
            sm: 'h-9 px-4 text-xs',
            md: 'h-12 px-6 text-sm',
            lg: 'h-14 px-8 text-base',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={twMerge(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';
