import { URL } from '@/shared/const/url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL}`,
		prepareHeaders(headers) {
			const token = Cookies.get('access_token')

			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
		},
	}),
	endpoints: builder => ({
		//Patient
		registration: builder.mutation({
			query: body => ({
				url: 'patient/registration/',
				method: 'POST',
				body: body,
			}),
		}),
		login: builder.mutation({
			query: body => ({
				url: 'admin/token/',
				method: 'POST',
				body: body,
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					Cookies.set('access_token', data.access)
					Cookies.set('refresh_token', data.refresh)
				} catch (error) {
					console.error('Failed to set tokens:', error)
				}
			},
		}),
		//Doctor
		doctorLogin: builder.mutation({
			query: body => ({
				url: 'doctor/login/',
				method: 'POST',
				body: body,
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					Cookies.set('access_token', data.token)
				} catch (error) {
					console.error('Failed to set tokens:', error)
				}
			},
		}),
		adminLogin: builder.mutation({
			query: body => ({
				url: 'admin/login/',
				method: 'POST',
				body: body,
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					Cookies.set('access_token', data.access)
					Cookies.set('access_token', data.refresh)
				} catch (error) {
					console.error('Failed to set tokens:', error)
				}
			},
		}),
	}),
})

export const {
	useRegistrationMutation,
	useLoginMutation,
	useAdminLoginMutation,
	useDoctorLoginMutation,
} = authAPI
