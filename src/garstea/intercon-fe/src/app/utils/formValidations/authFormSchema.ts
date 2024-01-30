import z from 'zod';

export const loginFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Invalid email format.',
      required_error: 'Email is required.',
    })
    .email({ message: 'Email is required.' })
    .min(1, { message: 'Email is required.' })
    .max(50),
  password: z
    .string({
      invalid_type_error: 'Invalid password format.',
      required_error: 'Password is required.',
    })
    .min(1, { message: 'Password is required.' })
    .max(50),
});

export const registerFormSchema = z
  .object({
    firstName: z
      .string({
        invalid_type_error: 'Invalid first name format.',
        required_error: 'First name is required.',
      })
      .min(1, { message: 'First name is required.' })
      .max(50),
    lastName: z
      .string({
        invalid_type_error: 'Invalid last name format.',
        required_error: 'Last name is required.',
      })
      .min(1, { message: 'Last name is required.' })
      .max(50),
    email: z
      .string({
        invalid_type_error: 'Invalid email format.',
        required_error: 'Email is required.',
      })
      .email({ message: 'Email is required.' })
      .min(1, { message: 'Email is required.' })
      .max(50),
    password: z
      .string({
        invalid_type_error: 'Invalid password format.',
        required_error: 'Password is required.',
      })
      .min(1, { message: 'Password is required.' })
      .max(50),
    confirmPassword: z.string(),
    username: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
