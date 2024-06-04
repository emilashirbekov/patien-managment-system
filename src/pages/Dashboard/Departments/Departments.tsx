import cls from './Departments.module.scss'
import { Search } from '@/widgets/Dashboard/Search/Search'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import {
	useCreateDepartmentMutation,
	useDeleteDepartmentMutation,
	useGetDepartmentsQuery,
	useUpdateDepartmentMutation,
} from '@/features/Departments/model/services/departmentsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { useState } from 'react'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { DepartmentsType } from '@/features/Departments/model/types/departments'
import { useForm } from 'react-hook-form'
import LocationCityIcon from '@mui/icons-material/LocationCity'

export const Departments = () => {
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
	const { data: departments, isLoading, error } = useGetDepartmentsQuery()
	const [updateDepartment] = useUpdateDepartmentMutation()
	const [deleteDepartment] = useDeleteDepartmentMutation()
	const [createDepartment] = useCreateDepartmentMutation()
	if (isLoading) return <PageLoader clsx={cls.loader} />
	if (error) return <h1>Ошибка</h1>
	const handleUpdate = (formValue: any, id: any) => {
		updateDepartment({ id, department: formValue.department })
	}
	const handleCreate = (data: DepartmentsType) => {
		createDepartment(data)
	}
	return (
		<section className={cls.department}>
			<div className={cls.content}>
				<div className={cls.content__header}>
					<p>Список отделов</p>
					<p>
						<Search />
					</p>
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
								<Button type='submit' variant='primary'>
									Добавить
								</Button>
							</form>
						</Modal>
					</button>
				</div>
				{departments.length > 0 ? (
					departments.map((department, i) => (
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
									<td onClick={handleModal}>
										<CreateIcon style={{ color: 'blue' }} />
										<Modal isOpen={isModalOpen}>
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
													<p className={cls.error}>
														{errors.department.message}
													</p>
												)}
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
			</div>
		</section>
	)
}
