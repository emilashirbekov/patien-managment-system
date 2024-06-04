import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Appointment } from '../types/appointmentTypes'
import Cookies from 'js-cookie'
import { URL } from '@/shared/const/url'

export const appointmentsAPI = createApi({
	reducerPath: 'appointmentsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL}patient/`,
		prepareHeaders: headers => {
			const token = Cookies.get('token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	tagTypes: ['Appointments'],

	endpoints: builder => ({
		getAppointments: builder.query<Appointment[], void>({
			query: () => ({
				url: `appointment/`,
				method: 'GET',
			}),
			providesTags: ['Appointments'],
		}),
		getSingleAppointment: builder.query<Appointment, number>({
			query: id => ({
				url: `/${id}`,
				method: 'GET',
			}),
			providesTags: ['Appointments'],
		}),

		createAppointment: builder.mutation<Appointment, Partial<Appointment>>({
			query: appointment => ({
				url: `/appointment/`,
				method: 'POST',
				body: appointment,
				headers: {
					Authorization: `Bearer ${Cookies.get('access_token')}`,
					'Content-Type': 'application/json',
				},
			}),
			invalidatesTags: ['Appointments'],
		}),
		deleteAppointment: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Appointments'],
		}),
		updateAppointment: builder.mutation({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			query: ({ id, updatedAppointment }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: updatedAppointment,
			}),
			invalidatesTags: ['Appointments'],
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
