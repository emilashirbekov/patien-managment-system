import cls from './Doctors.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import {
	useDeleteDoctorMutation,
	useGetDoctorsQuery,
} from '@/features/DoctorsAction/model/services/doctorsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import { Search } from '@/widgets/Dashboard/Search/Search'
import GroupIcon from '@mui/icons-material/Group'

const Doctors = () => {
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

	return (
		<section className={cls.doctors}>
			<div className={cls.content}>
				<div className={cls.content__header}>
					<p>Список докторов</p>
					<p>
						<Search />
					</p>
					<Link to={RoutePath.add_doctor} className={cls.plus}>
						+
					</Link>
				</div>
				{doctors.length > 0 ? ( //@ts-ignore
					doctors.map((doctor, i) => (
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
									<td
										//@ts-ignore
										onClick={() => deleteDoctor(doctor.id)}
									>
										<DeleteIcon style={{ color: 'red' }} />
									</td>
									<td>
										<Link to={`${RoutePath.change_doctor}/${doctor.id}`}>
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
		</section>
	)
}

export default Doctors
