import { FC } from 'react'
import cls from './AddAdminAppointmentsForm.module.scss'
import {
	FieldErrors,
	FieldValues,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { AppointmentsType } from '@/features/Appointments/model/types/appointmentTypes'
import { Input } from '@/shared/ui/Input/Input'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { useGetDoctorsQuery } from '@/features/Doctors'
import { Message } from '@/widgets/Dashboard/Message/ui/Message'
import { Button } from '@/shared/ui/Button/Button'
import Doctors from '@/features/Doctors/model/types/doctors.types'
import {
	useCreateAppointmentMutation,
	useUpdateAppointmentMutation,
} from '@/features/Appointments/model/services/AppointmentsAPI'
import { useLocation, useParams } from 'react-router-dom'

interface AddAdminAppointmentsFormProps {
	handleSubmit: UseFormHandleSubmit<AppointmentsType, FieldValues>
	register: UseFormRegister<FieldValues>
	errors: FieldErrors<AppointmentsType>
	reset: any
	watch: any
}

export const AddAdminAppointmentsForm: FC<
	AddAdminAppointmentsFormProps
> = props => {
	const { handleSubmit, register, reset, errors } = props
	const { data, isLoading } = useGetDoctorsQuery()
	const { pathname } = useLocation()
	const { id } = useParams()
	if (isLoading) return <PageLoader clsx={cls.loader} />

	const [createAppointment, { isSuccess, error }] =
		useCreateAppointmentMutation()
	const [
		updateAppointment,
		{ isSuccess: appointmentSuccess, error: appointmentError },
	] = useUpdateAppointmentMutation()

	const onSubmit = (data: FieldValues) => {
		pathname.includes('change_appointment')
			? updateAppointment({ id, appointment: data })
			: createAppointment(data)
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
	return (
		<form
			onSubmit={handleSubmit(data => {
				onSubmit(data)
			})}
		>
			<div className={cls.col_1}>
				<span>
					<Input
						{...register('username', {
							required: 'Введите имя пользователя',
							maxLength: {
								value: 15,
								message: 'Имя не может быть больше 15 символов',
							},
						})}
						type='text'
						name='username'
						label='Имя пользователя'
					/>
					{errors.username && (
						<p className={cls.error}>{errors.username.message}</p>
					)}
				</span>
				<span>
					<Input
						type='text'
						{...register('mobile', {
							required: 'Введите номер телефона',
							maxLength: {
								value: 15,
								message: 'Номер телефона не может быть больше 15 символов',
							},
						})}
						label='Номер телефона'
						name='mobile'
					/>
					{errors.mobile && (
						<p className={cls.error}>{errors.mobile.message}</p>
					)}
				</span>
				<span>
					<Input
						type='date'
						name='date'
						label='Дата'
						placeholder='Выберите дату'
						{...register('appointment_date', {
							required: 'Выберите дату',
						})}
					/>
					{errors.appointment_date && (
						<p className={cls.error}>{errors.appointment_date.message}</p>
					)}
				</span>
				<span>
					<Input
						type='time'
						name='time'
						label='Время'
						placeholder='Выберите время'
						{...register('appointment_time', {
							required: 'Выберите время',
						})}
					/>
					{errors.appointment_time && (
						<p className={cls.error}>{errors.appointment_time.message}</p>
					)}
				</span>
				<span className={cls.select}>
					<label className={cls.label}>
						Выберите врача
						<sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
					</label>
					<select {...register('doctor', { required: 'Выберите врача' })}>
						{doctors.map((doctor: Doctors) => (
							<option key={doctor.first_name} value={doctor.first_name}>
								{doctor.first_name} - {doctor.department}
							</option>
						))}
					</select>
				</span>
				{isSuccess && (
					<Message type='success' text='Запись добавлена успешно !' />
				)}
				{error && <Message type='error' text='Ошибка !' />}
				{appointmentSuccess && (
					<Message type='success' text='Запись обновлена успешно !' />
				)}
				{appointmentError && <Message type='error' text='Ошибка !' />}
			</div>
			<Button type='submit' variant='primary' size='lg'>
				{pathname.includes('change_appointment') ? 'Обновить' : 'Записаться'}
			</Button>
		</form>
	)
}
