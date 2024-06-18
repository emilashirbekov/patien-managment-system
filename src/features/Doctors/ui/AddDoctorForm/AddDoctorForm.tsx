import cls from './AddDoctorForm.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import {
	FieldErrors,
	FieldValues,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'
import { useCreateDoctorMutation } from '@/features/Doctors/model/services/doctorsAPI'
import { Message } from '@/widgets/Dashboard/Message/ui/Message'
import Doctors from '../../model/types/doctors.types'

interface DoctorFormProps {
	handleSubmit: UseFormHandleSubmit<Doctors, FieldValues>
	register: UseFormRegister<FieldValues>
	errors: FieldErrors<Doctors>
	reset: any
	watch: any
	departments: any
}

export const AddDoctorForm: FC<DoctorFormProps> = props => {
	const { register, handleSubmit, watch, errors, departments, reset } = props
	const [createDoctor, { isSuccess, error }] = useCreateDoctorMutation()
	const onSubmit: SubmitHandler<any> = formValue => {
		const user_data = {
			username: formValue.username,
			first_name: formValue.first_name,
			last_name: formValue.last_name,
			password: formValue.password,
			password2: formValue.password2,
		}
		const profile_data = {
			department: formValue.department,
			address: formValue.address,
			mobile: formValue.mobile,
		}
		const registrationData = { user_data, profile_data }
		//@ts-ignore
		createDoctor(registrationData)
		reset()
	}
	//@ts-ignore

	return (
		<>
			<form
				onSubmit={handleSubmit((data, id) => {
					onSubmit(data, id)
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
									value: 10,
									message: 'Имя не может быть больше 10 символов',
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
					<span>
						<Input
							type='password'
							{...register('password', {
								required: 'Введите пароль',
								minLength: {
									value: 8,
									message: 'Пароль не может быть меньше 8 символов',
								},
							})}
							label='Пароль'
							name='password'
						/>
						{errors.password && (
							<p className={cls.error}>{errors.password.message}</p>
						)}
					</span>
					<span>
						<Input
							type='password'
							{...register('password2', {
								required: 'Повторите пароль',
								validate: value =>
									value === watch('password') || 'Пароли не совпадают',
								minLength: {
									value: 8,
									message: 'Пароль не может быть меньше 8 символов',
								},
							})}
							label='Повторите пароль'
							name='password2'
						/>
						{errors.password2 && (
							<p className={cls.error}>{errors.password2.message}</p>
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
				{isSuccess && <Message type='success' text='Врач успешно добавлен !' />}
				{error && <Message type='error' text='Ошибка !' />}
				<Button variant='primary' size='lg'>
					Добавить
				</Button>
			</form>
		</>
	)
}
