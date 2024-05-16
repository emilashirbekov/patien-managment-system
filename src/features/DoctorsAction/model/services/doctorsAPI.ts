import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Doctors } from '../types/doctors.types'
import { BASE_URL, access_token } from '@/shared/const/url'

export const doctorsAPI = createApi({
	reducerPath: 'doctorsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/doctors`,
	}),
	tagTypes: ['Doctors'],

	endpoints: builder => ({
		getDoctors: builder.query<Doctors[], void>({
			query: () => ({
				url: ``,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			providesTags: ['Doctors'],
		}),
		getSingleDoctor: builder.query<Doctors, number>({
			query: id => ({
				url: `/${id}`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}),
			providesTags: ['Doctors'],
		}),

		createDoctor: builder.mutation<Doctors, Partial<Doctors>>({
			query: doctor => ({
				url: ``,
				method: 'POST',
				body: doctor,
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
			}),
			invalidatesTags: ['Doctors'],
		}),
		deleteDoctor: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `/${id}`,
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${access_token}`,
					'Content-Type': 'application/json',
				},
			}),
			invalidatesTags: ['Doctors'],
		}),
		updateDoctor: builder.mutation({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			query: ({ id, updatedDoctor }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: updatedDoctor,
				headers: {
					Authorization: `Bearer ${access_token}`,
				},
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
