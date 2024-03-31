import { apiSlice } from '@/app/redux/features/baseQuery';
import { businessApi } from '@/app/redux/features/businessApi/businessApi';
import { QueryParams } from '@/app/types/QueryParams';
import { ResponseType } from '@/app/types/ResponseType';
import {
  ReviewCreateType,
  ReviewType,
  ReviewUpdateType,
} from '@/app/types/review/ReviewType';

const reviewApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Review', 'Reviews'],
});

export const reviewApi = reviewApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getReviewsByBusinessId: builder.query<
      ResponseType<ReviewType>,
      { businessId: number; params: QueryParams }
    >({
      query: ({ businessId, params }) => ({
        url: `/businesses/${businessId}/reviews`,
        params,
      }),
      providesTags: ['Reviews'],
    }),
    getReviewByUserAndBusinessId: builder.query<
      ReviewType,
      { businessId: number; id: number }
    >({
      query: ({ businessId, id }) => `/businesses/${businessId}/reviews/${id}`,
      providesTags: ['Review'],
      extraOptions: {
        maxRetries: 0,
      },
    }),
    createReview: builder.mutation<
      ReviewType,
      { businessId: number; review: Partial<ReviewCreateType> }
    >({
      query: ({ businessId, review }) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'POST',
        body: review,
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Review', 'Reviews']),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(businessApi.util.invalidateTags(['Business']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    updateReview: builder.mutation<
      ReviewType,
      { businessId: number; review: Partial<ReviewUpdateType> }
    >({
      query: ({ businessId, review }) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'PUT',
        body: review,
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Review', 'Reviews']),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(businessApi.util.invalidateTags(['Business']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    deleteReview: builder.mutation<void, { businessId: number }>({
      query: ({ businessId }) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error) => (error ? [] : ['Review', 'Reviews']),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(businessApi.util.invalidateTags(['Business']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const {
  useGetReviewsByBusinessIdQuery,
  useLazyGetReviewsByBusinessIdQuery,
  useGetReviewByUserAndBusinessIdQuery,
  useLazyGetReviewByUserAndBusinessIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
