import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Doctors } from '../types/doctors.types'
import { BASE_URL, URL } from '@/shared/const/url'
import Cookies from 'js-cookie'

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
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			query: (id, updatedDoctor) => ({
				url: `doctor/${id}/`,
				method: 'PUT',
				body: updatedDoctor,
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
