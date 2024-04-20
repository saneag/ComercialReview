import { apiSlice } from '@/app/redux/features/baseQuery';
import { BusinessType } from '@/app/types/business/BusinessType';
import { BusinessQueryParams } from '@/app/types/QueryParams';
import { ResponseType } from '@/app/types/ResponseType';

const businessApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Business', 'Businesses'],
});

export const businessApi = businessApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query<
      ResponseType<BusinessType>,
      BusinessQueryParams
    >({
      query: (params) => ({
        url: '/businesses',
        params: {
          ...params,
          maxGrade: 5,
        },
      }),
      providesTags: ['Businesses'],
    }),
    getBusiness: builder.query<BusinessType, number>({
      query: (id) => `/businesses/${id}`,
      providesTags: ['Business'],
    }),
    getMyBusiness: builder.query<BusinessType, void>({
      query: () => '/businesses/my',
      providesTags: ['Business'],
      extraOptions: {
        maxRetries: 1,
      },
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
      { body: Partial<FormData>; businessId: number }
    >({
      query: ({ body, businessId }) => ({
        url: `/businesses/${businessId}/edit`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error) =>
        error ? [] : ['Businesses', 'Business'],
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useGetBusinessQuery,
  useGetMyBusinessQuery,
  useCreateBusinessMutation,
  useUpdateBusinessMutation,
} = businessApi;
