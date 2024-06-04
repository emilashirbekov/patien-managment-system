import { Link } from 'react-router-dom'
import cls from './ErrorPage.module.scss'
import { RoutePath } from '@/shared/config/routeConfig'
import Error from '@/shared/assets/danger.svg'

interface ErrorPageProps {
	image: string
	title: string
	description: string
}

export const ErrorPage = (props: ErrorPageProps) => {
	const { image, title, description } = props
	return (
		<main className={cls.error}>
			<div className={cls.error__content}>
				<img src={image} alt={`${title} image`} loading='lazy' />
				<h1>
					<Error width={35} height={35} /> {title}
				</h1>
				<p>{description}</p>
				<Link to={RoutePath.home}>На главную</Link>
			</div>
		</main>
	)
}
