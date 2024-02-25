import z from 'zod';

import {
  email,
  firstName,
  lastName,
} from '@/app/utils/formValidations/authFormSchema';

export const userFormSchema = z.object({
  firstName,
  lastName,
  email,
  userName: z.string().optional(),
  avatar: z
    .object({
      data: z.string().optional(),
    })
    .nullish(),
});
