import { Search } from '@/widgets/Search/Search'
import cls from './Doctors.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import {
	useDeleteDoctorMutation,
	useGetDoctorsQuery,
} from '@/features/DoctorsAction/model/services/doctorsAPI'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import DeleteIcon from '@mui/icons-material/Delete'

const Doctors = () => {
	const { data: doctors, isLoading, isError } = useGetDoctorsQuery()
	const [deleteDoctor] = useDeleteDoctorMutation()
	if (isLoading) {
		return <PageLoader />
	}
	if (isError) {
		return <h1>Ошибка</h1>
	}

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
				{doctors.map(doctor => (
					<table className={cls.table} key={doctor.id}>
						<thead>
							<tr>
								<th>Фото</th>
								<th>Имя</th>
								<th>Фамилия</th>
								<th>Отчество</th>
								<th>Дата рождения</th>
								<th>Специализация</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img
										src={doctor.avatar}
										width={50}
										height={50}
										alt='Фото доктора'
									/>
								</td>
								<td>{doctor.first_name}</td>
								<td>{doctor.last_name}</td>
								<td>{doctor.middle_name}</td>
								<td>{doctor.date_of_birth}</td>
								<td>{doctor.specialization}</td>
								<td
									//@ts-ignore
									onClick={() => deleteDoctor(doctor.id)}
								>
									<DeleteIcon style={{ color: 'red' }} />
								</td>
							</tr>
						</tbody>
					</table>
				))}
			</div>
		</section>
	)
}

export default Doctors
