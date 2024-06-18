import { Link } from 'react-router-dom'
import cls from './ChooseUs.module.scss'
import { RoutePath } from '@/shared/config/routeConfig'
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined'

export const ChooseUs = () => {
	return (
		<section className={cls.choose}>
			<div className={cls.choose__right}>
				<img
					src='https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png'
					alt='Doctor group'
				/>
			</div>
			<div className={cls.choose__left}>
				<h4>Почему выбирают нас</h4>
				<p>
					Узнайте, почему стоит выбрать нас для решения ваших медицинских задач.
					Насладитесь профессиональным уходом, удобством и индивидуальными
					решениями, делая ваше благополучие нашим главным приоритетом.
					Присоединяйтесь к нам на пути к лучшему здоровью и счастливой жизни
				</p>
				<ul>
					<li>
						<svg
							style={{ color: '#1a8efd' }}
							width={20}
							height={20}
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='circle-check'
							className='svg-inline--fa fa-circle-check '
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'></path>
						</svg>
						Лучшие профессиональные врачи
					</li>
					<li>
						<svg
							style={{ color: '#1a8efd' }}
							width={20}
							height={20}
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='circle-check'
							className='svg-inline--fa fa-circle-check '
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'></path>
						</svg>
						Неотложная помощь
					</li>
					<li>
						<svg
							style={{ color: '#1a8efd' }}
							width={20}
							height={20}
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='circle-check'
							className='svg-inline--fa fa-circle-check '
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'></path>
						</svg>
						Круглосуточная поддержка
					</li>
					<li>
						<svg
							style={{ color: '#1a8efd' }}
							width={20}
							height={20}
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='circle-check'
							className='svg-inline--fa fa-circle-check '
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								color='currentColor'
								d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'
							></path>
						</svg>
						Регистрация легко и быстро
					</li>
				</ul>
				<Link to={RoutePath.Appointment}>
					<NoteOutlinedIcon style={{ color: 'white' }} /> Записаться
				</Link>
			</div>
		</section>
	)
}
