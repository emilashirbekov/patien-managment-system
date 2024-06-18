import { Search } from '@/widgets/Dashboard/Search/Search'
import cls from './PatientHeader.module.scss'
import { Link } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig'

interface PatientHeaderProps {
	searchQuery?: string
	setSearchQuery?: any
}

export const PatientHeader = ({
	searchQuery,
	setSearchQuery,
}: PatientHeaderProps) => {
	return (
		<div className={cls.content__header}>
			<p>Список пациентов</p>
			<p>
				<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			</p>
			<Link to={RoutePath.add_patient} className={cls.plus}>
				+
			</Link>
		</div>
	)
}
