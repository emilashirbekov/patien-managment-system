import { RoutePath } from '../config/routeConfig'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import BookIcon from '@mui/icons-material/Book'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import CropLandscapeIcon from '@mui/icons-material/CropLandscape'
type routeItemsTypes = {
	icon: any
	path: string
	name: string
}
export const routeItems: routeItemsTypes[] = [
	{ icon: DashboardIcon, path: RoutePath.admin, name: 'Главная' },
	{ icon: GroupIcon, path: RoutePath.Doctors, name: 'Врачи' },
	{ icon: AirlineSeatFlatIcon, path: RoutePath.Patients, name: 'Пациенты' },
	{ icon: BookIcon, path: RoutePath.admin_appointments, name: 'Записи' },
	{ icon: LocationCityIcon, path: RoutePath.departments, name: 'Отделы' },
	{ icon: CropLandscapeIcon, path: RoutePath.home, name: 'К сайту' },
]

export const routeItemsDoctor: routeItemsTypes[] = [
	{ icon: DashboardIcon, path: RoutePath.admin, name: 'Главная' },
	{ icon: AirlineSeatFlatIcon, path: RoutePath.Patients, name: 'Пациенты' },
	{ icon: BookIcon, path: RoutePath.admin_appointments, name: 'Записи' },
	{ icon: CropLandscapeIcon, path: RoutePath.home, name: 'К сайту' },
]
