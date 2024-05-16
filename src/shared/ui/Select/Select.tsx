import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import cls from './Select.module.scss'

const selectVariants = cva('select', {
	variants: {
		variant: {
			default: cls.select,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

//@ts-ignore
interface SelectProps
	extends React.ComponentPropsWithoutRef<'select'>,
		VariantProps<typeof selectVariants> {
	name?: string
	items?: any
	value?: string
	labelExtractor?: (value: any) => string
	valueExtractor?: (value: any) => string
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
	props,
	ref
) => {
	const { name, id, items } = props

	return (
		<span className={cls.select}>
			<label className={cls.label} htmlFor={id}>
				{name} <sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
			</label>
			<select ref={ref}>
				{items.map((item: any) => (
					<option key={item.id} value={item.name}>
						{item.name}
					</option>
				))}
			</select>
		</span>
	)
}

const ForwardedSelect = React.forwardRef(Select)

ForwardedSelect.displayName = 'Select'

export { ForwardedSelect as Select, selectVariants }
