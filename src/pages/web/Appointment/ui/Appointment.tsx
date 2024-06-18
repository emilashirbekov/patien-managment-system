import { Input } from '@/shared/ui/Input/Input'
import cls from './Appointment.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { useCreateAppointmentMutation } from '@/features/Appointments/model/services/AppointmentsAPI'
import { useGetDoctorsQuery } from '@/features/Doctors/model/services/doctorsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import appointment from '@/shared/assets/appointments.png'
import { Message } from '@/widgets/Dashboard/Message/ui/Message'
import Doctors from '@/features/Doctors/model/types/doctors.types'
import { FormEvent, useState } from 'react'

export const Appointment = () => {
	const [active, setActive] = useState('')
	const [time, setTime] = useState('')
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			username: '',
			mobile: '',
			appointment_date: '',
			appointment_time: '',
			doctor: '',
		},
	})
	const [createAppointment, { isSuccess, error }] =
		useCreateAppointmentMutation()
	const { data, isLoading } = useGetDoctorsQuery()
	if (isLoading) return <PageLoader clsx={cls.loader} />

	const onSubmit = (data: any) => {
		const appointment = {
			username: data.username,
			appointment_date: data.appointment_date,
			appointment_time: time,
			doctor: data.doctor,
			mobile: data.mobile,
		}
		createAppointment(appointment)

		reset()
	}

	//@ts-ignore
	const doctors = data.doctors.map(doctorData => ({
		...doctorData.doctor,
		first_name: doctorData.first_name,
		id: doctorData.id,
		last_name: doctorData.last_name,
		status: doctorData.status,
		username: doctorData.username,
	}))

	const availableTime = [
		'8:00',
		'8:20',
		'8:40',
		'9:00',
		'9:20',
		'9:40',
		'10:00',
		'10:20',
		'10:40',
		'11:00',
		'11:20',
		'11:40',
		'13:00',
		'13:20',
		'13:40',
		'14:00',
		'14:20',
		'14:40',
		'15:00',
		'15:20',
		'15:40',
		'16:00',
		'16:20',
		'16:40',
		'17:00',
	]

	const handleTime = (e: any) => {
		const selectedTime = e.target.getAttribute('data-time')
		setTime(selectedTime)
		setActive(selectedTime)
	}

	const getTodayDate = () => {
		const today = new Date()
		const year = today.getFullYear()
		const month = String(today.getMonth() + 1).padStart(2, '0')
		const day = String(today.getDate()).padStart(2, '0')
		return `${year}-${month}-${day}`
	}
	return (
		<section className={cls.appointment}>
			<form
				onSubmit={handleSubmit(data => {
					onSubmit(data)
				})}
				className={cls.appointment__form}
			>
				<Input
					placeholder='Имя'
					{...register('username', {
						required: 'Введите имя пользователя',
						maxLength: {
							value: 15,
							message: 'Имя не может быть больше 15 символов',
						},
					})}
					type='text'
					name='username'
				/>
				{errors.username && (
					<p className={cls.error}>{errors.username.message}</p>
				)}
				<Input
					type='text'
					placeholder='Номер телефона'
					{...register('mobile', {
						required: 'Введите номер телефона',
						maxLength: {
							value: 15,
							message: 'Номер телефона не может быть больше 15 символов',
						},
					})}
					name='mobile'
				/>
				{errors.mobile && <p className={cls.error}>{errors.mobile.message}</p>}
				<Input
					type='date'
					name='date'
					min={getTodayDate()}
					placeholder='Выберите дату'
					{...register('appointment_date', {
						required: 'Выберите дату',
					})}
				/>
				{errors.appointment_date && (
					<p className={cls.error}>{errors.appointment_date.message}</p>
				)}
				{/* <Input
					type='time'
					name='time'
					placeholder='Выберите время'
					{...register('appointment_time', {
						required: 'Выберите время',
					})}
				/>
				{errors.appointment_time && (
					<p className={cls.error}>{errors.appointment_time.message}</p>
				)} */}
				<div className={cls.choose__data}>Выберите время</div>
				<ul className={cls.time__container}>
					{availableTime.map(time => (
						<li
							onClick={handleTime}
							className={active === time ? cls.active : cls.time}
							key={time}
							data-time={time}
						>
							{time}
						</li>
					))}
				</ul>
				<select
					className={cls.select}
					{...register('doctor', { required: 'Выберите врача' })}
				>
					{doctors.map((doctor: Doctors) => (
						<option key={doctor.first_name} value={doctor.first_name}>
							{doctor.first_name} - {doctor.department}
						</option>
					))}
				</select>
				{isSuccess && <Message type='success' text='Запись прошла успешно !' />}
				{error && <Message type='error' text='Ошибка !' />}
				<Button type='submit' variant='primary' size='lg'>
					Записаться
				</Button>
			</form>
			<div className={cls.appointment__images}>
				<img src={appointment} alt='appointment image' />
			</div>
		</section>
	)
}
