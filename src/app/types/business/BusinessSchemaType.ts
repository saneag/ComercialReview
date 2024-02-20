import z from 'zod';

import { businessCreateFormSchema } from '@/app/utils/formValidations/businessFormSchema';

export type BusinessCreateFormSchemaType = typeof businessCreateFormSchema;

export type BusinessFormSchemaType = BusinessCreateFormSchemaType;

export type BusinessFormSchemaState = z.infer<BusinessFormSchemaType>;
