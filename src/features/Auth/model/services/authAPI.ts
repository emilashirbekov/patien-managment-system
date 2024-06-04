import { URL } from '@/shared/const/url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL}`,
	}),
	endpoints: builder => ({
		registration: builder.mutation({
			query: body => ({
				url: 'patient/registration/',
				method: 'POST',
				body: body,
			}),
		}),
		login: builder.mutation({
			query: body => ({
				url: 'patient/login/',
				method: 'POST',
				body: body,
			}),
			async onQueryStarted({ queryFulfilled }) {
				try {
					const { data } = await queryFulfilled
					Cookies.set('access_token', data.token, { expires: 7 })
				} catch (error) {
					console.error('Error storing token:', error)
				}
			},
		}),
	}),
})

export const { useRegistrationMutation, useLoginMutation } = authAPI
