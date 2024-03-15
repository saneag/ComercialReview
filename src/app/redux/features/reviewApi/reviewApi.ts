import { apiSlice } from '@/app/redux/features/baseQuery';
import {
  ReviewCreateType,
  ReviewType,
  ReviewUpdateType,
} from '@/app/types/review/ReviewType';

const reviewApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Review'],
});

export const reviewApi = reviewApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getReviewsByBusinessId: builder.query<ReviewType[], number>({
      query: (businessId) => `/businesses/${businessId}/reviews`,
      providesTags: ['Review'],
    }),
    getReviewByUserAndBusinessId: builder.query<
      ReviewType,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) =>
        `/businesses/${businessId}/reviews/${userId}`,
      providesTags: ['Review'],
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
      invalidatesTags: (result, error) => (error ? [] : ['Review']),
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
      invalidatesTags: (result, error) => (error ? [] : ['Review']),
      extraOptions: {
        maxRetries: 0,
      },
    }),
    deleteReview: builder.mutation<
      void,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) =>
        `/businesses/${businessId}/reviews/${userId}`,
      invalidatesTags: (result, error) => (error ? [] : ['Review']),
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const {
  useGetReviewsByBusinessIdQuery,
  useGetReviewByUserAndBusinessIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
