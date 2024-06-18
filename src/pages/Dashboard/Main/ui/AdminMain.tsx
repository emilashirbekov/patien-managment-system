import cls from './AdminMain.scss'
import { useMenu } from '@/app/providers/MenuProvider/lib/useMenu'
import admin_card from '@/shared/assets/admin-card.png'
import { useEffect, useState } from 'react'
import Appointments from '@/shared/assets/appointemnts.svg'
import Profile from '@/shared/assets/profile.svg'
import Operations from '@/shared/assets/operations.svg'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { useGetDepartmentsQuery } from '@/features/Departments'
import { useGetPatientsQuery } from '@/features/Patients/model/serivces/patientsAPI'
import { useGetDoctorsQuery } from '@/features/Doctors'
import { useGetAppointmentsQuery } from '@/features/Appointments/model/services/AppointmentsAPI'

const AdminMain = () => {
	const { isOpen } = useMenu()
	const username = localStorage.getItem('username')
	const [currentTime, setCurrentTime] = useState('')
	const now = new Date()
	const hour = now.getHours()
	useEffect(() => {
		if (hour >= 6 && hour < 12) {
			setCurrentTime('Доброе утро !')
		} else if (hour >= 12 && hour < 18) {
			setCurrentTime('Добрый день !')
		} else {
			setCurrentTime('Доброй ночи !')
		}
	}, [hour])
	const { data: departments, isLoading: departmentsLoading } =
		useGetDepartmentsQuery()
	const { data: patients, isLoading: patientsLoading } = useGetPatientsQuery()
	const { data: doctors, isLoading: doctorsLoading } = useGetDoctorsQuery()
	const { data: appointments, isLoading: appointmentsLoading } =
		useGetAppointmentsQuery()
	if (
		departmentsLoading ||
		patientsLoading ||
		doctorsLoading ||
		appointmentsLoading
	)
		return <PageLoader clsx={cls.loader} />
	//@ts-ignore
	const doctorsCount = Object.values(doctors.doctors).length
	//@ts-ignore
	const patientsCount = Object.values(patients.patients).length

	return (
		<section className={isOpen ? cls.home__blur : cls.home}>
			<div className={cls.home__container}>
				<div className={cls.home__card}>
					<div className={cls.home__card__text}>
						<h2>
							{currentTime},{' '}
							<span>{username ? username : 'Администратор'}</span>
						</h2>
						<p>Хорошего вам время провождения !</p>
					</div>
					<div className={cls.home__card__img}>
						<img src={admin_card} alt='Admin card img' loading='lazy' />
					</div>
				</div>
				<ul className={cls.home__stat__info}>
					<li>
						<div className={cls.home__stat__info__icon}>
							<Operations />
						</div>
						<h5>Врачи</h5>
						<p>{doctorsCount || 0}</p>
						<span>Количество врачей в организации</span>
					</li>
					<li>
						<div className={cls.home__stat__info__icon}>
							<Profile />
						</div>
						<h5>Пациенты</h5>
						<p>{patientsCount || 0}</p>
						<span>Количество пациентов в организации</span>
					</li>
					<li>
						<div className={cls.home__stat__info__icon}>
							<Appointments />
						</div>
						<h5>Приемы</h5>
						<p>{appointments.length || 0}</p>
						<span>Количество приемов в организации</span>
					</li>
					<li>
						<div className={cls.home__stat__info__icon}>
							<Operations />
						</div>
						<h5>Отделы</h5>
						<p>{departments.length || 0}</p>
						<span>Количество отделов в организации</span>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default AdminMain
