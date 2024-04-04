'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import AuthForm from '@/app/components/auth/components/AuthForm';
import OtpInputField from '@/app/components/OtpInputField';
import { useResetPasswordConfirmMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordConfirmType } from '@/app/types/auth/AuthType';
import { ResetPasswordConfirmFieldType } from '@/app/types/auth/FormFieldsType';
import { resetPasswordConfirmFormSchema } from '@/app/utils/formValidations/authFormSchema';

export default function ResetPasswordConfirm() {
  const router = useRouter();
  const [resetPasswordConfirm, { isLoading, isError }] =
    useResetPasswordConfirmMutation();

  const defaultValues: ResetPasswordConfirmType = {
    email: '',
    password: '',
    confirmPassword: '',
    resetPasswordCode: '',
  };

  const resetPasswordConfirmFields: ResetPasswordConfirmFieldType[] = [
    {
      label: 'email',
      displayLabel: 'Email',
    },
    {
      label: 'password',
      displayLabel: 'Password',
      type: 'password',
    },
    {
      label: 'confirmPassword',
      displayLabel: 'Confirm Password',
      type: 'password',
    },
  ];

  const onSubmit = async (data: AuthFormSchemaState) => {
    try {
      await resetPasswordConfirm({ ...data });
      router.push('/auth/login');
    } catch (error) {}
  };

  return (
    <div className='flex-center w-full max-md:pb-20'>
      <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordConfirmFormSchema}
        inputFields={resetPasswordConfirmFields}
        onSubmit={onSubmit}
        buttonLabel={isLoading ? <Loader2 className='animate-spin' /> : 'Reset'}
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={isLoading}
      >
        <OtpInputField name='resetPasswordCode' />
      </AuthForm>
    </div>
  );
}
