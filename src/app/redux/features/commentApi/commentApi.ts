import { apiSlice } from '@/app/redux/features/baseQuery';
import {
  CommentCreateType,
  CommentType,
  CommentUpdateType,
} from '@/app/types/comment/CommentType';
import { CommentQueryParams } from '@/app/types/QueryParams';
import { ResponseType } from '@/app/types/ResponseType';

const commentApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['Comment', 'Comments'],
});

export const commentApi = commentApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<ResponseType<CommentType>, CommentQueryParams>({
      query: (params) => {
        const { businessId, reviewAuthorId, categories, ...rest } = params;

        return {
          url: `/businesses/${params.businessId}/reviews/${params.reviewAuthorId}/comments`,
          params: { ...rest },
        };
      },
      providesTags: ['Comments'],
    }),
    getComment: builder.query<CommentType, { id: number }>({
      query: ({ id }) => `/comments/${id}`,
      providesTags: ['Comment'],
    }),
    createComment: builder.mutation<void, CommentCreateType>({
      query: (comment) => ({
        url: `/businesses/${comment.businessId}/reviews/${comment.reviewAuthorId}/comments`,
        method: 'POST',
        body: {
          text: comment.text,
        },
      }),
      invalidatesTags: ['Comments'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(commentApi.util.invalidateTags(['Comment']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    updateComment: builder.mutation<void, CommentUpdateType>({
      query: (comment) => ({
        url: `/comments/${comment.id}`,
        method: 'PUT',
        body: {
          text: comment.text,
        },
      }),
      invalidatesTags: ['Comment'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(commentApi.util.invalidateTags(['Comment']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
    deleteComment: builder.mutation<void, { id: number }>({
      query: ({ id }) => ({
        url: `/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comment'],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(commentApi.util.invalidateTags(['Comment']));
      },
      extraOptions: {
        maxRetries: 0,
      },
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
