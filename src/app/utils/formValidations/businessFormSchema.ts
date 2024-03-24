import z from 'zod';

import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';

export const businessCreateFormSchema = z.object({
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
  fullDescription: z.string().optional(),
  logo: z
    .object({
      data: z.any().optional(),
    })
    .nullish()
    .optional(),
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
  category: z
    .nativeEnum(CategoryFilterEnum, {
      invalid_type_error: 'Category is required',
      required_error: 'Category is required',
    })
    .refine((value) => value !== CategoryFilterEnum.ALL, {
      message: 'Category is required',
    }),
});
