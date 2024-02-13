'use client';

import { useEffect } from 'react';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import AuthForm from '@/app/components/auth/components/authForm';
import {
  setAccessToken,
  setRefreshToken,
  setUser,
} from '@/app/redux/features/slices/userSlice';
import { useLoginUserMutation } from '@/app/redux/features/userApi/userApi';
import { useAppDispatch } from '@/app/redux/store';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { LoginType } from '@/app/types/auth/AuthType';
import { LoginFieldType } from '@/app/types/auth/FormFieldsType';
import { loginFormSchema } from '@/app/utils/formValidations/authFormSchema';

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [login, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const defaultValues: LoginType = {
    email: '',
    password: '',
  };

  const loginFields: LoginFieldType[] = [
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
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    try {
      const response = await login(data).unwrap();
      const { user, accessToken, refreshToken, role } = response;

      dispatch(setUser({ user, isAuth: true, role }));
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    } catch (error) {}
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace('/businesses');
    }
  }, [isSuccess, router]);

  return (
    <div className='flex-center w-full max-md:pb-20'>
      <AuthForm
        defaultValues={defaultValues}
        authSchema={loginFormSchema}
        inputFields={loginFields}
        onSubmit={onSubmit}
        buttonLabel={isLoading ? <Loader2 className='animate-spin' /> : 'Login'}
        formTitle='Login'
        isLoading={isLoading}
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
