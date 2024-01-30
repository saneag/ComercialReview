import z from 'zod';

import {
  loginFormSchema,
  registerFormSchema,
} from '@/app/utils/formValidations/authFormSchema';

export type LoginFormSchemaType = typeof loginFormSchema;
export type RegisterFormSchemaType = typeof registerFormSchema;

export type AuthFormSchemaType = LoginFormSchemaType | RegisterFormSchemaType;

export type AuthFormSchemaState = z.infer<AuthFormSchemaType>;