import { apiSlice } from '@/app/redux/features/baseQuery';
import { reviewApi } from '@/app/redux/features/reviewApi/reviewApi';

const reviewLikeApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['ReviewLike', 'ReviewLikes'],
});

export const reviewLikeApi = reviewLikeApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    likeReview: builder.mutation<
      number,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}/like`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(reviewApi.util.invalidateTags(['Reviews', 'Review']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    unlikeReview: builder.mutation<
      number,
      { businessId: number; userId: number }
    >({
      query: ({ businessId, userId }) => ({
        url: `/businesses/${businessId}/reviews/${userId}/like`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(reviewApi.util.invalidateTags(['Reviews', 'Review']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const { useLikeReviewMutation, useUnlikeReviewMutation } = reviewLikeApi;
