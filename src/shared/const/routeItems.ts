import { RoutePath } from '../config/routeConfig'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import BookIcon from '@mui/icons-material/Book'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'
type routeItemsTypes = {
	icon: any
	path: string
	name: string
}
export const routeItems: routeItemsTypes[] = [
	{ icon: DashboardIcon, path: RoutePath.Main, name: 'Главная' },
	{ icon: GroupIcon, path: RoutePath.Doctors, name: 'Доктора' },
	{ icon: AirlineSeatFlatIcon, path: RoutePath.Patients, name: 'Пациенты' },
	{ icon: BookIcon, path: RoutePath.Book, name: 'Записи' },
]
