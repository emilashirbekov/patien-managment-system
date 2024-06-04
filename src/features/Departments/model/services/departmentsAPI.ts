import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DepartmentsType } from '../types/departments'
import { BASE_URL, URL } from '@/shared/const/url'
import Cookies from 'js-cookie'

export const departmentsAPI = createApi({
	reducerPath: 'departmentsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/departments`,
		// prepareHeaders: headers => {
		// 	const token = Cookies.get('token')
		// 	if (token) {
		// 		headers.set('Authorization', `Bearer ${token}`)
		// 	}
		// 	headers.set('Content-Type', 'application/json')
		// 	return headers
		// },
	}),
	tagTypes: ['DepartmentsType'],

	endpoints: builder => ({
		getDepartments: builder.query<DepartmentsType[], void>({
			query: () => '',
			providesTags: ['DepartmentsType'],
		}),
		getSingleDepartment: builder.query<DepartmentsType, number>({
			query: id => ({
				url: `/${id}`,
				method: 'GET',
			}),
			providesTags: ['DepartmentsType'],
		}),

		createDepartment: builder.mutation<
			DepartmentsType,
			Partial<DepartmentsType>
		>({
			query: department => ({
				url: ``,
				method: 'POST',
				body: department,
			}),
			invalidatesTags: ['DepartmentsType'],
		}),
		deleteDepartment: builder.mutation<void, number | undefined>({
			query: id => ({
				url: `/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['DepartmentsType'],
		}),
		updateDepartment: builder.mutation({
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			query: ({ id, updatedDepartment }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: updatedDepartment,
			}),
			invalidatesTags: ['DepartmentsType'],
		}),
	}),
})

export const {
	useGetDepartmentsQuery,
	useGetSingleDepartmentQuery,
	useCreateDepartmentMutation,
	useDeleteDepartmentMutation,
	useUpdateDepartmentMutation,
} = departmentsAPI
