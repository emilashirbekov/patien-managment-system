import cls from './Departments.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import { useState } from 'react'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { Modal } from '@/shared/ui/Modal/Modal'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/Input/Input'
import { Message } from '@/widgets/Dashboard/Message/ui/Message'
import { Button } from '@/shared/ui/Button/Button'
import {
	useDeleteDepartmentMutation,
	useGetDepartmentsQuery,
	useUpdateDepartmentMutation,
} from '@/features/Departments'
import DepartmentsType from '@/features/Departments/model/types/departments'

interface DepartmentsListProps {
	searchQuery: string
}

export const DepartmentsList = ({ searchQuery }: DepartmentsListProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<DepartmentsType>({
		mode: 'onBlur',
	})
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false)
	const handleUpdateModal = () => setUpdateModalOpen(prev => !prev)
	const [deleteDepartment, { isSuccess, error: departmentError }] =
		useDeleteDepartmentMutation()
	const [updateDepartment, { isSuccess: updateSuccess, error: updateError }] =
		useUpdateDepartmentMutation()
	const handleUpdate = (formValue: any, id: any) => {
		updateDepartment({ id, department: formValue })
	}
	const { data: departments, isLoading, error } = useGetDepartmentsQuery()
	if (isLoading) return <PageLoader clsx={cls.loader} />
	if (error) return <h1>Ошибка</h1>

	//@ts-ignore
	const filteredDepartments = departments.filter(department =>
		`${department.department}`.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<>
			{filteredDepartments.length > 0 ? (
				filteredDepartments.map((department, i) => (
					<table className={cls.table} key={i + 1}>
						<thead>
							<tr>
								<th>Номер департамента </th>
								<th>Название</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{department.id}</td>
								<td>{department.department}</td>
								<td
									//@ts-ignore
									onClick={() => deleteDepartment(department.id)}
								>
									<DeleteIcon style={{ color: 'red' }} />
								</td>
								<td onClick={handleUpdateModal}>
									<CreateIcon style={{ color: 'blue' }} />
									<Modal isOpen={isUpdateModalOpen}>
										<form
											onSubmit={handleSubmit(data => {
												handleUpdate(
													//@ts-ignore
													data,
													department.id
												)
												reset()
											})}
										>
											<Input
												name='department'
												label='Отдел'
												placeholder='Введите новое название отдела'
												{...register('department', {
													required: 'Введите название отдела',
												})}
												id='username'
												type='text'
											/>
											{errors.department && (
												<p className={cls.error}>{errors.department.message}</p>
											)}
											{updateSuccess && (
												<Message
													type='success'
													text='Отдел успешно обновлен !'
												/>
											)}
											{updateError && <Message type='error' text='Ошибка !' />}
											<Button type='submit' variant='primary'>
												Обновить
											</Button>
										</form>
									</Modal>
								</td>
							</tr>
						</tbody>
					</table>
				))
			) : (
				<h2 className={cls.empty}>
					Нет отделов <LocationCityIcon fontSize='large' color='primary' />
				</h2>
			)}
		</>
	)
}
