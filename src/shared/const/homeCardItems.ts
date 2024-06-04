import Appointments from '@/shared/assets/appointemnts.svg'
import Profile from '@/shared/assets/profile.svg'
import Operations from '@/shared/assets/operations.svg'

interface homeCardsProps {
	id: string
	img: any
	title: string
	count: number
	statistics: string
}

export const homeCardItems: homeCardsProps[] = [
	{
		id: '1',
		img: Appointments,
		title: 'Приемы',
		count: 250,
		statistics: 'на 40% больше чем в прошлом месяце',
	},
	{
		id: '2',
		img: Profile,
		title: 'Новые пациенты',
		count: 140,
		statistics: 'на 20% больше чем в прошлом месяце',
	},
	{
		id: '3',
		img: Operations,
		title: 'Доктора',
		count: 56,
		statistics: 'на 5% больше чем в прошлом месяце',
	},
]
