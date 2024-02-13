import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import { BusinessType } from '@/app/types/BusinessType';

export const businessApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['Business'],
  reducerPath: 'businessApi',
  endpoints: (builder) => ({
    getBusinesses: builder.query<BusinessType[], void>({
      query: () => ({
        url: '/business',
        method: 'GET',
      }),
    }),
    getBusiness: builder.query<BusinessType, number>({
      query: (id) => ({
        url: `/business/${id}`,
        method: 'GET',
      }),
    }),
    createBusiness: builder.mutation({
      query: (body) => ({
        url: '/business',
        method: 'POST',
        data: body,
      }),
    }),
    updateBusiness: builder.mutation({
      query: (body) => ({
        url: '/business',
        method: 'PUT',
        data: body,
      }),
    }),
    addBusinessLogo: builder.mutation({
      query: (body) => ({
        url: '/business/logo',
        method: 'POST',
        data: body,
      }),
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useGetBusinessQuery,
  useCreateBusinessMutation,
  useUpdateBusinessMutation,
  useAddBusinessLogoMutation,
} = businessApi;
