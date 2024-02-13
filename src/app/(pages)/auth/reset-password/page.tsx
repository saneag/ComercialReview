'use client';

import AuthForm from '@/app/components/auth/components/authForm';
import { useResetPasswordMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordType } from '@/app/types/auth/AuthType';
import { ResetPasswordFieldType } from '@/app/types/auth/FormFieldsType';
import { resetPasswordFormSchema } from '@/app/utils/formValidations/authFormSchema';

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
      <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordFormSchema}
        inputFields={resetPasswordFields}
        onSubmit={onSubmit}
        buttonLabel='Reset'
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={isLoading}
      />
    </div>
  );
}
