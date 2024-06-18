import cls from './Info.module.scss'
import profile from '@/shared/assets/profile-bg.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import { Button } from '@/shared/ui/Button/Button'
import Cookies from 'js-cookie'
import { useGetAppointmentsQuery } from '@/features/Appointments/model/services/AppointmentsAPI'
import { useGetPatientsQuery } from '@/features/Patients/model/serivces/patientsAPI'
export const Info = () => {
	const {
		data: patients,
		isLoading: patientLoading,
		isError: patientError,
	} = useGetPatientsQuery()
	const {
		data: appointments,
		isLoading: appointmentsLoading,
		error: appointmentsError,
	} = useGetAppointmentsQuery()

	const navigate = useNavigate()

	const handleExit = () => {
		Cookies.remove('access_token')
		localStorage.removeItem('user_type')
		navigate(RoutePath.home)
	}

	// Проверка загрузки и ошибок ДО рендеринга
	if (patientLoading || appointmentsLoading) return <h1>Loading</h1>
	if (patientError || appointmentsError) return <h2>Error</h2>

	// Обработка данных после загрузки
	const appointmentData = appointments.reduce((acc, item) => {
		//@ts-ignore
		acc[item.username] = item
		return acc
	}, {})

	const patient_name = localStorage.getItem('patient_name')

	//@ts-ignore
	const filteredUsers = patients.patients.filter(
		//@ts-ignore
		user => user.username === patient_name
	)

	return (
		<main className={cls.info}>
			<span className={cls.info__link}>
				<Link to={RoutePath.home}>Назад</Link>
			</span>
			<div className={cls.info__card}>
				<h4>Личный кабинет</h4>
				<img src={profile} alt='profile image' loading='lazy' />
				<ul>
					{filteredUsers.map((el: any) => (
						<>
							<li>
								<span className={cls.info__title}>Имя пользователя:</span>
								<span className={cls.info__value}>{el.username}</span>
							</li>
							<li>
								<span>Имя</span>
								<span>
									<a href=''>{el.first_name}</a>
								</span>
							</li>
							<li>
								<span>Фамилия</span>
								<span>
									<a href=''>{el.last_name}</a>
								</span>
							</li>
						</>
					))}
				</ul>

				<ul>
					<li>
						<span>Ваша запись </span>
					</li>
					<li>
						<span>Имя: </span>
						<span>
							{
								//@ts-ignore
								appointmentData.emka?.username || 'Нет'
							}
						</span>
					</li>
					<li>
						<span>Дата: {''}</span>
						<span>
							{
								//@ts-ignore
								appointmentData.emka?.date || 'Нет'
							}
						</span>
					</li>
					<li>
						<span>Время: {''}</span>
						<span>
							{
								//@ts-ignore
								appointmentData.emka?.time || 'Нет'
							}
						</span>
					</li>
					<li>
						<span>Врач: {''}</span>
						<span>
							{
								//@ts-ignore
								appointmentData.emka?.doctor || 'Нет'
							}
						</span>
					</li>
				</ul>
			</div>
			<Button onClick={handleExit} size='lg' variant='primary'>
				Выйти
			</Button>
		</main>
	)
}
