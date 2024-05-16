import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import cls from './Button.module.scss'

const buttonVariants = cva('button', {
	variants: {
		variant: {
			default: cls.button,
			primary: cls.button__primary,
			success: cls.button__success,
			aqua: cls.button__aqua,
		},
		size: {
			sm: cls.button__sm,
			md: cls.button__md,
			lg: cls.button__lg,
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
	},
})

export interface ButtonProps
	extends React.ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {
	href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant, size, ...props }, ref) => {
		return (
			<button
				className={buttonVariants({ variant, size })}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export { Button, buttonVariants }
