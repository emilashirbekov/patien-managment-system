import { doctorsAPI } from '@/features/DoctorsAction/model/services/doctorsAPI'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[doctorsAPI.reducerPath]: doctorsAPI.reducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(doctorsAPI.middleware),
})

setupListeners(store.dispatch)
