import z from 'zod';

import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export const businessCreateFormSchema = z.object({
  ownerId: z
    .number()
    .nullish()
    .refine((data) => data !== null, {
      message: 'Owner id is required',
    }),
  title: z
    .string({
      invalid_type_error: 'Title is required',
      required_error: 'Title is required',
    })
    .min(1, { message: 'Title must is required' })
    .max(255, {
      message: 'Title must be less than 255 characters',
    }),
  shortDescription: z
    .string({
      invalid_type_error: 'Short description is required',
      required_error: 'Short description is required',
    })
    .min(1, { message: 'Short description is required' })
    .max(500, {
      message: 'Short description must be less than 500 characters',
    }),
  fullDescription: z
    .string({
      invalid_type_error: 'Full description is required',
      required_error: 'Full description is required',
    })
    .min(1, { message: 'Full description is required' }),
  logo: z.object({
    data: z.string({
      invalid_type_error: 'Logo is required',
      required_error: 'Logo is required',
    }),
  }),
  address: z.object({
    street: z
      .string({
        invalid_type_error: 'Street is required',
        required_error: 'Street is required',
      })
      .min(1, { message: 'Street is required' }),
    latitude: z
      .string({
        invalid_type_error: 'Latitude is required',
        required_error: 'Latitude is required',
      })
      .min(1, { message: 'Latitude is required' }),
    longitude: z
      .string({
        invalid_type_error: 'Longitude is required',
        required_error: 'Longitude is required',
      })
      .min(1, { message: 'Longitude is required' }),
  }),
  category: z.nativeEnum(CategoryFilterEnum),
});