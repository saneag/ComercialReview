import z from 'zod';

import {
  loginFormSchema,
  registerFormSchema,
  resetPasswordConfirmFormSchema,
  resetPasswordFormSchema,
} from '@/app/utils/formValidations/authFormSchema';

export type LoginFormSchemaType = typeof loginFormSchema;
export type RegisterFormSchemaType = typeof registerFormSchema;
export type ResetPasswordFormSchemaType = typeof resetPasswordFormSchema;
export type ResetPasswordConfirmFormSchemaType =
  typeof resetPasswordConfirmFormSchema;

export type AuthFormSchemaType =
  | LoginFormSchemaType
  | RegisterFormSchemaType
  | ResetPasswordFormSchemaType
  | ResetPasswordConfirmFormSchemaType;

export type AuthFormSchemaState = z.infer<AuthFormSchemaType>;
