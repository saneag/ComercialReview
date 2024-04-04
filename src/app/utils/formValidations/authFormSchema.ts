import z from 'zod';

export const firstName = z
  .string({
    invalid_type_error: 'Invalid first name format.',
    required_error: 'First name is required.',
  })
  .min(1, { message: 'First name is required.' })
  .max(50, { message: 'First name must be less than 50 characters.' });

export const lastName = z
  .string({
    invalid_type_error: 'Invalid last name format.',
    required_error: 'Last name is required.',
  })
  .min(1, { message: 'Last name is required.' })
  .max(50, { message: 'Last name must be less than 50 characters.' });

export const email = z
  .string({
    invalid_type_error: 'Invalid email format.',
    required_error: 'Email is required.',
  })
  .email({ message: 'Email is required.' })
  .min(1, { message: 'Email is required.' })
  .max(50, { message: 'Email must be less than 50 characters.' });

const password = z
  .string({
    invalid_type_error: 'Invalid password format.',
    required_error: 'Password is required.',
  })
  .min(1, { message: 'Password is required.' })
  .max(50, { message: 'Password must be less than 50 characters.' });

const advancedPassword = z
  .string({
    invalid_type_error: 'Invalid password format.',
    required_error: 'Password is required.',
  })
  .min(1, { message: 'Password is required.' })
  .max(50, { message: 'Password must be less than 50 characters.' })
  .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 8 characters, including at least one letter and one number.',
  });

export const loginFormSchema = z.object({
  email,
  password,
});

export const registerFormSchema = z
  .object({
    firstName,
    lastName,
    email,
    password: advancedPassword,
    confirmPassword: z.string(),
    userName: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

export const resetPasswordFormSchema = z.object({
  email,
});

export const resetPasswordConfirmFormSchema = z
  .object({
    email,
    password: advancedPassword,
    confirmPassword: z.string(),
    resetPasswordCode: z
      .string({
        invalid_type_error: 'Code is required.',
        required_error: 'Code is required.',
      })
      .min(6, { message: 'Code is required.' })
      .max(6, { message: 'Code is required.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
