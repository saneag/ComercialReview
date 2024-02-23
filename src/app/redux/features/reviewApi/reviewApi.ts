import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/app/redux/features/axiosBaseQuery';
import {
  ReviewCreateType,
  ReviewType,
  ReviewUpdateType,
} from '@/app/types/review/ReviewType';

export const reviewApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: '' }),
  tagTypes: ['Review'],
  reducerPath: 'reviewApi',
  endpoints: (builder) => ({
    getReviewsByBusinessId: builder.query<ReviewType[], number>({
      query: (businessId) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'GET',
      }),
    }),
    getReviewByUserAndBusinessId: builder.query<
      ReviewType,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}`,
        method: 'GET',
      }),
    }),
    createReview: builder.mutation<
      ReviewType,
      { businessId: number; review: Partial<ReviewCreateType> }
    >({
      query: ({ businessId, review }) => ({
        url: '/businesses/${businessId}/reviews',
        method: 'POST',
        data: review,
      }),
    }),
    updateReview: builder.mutation<
      ReviewType,
      { businessId: number; review: Partial<ReviewUpdateType> }
    >({
      query: ({ businessId, review }) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'PUT',
        data: review,
      }),
    }),
    deleteReview: builder.mutation<
      void,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}`,
        method: 'DELETE',
      }),
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
