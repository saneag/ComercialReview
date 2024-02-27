'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import AuthForm from '@/app/components/auth/components/AuthForm';
import { useRegisterUserMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { RegisterType } from '@/app/types/auth/AuthType';
import { RegisterFieldType } from '@/app/types/auth/FormFieldsType';
import { registerFormSchema } from '@/app/utils/formValidations/authFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function SignUpPage() {
  const router = useRouter();
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const defaultValues: RegisterType = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
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
    {
      label: 'userName',
      displayLabel: 'Username',
      isRequired: false,
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    try {
      const response: any = await registerUser(data);
      if (response.error) {
        return;
      }
      showToastSuccess('User registered successfully');
      router.replace('/auth/login');
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
