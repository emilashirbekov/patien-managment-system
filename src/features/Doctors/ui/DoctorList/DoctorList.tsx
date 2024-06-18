import cls from './DoctorList.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import GroupIcon from '@mui/icons-material/Group'
import {
	useDeleteDoctorMutation,
	useGetDoctorsQuery,
} from '../../model/services/doctorsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'

interface DoctorListProps {
	searchQuery: string
}

export const DoctorList = ({ searchQuery }: DoctorListProps) => {
	const { data, isLoading, isError } = useGetDoctorsQuery()
	const [deleteDoctor] = useDeleteDoctorMutation()
	if (isLoading) return <PageLoader clsx={cls.loader} />
	if (isError) return <h1 className={cls.error}>Ошибка</h1>

	//@ts-ignore
	const doctors = data.doctors.map(doctorData => ({
		...doctorData.doctor,
		first_name: doctorData.first_name,
		id: doctorData.id,
		last_name: doctorData.last_name,
		status: doctorData.status,
		username: doctorData.username,
	}))

	//@ts-ignore
	const filteredDoctors = doctors.filter(doctor =>
		`${doctor.first_name} ${doctor.last_name} ${doctor.username}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	)

	return (
		<>
			{filteredDoctors.length > 0 ? (
				filteredDoctors.map((doctor: any, i: any) => (
					<table className={cls.table} key={i + 1}>
						<thead>
							<tr>
								<th>Пользователь</th>
								<th>Имя</th>
								<th>Фамилия</th>
								<th>Отдел</th>
								<th>Адрес</th>
								<th>Мобильный телефон</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>{doctor.username}</td>
								<td>{doctor.first_name}</td>
								<td>{doctor.last_name}</td>
								<td>{doctor.department}</td>
								<td>{doctor.address}</td>
								<td>{doctor.mobile}</td>
								<td>{doctor.password}</td>
								<td onClick={() => deleteDoctor(doctor.id)}>
									<DeleteIcon style={{ color: 'red', cursor: 'pointer' }} />
								</td>
								{/* <td>
									<Link to={`${RoutePath.change_doctor}/${doctor.id}`}>
										<CreateIcon style={{ color: 'blue' }} />
									</Link>
								</td> */}
							</tr>
						</tbody>
					</table>
				))
			) : (
				<h2 className={cls.empty}>
					Нет Врачей <GroupIcon fontSize='large' color='primary' />
				</h2>
			)}
		</>
	)
}
