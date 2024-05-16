import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { MenuContextProvider } from './app/providers/MenuProvider/ui/MenuContextProvider'
import { Provider } from 'react-redux'
import { store } from './app/providers/StoreProvider/config/store'
import '@/app/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<MenuContextProvider>
			<BrowserRouter>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</BrowserRouter>
		</MenuContextProvider>
	</Provider>
)
