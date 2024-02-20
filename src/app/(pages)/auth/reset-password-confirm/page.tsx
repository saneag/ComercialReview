'use client';

import { useSearchParams } from 'next/navigation';

import AuthForm from '@/app/components/auth/components/AuthForm';
import { useResetPasswordConfirmMutation } from '@/app/redux/features/userApi/userApi';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { ResetPasswordConfirmFieldType } from '@/app/types/auth/FormFieldsType';
import { resetPasswordConfirmFormSchema } from '@/app/utils/formValidations/authFormSchema';

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
      <AuthForm
        defaultValues={defaultValues}
        authSchema={resetPasswordConfirmFormSchema}
        inputFields={resetPasswordConfirmFields}
        onSubmit={onSubmit}
        buttonLabel='Reset'
        formTitle='Reset Password'
        isArrowBack={true}
        isLoading={false}
      />
    </div>
  );
}
