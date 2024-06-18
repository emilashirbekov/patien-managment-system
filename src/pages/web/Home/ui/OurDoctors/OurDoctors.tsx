import cls from './OurDoctors.module.scss'

export const OurDoctors = () => {
	return (
		<section className={cls.doctors}>
			<div className={cls.doctors__header}>
				<h5>Познакомьтесь с нашими врачами</h5>
				<p>
					Познакомьтесь с нашей исключительной командой врачей-специалистов,
					стремящихся предоставлять первоклассные медицинские услуги в Health
					Plus. Доверьтесь их знаниям и опыту, которые приведут вас к более
					здоровой и счастливой жизни.
				</p>
			</div>
			<ul>
				<li>
					<img
						src='https://alkaison.github.io/Health-Plus/static/media/profile-1.0261bb4efe7a9075c56a.png'
						alt='doctor img'
					/>
					<h6>Доктор Кэтрин Мерфи</h6>
					<span>Общий хирург</span>
				</li>
				<li>
					<img
						src='https://alkaison.github.io/Health-Plus/static/media/profile-2.4752a9db34458eeffcfa.png'
						alt='doctor img'
					/>
					<h6>Доктор Джейкоб Джонс</h6>
					<span>Гематолог</span>
				</li>
				<li>
					<img
						src='https://alkaison.github.io/Health-Plus/static/media/profile-4.3c44185ab9c84614038f.png'
						alt='doctor img'
					/>
					<h6>Доктор Альберт Флорес</h6>
					<span>Эндокринолог</span>
				</li>
			</ul>
		</section>
	)
}
