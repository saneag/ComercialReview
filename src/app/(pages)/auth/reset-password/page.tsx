'use client';

import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

import AuthForm from '@/app/components/auth/components/AuthForm';
import { useResetPasswordMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordType } from '@/app/types/auth/AuthType';
import { ResetPasswordFieldType } from '@/app/types/auth/FormFieldsType';
import { resetPasswordFormSchema } from '@/app/utils/formValidations/authFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function ResetPassword() {
  const router = useRouter();
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
    try {
      await resetPassword(data);
      showToastSuccess('Password reset code sent to your email.');
      router.push('/auth/reset-password-confirm');
    } catch (error) {}
  };
  return (
    <div className='flex-center w-full max-md:pb-20'>
      <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordFormSchema}
        inputFields={resetPasswordFields}
        onSubmit={onSubmit}
        buttonLabel={isLoading ? <Loader2 className='animate-spin' /> : 'Reset'}
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={isLoading}
      />
    </div>
  );
}
