import { Link } from 'react-router-dom'
import cls from './Hero.module.scss'
import hero from '@/shared/assets/hero.jpg'
import { RoutePath } from '@/shared/config/routeConfig'
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined'
export const HeroSection = () => {
	return (
		<section className={cls.hero}>
			<div className={cls.hero__left}>
				<div>❤️ Здоровье на первом месте</div>
				<h1>Найдите своего врача и запишитесь на прием</h1>
				<p>
					Поговорите с онлайн-врачами и получите медицинские советы,
					онлайн-рецепты, запасы и медицинские записи в течение нескольких
					минут. Медицинские услуги по требованию всегда под рукой.
				</p>
				<Link to={RoutePath.Appointment}>
					<NoteOutlinedIcon style={{ color: 'white' }} /> Записаться
				</Link>
			</div>
			<div className={cls.hero__img}>
				<img src={hero} alt='hero img' />
			</div>
		</section>
	)
}
