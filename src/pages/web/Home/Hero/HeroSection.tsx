import { Link } from 'react-router-dom'
import cls from '../Hero/Hero.module.scss'
import hero from '@/shared/assets/hero.jpg'

export const HeroSection = () => {
	return (
		<section className={cls.hero}>
			<div className={cls.hero__left}>
				<span>Добавьте заботы в вашу жизнь.</span>
				<h1>Защита и забота о вашем здоровье</h1>
				<Link to={'/about'}>Узнать подробнее</Link>
			</div>
			<div className={cls.hero__img}>
				<img src={hero} alt='hero img' />
			</div>
		</section>
	)
}
