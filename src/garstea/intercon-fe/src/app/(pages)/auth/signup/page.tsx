'use client';

import AuthForm from '@/app/components/auth/components/authForm';
import { AuthFormSchemaState } from '@/app/types/auth/AuthSchemaType';
import { RegisterType } from '@/app/types/auth/AuthType';
import { RegisterFieldType } from '@/app/types/auth/FormFieldsType';
import { registerFormSchema } from '@/app/utils/formValidations/authFormSchema';

export default function SignUpPage() {
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
    },
    {
      label: 'lastName',
      displayLabel: 'Last Name',
    },
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
    console.log(data);
  };

  return (
    <AuthForm
      defaultValues={defaultValues}
      authSchema={registerFormSchema}
      inputFields={registerFields}
      onSubmit={onSubmit}
      buttonLabel='Register'
      formTitle='Register'
      isArrowBack
    />
  );
}
