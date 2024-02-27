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
    }),
    getReviewByUserAndBusinessId: builder.query<
      ReviewType,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) =>
        `/businesses/${businessId}/reviews/${userId}`,
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
    }),
    deleteReview: builder.mutation<
      void,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) =>
        `/businesses/${businessId}/reviews/${userId}`,
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
