import { PatientsTypes } from '@/features/Patients/model/types/patients'
import cls from './PatientList.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'
import { useDeletePatientMutation } from '@/features/Patients/model/serivces/patientsAPI'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'

interface PatientListProps {
	filteredPatients: PatientsTypes[]
}

export const PatientList = ({ filteredPatients }: PatientListProps) => {
	const [deletePatient] = useDeletePatientMutation()
	return (
		<>
			{filteredPatients.length > 0 ? (
				filteredPatients.map(patient => (
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
								{/* <td>
									<Link to={`${RoutePath.change_patient}/${patient.id}`}>
										<CreateIcon style={{ color: 'blue' }} />
									</Link>
								</td> */}
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
		</>
	)
}
