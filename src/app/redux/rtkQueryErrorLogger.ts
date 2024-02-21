import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';

import { showToastError } from '@/app/utils/showToastMessage';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    if (isRejectedWithValue(action)) {
      if (typeof action.payload.data === 'string') {
        showToastError(action.payload.data);
      } else if (typeof action.payload.data === 'object') {
        showToastError(action.payload.data.errors);
      } else if (action.payload.status === 401) {
        showToastError('Unauthorized');
      } else if (action.payload.status === 500) {
        showToastError('Internal Server Error');
      }
    }

    return next(action);
  };
