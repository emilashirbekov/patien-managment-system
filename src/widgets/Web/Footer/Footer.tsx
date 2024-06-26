import { Link } from 'react-router-dom'
import cls from './Footer.module.scss'
import logo from '@/shared/assets/logo.jpg'
import { RoutePath } from '@/shared/config/routeConfig'

export const Footer = () => {
	return (
		<section className={cls.footer}>
			<div className={cls.row__1}>
				<Link to={RoutePath.home}>
					<img src={logo} alt='Company logo' />
					<span>Medi</span>
				</Link>
			</div>
			<div className={cls.row__2}>
				<p>Быстрые ссылки</p>
				<ul>
					<li>
						<Link to={''}>О нас</Link>
					</li>
					<li>
						<Link to={''}>Записаться</Link>
					</li>
					<li>
						<Link to={''}>Личный кабинет</Link>
					</li>
				</ul>
			</div>
			<div className={cls.row__2}>
				<p> Больше о нас</p>
				<ul>
					<li>
						<Link to={''}>Gmail</Link>
					</li>
					<li>
						<Link to={''}>Instagram</Link>
					</li>
					<li>
						<Link to={''}>Whatsapp</Link>
					</li>
				</ul>
			</div>
		</section>
	)
}
