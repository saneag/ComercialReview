import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import {
  BusinessCreateType,
  BusinessType,
  BusinessUpdateType,
} from '@/app/types/business/BusinessType';

export const businessApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['Business'],
  reducerPath: 'businessApi',
  endpoints: (builder) => ({
    getBusinesses: builder.query<BusinessType[], void>({
      query: () => ({
        url: '/businesses',
        method: 'GET',
      }),
      providesTags: ['Business'],
    }),
    getBusiness: builder.query<BusinessType, number>({
      query: (id) => ({
        url: `/businesses/${id}`,
        method: 'GET',
      }),
      providesTags: ['Business'],
    }),
    createBusiness: builder.mutation<BusinessType, Partial<BusinessCreateType>>(
      {
        query: (body) => ({
          url: '/businesses',
          method: 'POST',
          data: body,
        }),
        invalidatesTags: ['Business'],
      }
    ),
    updateBusiness: builder.mutation<
      BusinessType,
      { body: Partial<BusinessUpdateType>; businessId: number }
    >({
      query: ({ body, businessId }) => ({
        url: `/businesses/${businessId}`,
        method: 'PUT',
        data: body,
      }),
      invalidatesTags: ['Business'],
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useGetBusinessQuery,
  useCreateBusinessMutation,
  useUpdateBusinessMutation,
} = businessApi;
