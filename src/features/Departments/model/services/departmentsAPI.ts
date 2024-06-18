import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, URL } from '@/shared/const/url'
import Cookies from 'js-cookie'
import DepartmentsType from '../types/departments'

export const departmentsAPI = createApi({
	reducerPath: 'departmentsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/departments`,
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
			query: ({ id, department }) => ({
				url: `/${id}`,
				method: 'PUT',
				body: department,
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
