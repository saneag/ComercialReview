import z from 'zod';

import { userFormSchema } from '@/app/utils/formValidations/userFormSchema';

export type UserFormSchemaType = typeof userFormSchema;

export type UserFormSchemaState = z.infer<UserFormSchemaType>;
