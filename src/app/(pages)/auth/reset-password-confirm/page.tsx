'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import UnderConstruction from '@/app/components/UnderConstruction';
import { useResetPasswordConfirmMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordConfirmFieldType } from '@/app/types/auth/FormFieldsType';

export default function ResetPasswordConfirm() {
  const [resetPasswordConfirm, { isLoading, isError }] =
    useResetPasswordConfirmMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const resetPasswordConfirmFields: ResetPasswordConfirmFieldType[] = [
    {
      label: 'email',
      displayLabel: 'Email',
    },
    {
      label: 'password',
      displayLabel: 'Password',
    },
    {
      label: 'confirmPassword',
      displayLabel: 'Confirm Password',
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    console.log({ ...data, token });
    try {
      await resetPasswordConfirm({ ...data, token });
    } catch (error) {}
  };

  return (
    <div className='flex-center w-full max-md:pb-20'>
      {/* <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordConfirmFormSchema}
        inputFields={resetPasswordConfirmFields}
        onSubmit={onSubmit}
        buttonLabel='Reset'
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={false}
      /> */}
      <div>
        <UnderConstruction showLogo={false} />
        <div className='flex-x-center mt-3'>
          <Link
            href='/auth/login'
            className='flex gap-2 rounded-xl px-2 py-1 transition-colors duration-200 hover:bg-gray-200'
          >
            <ArrowLeft className='h-6 w-6 cursor-pointer' />
            <span>Back to login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
