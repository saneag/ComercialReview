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
        if (action.payload.status === 500) {
          showToastError('Something went wrong');
        } else {
          if (action.payload.status === 401) {
            showToastError('Please login first');
          } else if (action.payload.status !== 404) {
            showToastError(action.payload.data.errors);
          }
        }
      } else if (action.payload.status === 401) {
        showToastError('Please login first');
      }
    }

    return next(action);
  };
