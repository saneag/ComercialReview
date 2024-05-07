import { apiSlice } from '@/app/redux/features/baseQuery';
import { commentApi } from '@/app/redux/features/commentApi/commentApi';

const commentLikeApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['CommentLike', 'CommentLikes'],
});

export const commentLikeApi = commentLikeApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    likeComment: builder.mutation<number, { commentId: number }>({
      query: ({ commentId }) => ({
        url: `/review-comments/${commentId}/like`,
        method: 'POST',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(commentApi.util.invalidateTags(['Comments']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    unlikeComment: builder.mutation<number, { commentId: number }>({
      query: ({ commentId }) => ({
        url: `/review-comments/${commentId}/like`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(commentApi.util.invalidateTags(['Comments']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const { useLikeCommentMutation, useUnlikeCommentMutation } =
  commentLikeApi;
