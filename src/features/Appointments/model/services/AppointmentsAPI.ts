import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, URL } from '@/shared/const/url'
import { AppointmentsType } from '../types/appointmentTypes'
import Cookies from 'js-cookie'

export const appointmentsAPI = createApi({
	reducerPath: 'appointmentsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/appointments/`,
	}),
	tagTypes: ['AppointmentsType'],

	endpoints: builder => ({
		getAppointments: builder.query<AppointmentsType[], void>({
			query: () => '',
			providesTags: ['AppointmentsType'],
		}),
		getSingleAppointment: builder.query<AppointmentsType, number>({
			query: id => ({
				url: `/${id}`,
				method: 'GET',
			}),
			providesTags: ['AppointmentsType'],
		}),

		createAppointment: builder.mutation<
			AppointmentsType,
			Partial<AppointmentsType>
		>({
			query: appointment => ({
				url: ``,
				method: 'POST',
				body: appointment,
			}),
			invalidatesTags: ['AppointmentsType'],
		}),
		deleteAppointment: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['AppointmentsType'],
		}),
		updateAppointment: builder.mutation({
			query: ({ id, appointment }) => ({
				url: `${id}`,
				method: 'PUT',
				body: appointment,
			}),
			invalidatesTags: ['AppointmentsType'],
		}),
	}),
})

export const {
	useGetAppointmentsQuery,
	useGetSingleAppointmentQuery,
	useCreateAppointmentMutation,
	useDeleteAppointmentMutation,
	useUpdateAppointmentMutation,
} = appointmentsAPI
