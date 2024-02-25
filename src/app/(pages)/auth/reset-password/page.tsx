'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import UnderConstruction from '@/app/components/UnderConstruction';
import { useResetPasswordMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordType } from '@/app/types/auth/AuthType';
import { ResetPasswordFieldType } from '@/app/types/auth/FormFieldsType';

export default function ResetPassword() {
  const [resetPassword, { isLoading, isError }] = useResetPasswordMutation();

  const defaultValues: ResetPasswordType = {
    email: '',
  };

  const resetPasswordFields: ResetPasswordFieldType[] = [
    {
      label: 'email',
      displayLabel: 'Email',
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    console.log(data);
    try {
      await resetPassword(data);
    } catch (error) {}
  };

  return (
    <div className='flex-center w-full max-md:pb-20'>
      {/* <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordFormSchema}
        inputFields={resetPasswordFields}
        onSubmit={onSubmit}
        buttonLabel='Reset'
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={isLoading}
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
