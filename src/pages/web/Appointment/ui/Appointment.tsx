import { Input } from '@/shared/ui/Input/Input'
import cls from './Appointment.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import {
	useCreateAppointmentMutation,
	useGetAppointmentsQuery,
} from '@/features/Appointments/model/services/AppointmentsAPI'
import { useGetDoctorsQuery } from '@/features/DoctorsAction/model/services/doctorsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { Doctors } from '@/features/DoctorsAction/model/types/doctors.types'
import appointment from '@/shared/assets/appointments.png'

export const Appointment = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		defaultValues: {
			date: '',
			time: '',
			doctor: 'Эмиль',
		},
	})
	const [createAppointment] = useCreateAppointmentMutation()
	// const { data: appointmentData, isLoading: appointmentLoading } =
	// 	useGetAppointmentsQuery()
	const { data, isLoading } = useGetDoctorsQuery()
	if (isLoading) return <PageLoader />

	const onSubmit = (data: any) => {
		createAppointment(data)
		reset()
	}
	// console.log(appointmentData)

	//@ts-ignore
	const doctors = data.doctors.map(doctorData => ({
		...doctorData.doctor,
		first_name: doctorData.first_name,
		id: doctorData.id,
		last_name: doctorData.last_name,
		status: doctorData.status,
		username: doctorData.username,
	}))

	return (
		<section className={cls.appointment}>
			<form
				onSubmit={handleSubmit(data => {
					onSubmit(data)
				})}
				className={cls.appointment__form}
			>
				<Input
					type='date'
					name='date'
					// label='Дата'
					placeholder='Выберите дату'
					{...register('date', {
						required: 'Выберите дату',
					})}
				/>
				{errors.date && <p className={cls.error}>{errors.date.message}</p>}
				<Input
					type='time'
					name='time'
					// label='Время'
					placeholder='Выберите время'
					{...register('time', {
						required: 'Выберите время',
					})}
				/>
				{errors.time && <p className={cls.error}>{errors.time.message}</p>}

				<div className={cls.select}>
					<select {...register('doctor', { required: 'Выберите врача' })}>
						{doctors.map((doctor: Doctors) => (
							<option key={doctor.first_name} value={doctor.first_name}>
								{doctor.first_name} - {doctor.department}
							</option>
						))}
					</select>
				</div>

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
