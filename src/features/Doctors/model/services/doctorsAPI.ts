import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '@/shared/const/url'
import Cookies from 'js-cookie'
import Doctors from '../types/doctors.types'

export const doctorsAPI = createApi({
	reducerPath: 'doctorsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL}admin/`,
		prepareHeaders: headers => {
			const token = Cookies.get('token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	tagTypes: ['Doctors'],

	endpoints: builder => ({
		getDoctors: builder.query<Doctors[], void>({
			query: () => '/doctors/',
			providesTags: ['Doctors'],
		}),
		getSingleDoctor: builder.query<Doctors, string>({
			query: id => ({
				url: `/doctor/${id}/`,
				method: 'GET',
			}),
			providesTags: ['Doctors'],
		}),

		createDoctor: builder.mutation<Doctors, Partial<Doctors>>({
			query: doctor => ({
				url: `/doctor/registration/`,
				method: 'POST',
				body: doctor,
			}),
			invalidatesTags: ['Doctors'],
		}),
		deleteDoctor: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `/doctor/${id}/`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Doctors'],
		}),
		updateDoctor: builder.mutation({
			query: ({ id, doctors }) => ({
				url: `doctor/${id}/`,
				method: 'PUT',
				body: doctors,
			}),
			invalidatesTags: ['Doctors'],
		}),
	}),
})

export const {
	useGetDoctorsQuery,
	useGetSingleDoctorQuery,
	useCreateDoctorMutation,
	useDeleteDoctorMutation,
	useUpdateDoctorMutation,
} = doctorsAPI
