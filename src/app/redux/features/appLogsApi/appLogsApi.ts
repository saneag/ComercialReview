import { apiSlice } from '@/app/redux/features/baseQuery';
import { LogsType } from '@/app/types/logs/LogsType';
import { PaginationType } from '@/app/types/PaginationType';
import { ResponseType } from '@/app/types/ResponseType';

const appLogsApiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ['AppLogs', 'AppLogs'],
});

export const appLogsApi = appLogsApiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getAppLogs: builder.query<ResponseType<LogsType>, PaginationType>({
      query: (params) => ({
        url: '/performance-logs',
        params: {
          ...params,
        },
      }),
      providesTags: ['AppLogs'],
    }),
  }),
});

export const { useGetAppLogsQuery } = appLogsApi;
