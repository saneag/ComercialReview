import z from 'zod';

import { commentCreateFormSchema } from '@/app/utils/formValidations/commentFormSchema';

export type CommentCreateFormSchemaType = typeof commentCreateFormSchema;

export type CommentUpdateFormSchemaType = typeof commentCreateFormSchema;

export type CommentFormSchemaType =
  | CommentCreateFormSchemaType
  | CommentUpdateFormSchemaType;

export type CommentFormSchemaState =
  | z.infer<CommentFormSchemaType>
  | z.infer<CommentUpdateFormSchemaType>;
