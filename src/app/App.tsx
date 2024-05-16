import './styles/global.scss'
import { AppRouter } from './providers/Router'
import { AppWrapper } from '@/widgets/AppWrapper'

const App = () => {
	return (
		<AppWrapper>
			<AppRouter />
		</AppWrapper>
	)
}

export default App
