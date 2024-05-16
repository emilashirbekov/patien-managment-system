import { Search } from '@/widgets/Search/Search'
import cls from './ParticipantList.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'
import PageLoader from '@/shared/ui/PageLoader/PageLoader'

interface ParticipantListLayoutProps {
	data: any
	isLoading: boolean
	isError: boolean
	title: string
}

export const ParticipantListLayout = (props: ParticipantListLayoutProps) => {
	const { data, isLoading, isError, title } = props
	if (isLoading) {
		return <PageLoader />
	}
	if (isError) {
		return <h1>Ошибка</h1>
	}
	return (
		<div>
			<section className={cls.doctors}>
				<div className={cls.content}>
					<div className={cls.content__header}>
						<h2>{title}</h2>
						<p>
							<Search />
						</p>
						<Link to={RoutePath.add_doctor} className={cls.plus}>
							+
						</Link>
					</div>
					{/* {data.map(el => (
						<table className={cls.table} key={el.id}>
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
											src={el.avatar}
											width={50}
											height={50}
											alt='Фото доктора'
										/>
									</td>
									<td>{el.first_name}</td>
									<td>{el.last_name}</td>
									<td>{el.middle_name}</td>
									<td>{el.date_of_birth}</td>
									<td>{el.specialization}</td>
								</tr>
							</tbody>
						</table>
					))} */}
				</div>
			</section>
		</div>
	)
}
