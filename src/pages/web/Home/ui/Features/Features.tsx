import cls from './Features.module.scss'

export const Features = () => {
	return (
		<section className={cls.features}>
			<div className={cls.features__header}>
				<h2>Что мы делаем</h2>
				<div></div>
				<p>
					Мы создаем систему здравоохранения для вашего удобства, предлагая
					широкий спектр медицинских услуг по запросу, адаптированных к вашим
					потребностям. Наша платформа позволяет вам общаться с опытными
					онлайн-врачами, которые предоставляют квалифицированные медицинские
					консультации, выписывают рецепты онлайн и предлагают быстрое
					пополнение запасов, когда вам это требуется.
				</p>
			</div>
			<ul className={cls.features__list}>
				<li>
					<img
						src='https://raw.githubusercontent.com/saifulemon/images-for-all-project/main/Donto/Features/feature3.svg'
						alt='feature icon'
					/>
					<h3>Неотложная помощь</h3>
					<p>
						Наша служба неотложной помощи создана для того, чтобы стать вашей
						надежной поддержкой в критических ситуациях.
					</p>
				</li>
				<li>
					<img
						src='https://raw.githubusercontent.com/saifulemon/images-for-all-project/main/Donto/Features/feature2.svg'
						alt='feature icon'
					/>
					<h3>Профессионализм</h3>
					<p>Опытная и квалифицированная команда специалистов</p>
				</li>
				<li>
					<img
						src='https://raw.githubusercontent.com/saifulemon/images-for-all-project/main/Donto/Features/feature1.svg'
						alt='feature icon'
					/>

					<h3>Экономия Времени</h3>
					<p>
						Эффективное управление временем приема и минимизация ожидания для
						пациентов
					</p>
				</li>
			</ul>
		</section>
	)
}
