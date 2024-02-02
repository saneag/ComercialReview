'use client';

import { Loader2 } from 'lucide-react';

import AuthForm from '@/app/components/auth/components/authForm';
import { useCreateUserMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { RegisterType } from '@/app/types/auth/AuthType';
import { RegisterFieldType } from '@/app/types/auth/FormFieldsType';
import { registerFormSchema } from '@/app/utils/formValidations/authFormSchema';

export default function SignUpPage() {
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const defaultValues: RegisterType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const registerFields: RegisterFieldType[] = [
    {
      label: 'firstName',
      displayLabel: 'First Name',
      isRequired: true,
    },
    {
      label: 'lastName',
      displayLabel: 'Last Name',
      isRequired: true,
    },
    {
      label: 'email',
      displayLabel: 'Email',
      isRequired: true,
    },
    {
      label: 'password',
      displayLabel: 'Password',
      type: 'password',
      isRequired: true,
    },
    {
      label: 'confirmPassword',
      displayLabel: 'Confirm Password',
      type: 'password',
      isRequired: true,
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    try {
      const response = await createUser(data).unwrap();
    } catch (error) {}
  };

  return (
    <AuthForm
      defaultValues={defaultValues}
      authSchema={registerFormSchema}
      inputFields={registerFields}
      onSubmit={onSubmit}
      buttonLabel={
        isLoading ? <Loader2 className='animate-spin' /> : 'Register'
      }
      formTitle='Register'
      isArrowBack
      isLoading={isLoading}
    />
  );
}
