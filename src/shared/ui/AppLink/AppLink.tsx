import { Link, LinkProps } from 'react-router-dom'
import { memo, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'

interface AppLinkProps extends LinkProps {
	children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
	const { to, className, children, ...otherProps } = props

	return (
		<Link to={to} className={classNames('', {})} {...otherProps}>
			{children}
		</Link>
	)
})
