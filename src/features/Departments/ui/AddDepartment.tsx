import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { Message } from '@/widgets/Dashboard/Message/ui/Message'
import cls from './AddDepartment.module.scss'
import { useCreateDepartmentMutation } from '../model/services/departmentsAPI'
import DepartmentsType from '../model/types/departments'

export const AddDepartment = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<DepartmentsType>({
		mode: 'onBlur',
	})
	const [isModalOpen, setModalOpen] = useState(false)
	const handleModal = () => setModalOpen(prev => !prev)
	const [createDepartment, { error: createError, isSuccess }] =
		useCreateDepartmentMutation()
	const handleCreate = (data: DepartmentsType) => {
		createDepartment(data)
	}

	return (
		<button onClick={handleModal} className={cls.plus}>
			+
			<Modal isOpen={isModalOpen}>
				<form
					onSubmit={handleSubmit(data => {
						handleCreate(data)
						reset()
					})}
				>
					<Input
						name='department'
						label='Отдел'
						placeholder='Введите название отдела'
						{...register('department', {
							required: 'Введите название отдела',
						})}
						id='username'
						type='text'
					/>
					{errors.department && (
						<p className={cls.error}>{errors.department.message}</p>
					)}
					{isSuccess && (
						<Message type='success' text='Отдел успешно добавлен !' />
					)}
					{createError && <Message type='error' text='Ошибка !' />}
					<Button type='submit' variant='primary'>
						Добавить
					</Button>
				</form>
			</Modal>
		</button>
	)
}
