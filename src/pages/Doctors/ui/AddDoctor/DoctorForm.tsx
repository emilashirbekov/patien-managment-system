import { Doctors } from '@/features/DoctorsAction/model/types/doctors.types'
import cls from './AddDoctor.module.scss'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { FC } from 'react'
import {
	FieldErrors,
	FieldValues,
	UseFormHandleSubmit,
	UseFormRegister,
} from 'react-hook-form'

interface DoctorFormProps {
	createDoctor: any
	handleSubmit: UseFormHandleSubmit<Doctors, FieldValues>
	register: UseFormRegister<FieldValues>
	errors: FieldErrors<Doctors>
	reset: any
	departments: any
}

export const DoctorForm: FC<DoctorFormProps> = props => {
	const { register, handleSubmit, createDoctor, errors, departments, reset } =
		props
	const onSubmit = (data: any) => {
		createDoctor(data)
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(data => {
					onSubmit(data)
					reset()
				})}
			>
				<div className={cls.col_1}>
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
					<span>
						<Input
							{...register('middle_name', {
								required: 'Введите отчество',
								maxLength: {
									value: 15,
									message: 'Имя не может быть больше 15 символов',
								},
							})}
							type='text'
							name='middle_name'
							label='Отчество'
						/>
						{errors.middle_name && (
							<p className={cls.error}>{errors.middle_name.message}</p>
						)}
					</span>
				</div>
				<div className={cls.col_1}>
					<span>
						<Input
							{...register('date_of_birth', {
								required: 'Выберите дату рождения',
							})}
							name='date_of_birth'
							type='date'
							label='Выберите дату'
						/>
						{errors.date_of_birth && (
							<p className={cls.error}>{errors.date_of_birth.message}</p>
						)}
					</span>
					<div>
						<label className={cls.label}>
							Выберите пол
							<sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
						</label>
						<div className={cls.gender}>
							<div>
								<label className={cls.label}>Mужчина</label>
								<Input
									variant='radio'
									type='radio'
									name='gender'
									value='male'
									{...register('gender', {
										required: 'Выберите пол',
									})}
								/>
							</div>
							<div>
								<label className={cls.label}>Женщина</label>
								<Input
									variant='radio'
									type='radio'
									name='gender'
									value='female'
									{...register('gender', {
										required: 'Выберите пол',
									})}
								/>
							</div>
							{errors.gender && (
								<p className={cls.error}>{errors.gender.message}</p>
							)}
						</div>
					</div>
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
					<span>
						<Input
							label='Фото'
							{...register('avatar', {
								required: 'Выберите фото',
							})}
							variant='file'
							name='avatar'
							type='file'
						/>
						{errors.avatar && (
							<p className={cls.error}>{errors.avatar.message}</p>
						)}
					</span>
					<span>
						<span className={cls.select}>
							<label className={cls.label}>
								Выберите отдел
								<sup style={{ color: 'red', fontSize: '12px' }}>*</sup>
							</label>
							<select
								{...register('specialization', { required: 'Выберите отдел' })}
							>
								{departments.map((item: any) => (
									<option key={item.id} value={item.name}>
										{item.name}
									</option>
								))}
							</select>
						</span>
					</span>
				</div>
				<Button variant='primary' size='lg'>
					Добавить
				</Button>
			</form>
		</>
	)
}
