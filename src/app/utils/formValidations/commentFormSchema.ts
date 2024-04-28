import z from 'zod';

export const commentCreateFormSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: 'Comment text is required',
    })
    .max(1000, {
      message: 'Comment text must be less than 1000 characters',
    }),
  businessId: z.coerce
    .number({
      invalid_type_error: 'Business id is required!',
      required_error: 'Business id is required!',
    })
    .int(),
  reviewAuthorId: z.coerce
    .number({
      invalid_type_error: 'Author id is required!',
      required_error: 'Author id is required!',
    })
    .int(),
});

export const commentUpdateFormSchema = z.object({
  text: z
    .string()
    .min(1, {
      message: 'Comment text is required',
    })
    .max(1000, {
      message: 'Comment text must be less than 1000 characters',
    }),
});
