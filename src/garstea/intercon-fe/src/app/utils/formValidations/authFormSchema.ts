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
      .max(50)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message:
          'Password must contain at least 8 characters, including at least one letter and one number.',
      }),
    confirmPassword: z.string(),
    username: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const resetPasswordFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Invalid email format.',
      required_error: 'Email is required.',
    })
    .email({ message: 'Email is required.' })
    .min(1, { message: 'Email is required.' }),
});

export const resetPasswordConfirmFormSchema = z
  .object({
    email: z
      .string({
        invalid_type_error: 'Invalid email format.',
        required_error: 'Email is required.',
      })
      .email({ message: 'Email is required.' })
      .min(1, { message: 'Email is required.' }),
    password: z
      .string({
        invalid_type_error: 'Invalid password format.',
        required_error: 'Password is required.',
      })
      .min(1, { message: 'Password is required.' })
      .max(50)
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message:
          'Password must contain at least 8 characters, including at least one letter and one number.',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });