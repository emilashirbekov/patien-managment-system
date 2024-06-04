import { useGetPatientInfoQuery } from '@/features/Patients/model/serivces/patientsAPI'
import cls from './Info.module.scss'
import profile from '@/shared/assets/profile-bg.jpg'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
export const Info = () => {
	// const { data, isLoading, isError } = useGetPatientInfoQuery()
	// if (isLoading) return <h1>Loading</h1>
	// if (isError) return <h2>Error</h2>
	// console.log(data)
	return (
		<main className={cls.info}>
			<span className={cls.info__link}>
				<Link to={RoutePath.home}>Назад</Link>
			</span>
			<div className={cls.info__card}>
				<h4>Личный кабинет</h4>
				<img src={profile} alt='profile image' loading='lazy' />
				<ul>
					<li>
						<span className={cls.info__title}>Phone:</span>
						<span className={cls.info__value}>
							<a href=''>770-889-6484</a>
						</span>
					</li>
					<li>
						<span>Email:</span>
						<span>
							<a href=''>cristinagroves@example.com</a>
						</span>
					</li>
					<li>
						<span>Birthday:</span>
						<span>3rd March</span>
					</li>
					<li>
						<span>Address:</span>
						<span>714 Burwell Heights Road, Bridge City, TX, 77611</span>
					</li>
					<li>
						<span>Gender:</span>
						<span>Female</span>
					</li>
				</ul>
			</div>
		</main>
	)
}
