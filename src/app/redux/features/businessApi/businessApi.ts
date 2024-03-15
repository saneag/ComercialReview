import { apiSlice } from '@/app/redux/features/baseQuery';
import {
  BusinessCreateType,
  BusinessType,
  BusinessUpdateType,
} from '@/app/types/business/BusinessType';

const businessApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Business'],
});

export const businessApi = businessApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query<BusinessType[], void>({
      query: () => '/businesses',
      providesTags: ['Business'],
    }),
    getBusiness: builder.query<BusinessType, number>({
      query: (id) => `/businesses/${id}`,
      providesTags: ['Business'],
    }),
    createBusiness: builder.mutation<BusinessType, Partial<BusinessCreateType>>(
      {
        query: (body) => ({
          url: '/businesses',
          method: 'POST',
          body,
        }),
        invalidatesTags: (result, error) => (error ? [] : ['Business']),
        extraOptions: {
          maxRetries: 0,
        },
      }
    ),
    updateBusiness: builder.mutation<
      BusinessType,
      { body: Partial<BusinessUpdateType>; businessId: number }
    >({
      query: ({ body, businessId }) => ({
        url: `/businesses/${businessId}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Business']),
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
