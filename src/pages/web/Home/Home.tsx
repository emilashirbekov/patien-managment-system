import { Link } from 'react-router-dom'
import cls from './Home.module.scss'
import logo from '@/shared/assets/logo.jpg'
import { HeroSection } from './Hero/HeroSection'
import { Footer } from './Footer/Footer'

export const Home = () => {
	return (
		<section className={cls.container}>
			<nav className={cls.nav}>
				<div className={cls.nav__logo}>
					<Link to={'/example'}>
						<img src={logo} alt='Company logo' />
					</Link>
				</div>
				<ul className={cls.nav__links}>
					<li>
						<Link to=''>Главная</Link>
					</li>
					<li>
						<Link to='/about'>О нас</Link>
					</li>
					<li>
						<Link to='/appointment'>Записаться</Link>
					</li>
				</ul>
				<Link className={cls.link} to={'/room'}>
					Личный кабинет
				</Link>
			</nav>
			<HeroSection />
			<Footer />
		</section>
	)
}
