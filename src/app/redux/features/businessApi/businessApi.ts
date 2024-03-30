import { apiSlice } from '@/app/redux/features/baseQuery';
import {
  BusinessCreateType,
  BusinessType,
  BusinessUpdateType,
} from '@/app/types/business/BusinessType';
import { QueryParams } from '@/app/types/QueryParams';
import { ResponseType } from '@/app/types/ResponseType';

const businessApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Business', 'Businesses'],
});

export const businessApi = businessApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query<ResponseType<BusinessType>, QueryParams>({
      query: (params) => ({
        url: '/businesses',
        params,
      }),
      providesTags: ['Businesses'],
    }),
    getBusiness: builder.query<BusinessType, number>({
      query: (id) => `/businesses/${id}`,
      providesTags: ['Business'],
    }),
    createBusiness: builder.mutation<BusinessType, Partial<FormData>>({
      query: (body) => ({
        url: '/businesses',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Businesses']),
      extraOptions: {
        maxRetries: 0,
      },
    }),
    updateBusiness: builder.mutation<
      BusinessType,
      { body: Partial<BusinessUpdateType>; businessId: number }
    >({
      query: ({ body, businessId }) => ({
        url: `/businesses/${businessId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Businesses']),
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useGetBusinessQuery,
  useCreateBusinessMutation,
  useUpdateBusinessMutation,
} = businessApi;
