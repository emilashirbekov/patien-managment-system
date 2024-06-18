import cls from '../AddDoctor/AddDoctor.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useUpdateDoctorMutation } from '@/features/Doctors'
import DepartmentsType from '@/features/Departments/model/types/departments'
import Doctors from '@/features/Doctors/model/types/doctors.types'

interface DoctorFormProps {
	createDoctor: any
	handleSubmit: any
	register: any
	errors: any
	reset: any
	watch: any
	departments: DepartmentsType[]
}

export const ChangeDoctorForm: FC<DoctorFormProps> = props => {
	const { register, handleSubmit, errors, departments, reset } = props
	const { id } = useParams()
	const [updateDoctor] = useUpdateDoctorMutation()
	const onSubmit: SubmitHandler<Doctors> = (id, formValue: any) => {
		const user_data = {
			username: formValue.username,
			first_name: formValue.first_name,
			last_name: formValue.last_name,
		}
		const profile_data = {
			department: formValue.department,
			address: formValue.address,
			mobile: formValue.mobile,
		}
		const registrationData = { user_data, profile_data }

		//@ts-ignore
		updateDoctor({ id, doctors: registrationData })
		reset()
	}

	return (
		<>
			<form
				onSubmit={handleSubmit((data: any) => {
					//@ts-ignore
					onSubmit(id, data)
					reset()
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
							{...register('first_name', {
								required: 'Введите имя',
								maxLength: {
									value: 100,
									message: 'Имя не может быть больше 100 символов',
								},
							})}
							type='text'
							name='first_name'
							label='Имя'
						/>
						{errors.first_name && (
							<p className={cls.error}>{errors.first_name.message}</p>
						)}
					</span>
					<span>
						<Input
							type='text'
							{...register('last_name', {
								required: 'Введите фамилию',
								maxLength: {
									value: 15,
									message: 'Имя не может быть больше 15 символов',
								},
							})}
							name='last_name'
							label='Фамилия'
						/>
						{errors.last_name && (
							<p className={cls.error}>{errors.last_name.message}</p>
						)}
					</span>
				</div>
				<div className={cls.col_1}>
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
							type='text'
							{...register('address', {
								required: 'Введите адрес',
								maxLength: {
									value: 15,
									message: 'Адрес не может быть больше 15 символов',
								},
							})}
							label='Адрес'
							name='address'
						/>
						{errors.address && (
							<p className={cls.error}>{errors.address.message}</p>
						)}
					</span>
				</div>
				<div style={{ marginBottom: '20px' }} className={cls.col_1}>
					<span className={cls.select}>
						<label className={cls.label}>
							Выберите отдел
							<sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
						</label>
						<select {...register('department', { required: 'Выберите отдел' })}>
							{departments.map((item: any) => (
								<option key={item.id} value={item.department}>
									{item.department}
								</option>
							))}
						</select>
					</span>
				</div>
				<Button variant='primary' size='lg'>
					Обновить
				</Button>
			</form>
		</>
	)
}
