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
      providesTags: ['Review'],
    }),
    getReviewByUserAndBusinessId: builder.query<
      ReviewType,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Review'],
    }),
    createReview: builder.mutation<
      ReviewType,
      { businessId: number; review: Partial<ReviewCreateType> }
    >({
      query: ({ businessId, review }) => ({
        url: `/businesses/${businessId}/reviews`,
        method: 'POST',
        data: review,
      }),
      invalidatesTags: ['Review'],
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
      invalidatesTags: ['Review'],
    }),
    deleteReview: builder.mutation<
      void,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Review'],
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
