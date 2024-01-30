'use client';

import Link from 'next/link';

import AuthForm from '@/app/components/auth/components/authForm';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { LoginType } from '@/app/types/auth/AuthType';
import { LoginFieldType } from '@/app/types/auth/FormFieldsType';
import { loginFormSchema } from '@/app/utils/formValidations/authFormSchema';

export default function LoginPage() {
  const defaultValues: LoginType = {
    email: '',
    password: '',
  };

  const loginFields: LoginFieldType[] = [
    {
      label: 'email',
      displayLabel: 'Email',
    },
    {
      label: 'password',
      displayLabel: 'Password',
      type: 'password',
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    console.log(data);
  };

  return (
    <div className='flex-center w-full max-md:pb-20'>
      <AuthForm
        defaultValues={defaultValues}
        authSchema={loginFormSchema}
        inputFields={loginFields}
        onSubmit={onSubmit}
        buttonLabel='Login'
        formTitle='Login'
      >
        <div className='flex w-full justify-between'>
          <Link href='/auth/signup' className='text-blue-500'>
            Create Account
          </Link>
          <Link href='/auth/reset-password' className='text-blue-500'>
            Forgot Password?
          </Link>
        </div>
      </AuthForm>
    </div>
  );
}
