import { VariantProps, cva } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import cls from './Input.module.scss'

const inputVariants = cva('input', {
	variants: {
		variant: {
			default: cls.input,
			search: cls.search,
			check: cls.check,
			radio: cls.radio,
			file: cls.file,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

interface InputProps
	extends React.ComponentPropsWithoutRef<'input'>,
		VariantProps<typeof inputVariants> {
	label?: string
	required?: boolean
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	props,
	ref
) => {
	const {
		type,
		placeholder,
		label,
		name,
		disabled,
		variant,
		required,
		id,
		...otherProps
	} = props
	return (
		<>
			<label className={cls.label} htmlFor={id}>
				{label} <sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
			</label>
			<input
				ref={ref}
				id={id}
				required={required}
				className={inputVariants({ variant })}
				name={name}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				{...otherProps}
			/>
		</>
	)
}

const ForwardedInput = React.forwardRef(Input)

ForwardedInput.displayName = 'Input'

export { ForwardedInput as Input, inputVariants }
