import cls from './Patients.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import { Search } from '@/widgets/Dashboard/Search/Search'
import {
	useDeletePatientMutation,
	useGetPatientsQuery,
} from '@/features/Patients/model/serivces/patientsAPI'
import { PatientsTypes } from '@/features/Patients/model/types/patients'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'

const Patients = () => {
	const { data, isLoading, isError } = useGetPatientsQuery()
	const [deletePatient] = useDeletePatientMutation()
	if (isLoading) return <PageLoader clsx={cls.loader} />
	if (isError) return <h1>Ошибка</h1>
	//@ts-ignore
	const patients: PatientsTypes[] = data.patients.map(patientsData => ({
		...patientsData.patient,
		first_name: patientsData.first_name,
		id: patientsData.id,
		last_name: patientsData.last_name,
		status: patientsData.status,
		username: patientsData.username,
	}))

	return (
		<section className={cls.patients}>
			<div className={cls.content}>
				<div className={cls.content__header}>
					<p>Список пациентов</p>
					<p>
						<Search />
					</p>
					<Link to={RoutePath.add_patient} className={cls.plus}>
						+
					</Link>
				</div>
				{patients.length > 0 ? (
					patients.map(patient => (
						<table className={cls.table} key={patient.id}>
							<thead>
								<tr>
									<th>Пользователь</th>
									<th>Имя</th>
									<th>Фамилия</th>
									<th>Возраст</th>
									<th>Адрес</th>
									<th>Мобильный телефон</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{patient.username}</td>
									<td>{patient.first_name}</td>
									<td>{patient.last_name}</td>
									<td>{patient.age}</td>
									<td>{patient.address}</td>
									<td>{patient.mobile}</td>
									<td>{patient.password}</td>
									<td
										//@ts-ignore
										onClick={() => deletePatient(patient.id)}
									>
										<DeleteIcon style={{ color: 'red' }} />
									</td>
									<td>
										<Link to={`${RoutePath.change_patient}/${patient.id}`}>
											<CreateIcon style={{ color: 'blue' }} />
										</Link>
									</td>
								</tr>
							</tbody>
						</table>
					))
				) : (
					<h2 className={cls.empty}>
						Нет пациентов
						<AirlineSeatFlatIcon fontSize='large' color='primary' />
					</h2>
				)}
			</div>
		</section>
	)
}

export default Patients
