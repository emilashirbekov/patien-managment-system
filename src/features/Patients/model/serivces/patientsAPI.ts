import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL } from '@/shared/const/url'
import Cookies from 'js-cookie'
import { PatientsTypes } from '../types/patients'

export const patientsAPI = createApi({
	reducerPath: 'patientsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL}`,
		prepareHeaders: headers => {
			const token = Cookies.get('token')
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			headers.set('Content-Type', 'application/json')
			return headers
		},
	}),
	tagTypes: ['Patients'],

	endpoints: builder => ({
		getPatients: builder.query<PatientsTypes[], void>({
			query: () => 'admin/patients/',
			providesTags: ['Patients'],
		}),
		getPatientInfo: builder.query<PatientsTypes[], void>({
			query: () => '/patient/profile/',
			providesTags: ['Patients'],
		}),
		getSinglePatient: builder.query<PatientsTypes, string>({
			query: id => ({
				url: `admin/patient/${id}/`,
				method: 'GET',
			}),
			providesTags: ['Patients'],
		}),

		createPatient: builder.mutation<PatientsTypes, Partial<PatientsTypes>>({
			query: patient => ({
				url: `admin/patient/registration/`,
				method: 'POST',
				body: patient,
			}),
			invalidatesTags: ['Patients'],
		}),
		deletePatient: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `admin/patient/${id}/`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Patients'],
		}),
		updatePatient: builder.mutation({
			query: ({ id, patients }) => ({
				url: `admin/patient/${id}/`,
				method: 'PUT',
				body: patients,
			}),
			invalidatesTags: ['Patients'],
		}),
	}),
})

export const {
	useGetPatientsQuery,
	useGetSinglePatientQuery,
	useCreatePatientMutation,
	useDeletePatientMutation,
	useUpdatePatientMutation,
	useGetPatientInfoQuery,
} = patientsAPI
