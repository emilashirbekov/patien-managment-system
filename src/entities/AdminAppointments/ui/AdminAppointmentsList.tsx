import { Search } from '@/widgets/Dashboard/Search/Search'
import cls from './AdminAppointments.module.scss'
import {
	useDeleteAppointmentMutation,
	useGetAppointmentsQuery,
} from '@/features/Appointments/model/services/AppointmentsAPI'
import GroupIcon from '@mui/icons-material/Group'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import { useState } from 'react'

export const AdminAppointmentsList = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const { data: appointments, isLoading, error } = useGetAppointmentsQuery()
	const [deleteAppointment] = useDeleteAppointmentMutation()
	if (isLoading) return <p></p>
	if (error) return <p></p>
	//@ts-ignore
	const filteredAppointments = appointments.filter(appointment =>
		`${appointment.username}`.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<div className={cls.content}>
			<div className={cls.content__header}>
				<p>Список приемов</p>
				<p>
					<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				</p>
				<Link to={RoutePath.add_appointment} className={cls.plus}>
					+
				</Link>
			</div>
			{filteredAppointments.length > 0 ? (
				//@ts-ignore
				filteredAppointments.map(el => (
					<table className={cls.table} key={el.id}>
						<thead>
							<tr>
								<th>Имя</th>
								<th>Мобильный телефон</th>
								<th>Дата</th>
								<th>Время</th>
								<th>Врач</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{el.username}</td>
								<td>{el.mobile}</td>
								<td>{el.appointment_date}</td>
								<td>{el.appointment_time}</td>
								<td>{el.doctor}</td>

								<td
									//@ts-ignore
									onClick={() => deleteAppointment(el.id)}
								>
									<DeleteIcon style={{ color: 'red', cursor: 'pointer' }} />
								</td>
								<td>
									<Link to={`${RoutePath.change_appointment}/${el.id}`}>
										<CreateIcon style={{ color: 'blue' }} />
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				))
			) : (
				<h2 className={cls.empty}>
					Нет Врачей <GroupIcon fontSize='large' color='primary' />
				</h2>
			)}
		</div>
	)
}
