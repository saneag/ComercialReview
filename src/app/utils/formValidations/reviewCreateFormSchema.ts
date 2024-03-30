import z from 'zod';

import { LikeType } from '@/app/types/LikeType';

export const reviewCreateFormSchema = z.object({
  grade: z
    .number()
    .int()
    .min(1, {
      message: 'Grade is required',
    })
    .max(5, {
      message: 'Grade must be less than 5',
    }),
  reviewText: z
    .string()
    .min(1, {
      message: 'Review text is required',
    })
    .max(1000, {
      message: 'Review text must be less than 1000 characters',
    }),
  like: z.nativeEnum(LikeType),
});
