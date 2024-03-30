import z from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

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
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, {
      message: 'File size should be less than 5MB',
    })
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only jpeg, jpg, png, webp files are allowed'
    ),
});
