import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import InputFormField from '@/app/components/formFields/InputFormField';
import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import {
  AuthFormSchemaState,
  AuthFormSchemaType,
} from '@/app/types/auth/AuthSchemaType';
import { AuthFormFieldsType } from '@/app/types/auth/FormFieldsType';

interface AuthFormProps {
  defaultValues: any;
  authSchema: AuthFormSchemaType;
  inputFields: AuthFormFieldsType[];
  onSubmit: (data: AuthFormSchemaState) => Promise<void>;
  buttonLabel: ReactNode;
  formTitle: string;
  children?: ReactNode;
  isArrowBack?: boolean;
  isLoading: boolean;
}

export default function AuthForm({
  defaultValues,
  authSchema,
  inputFields,
  onSubmit,
  buttonLabel,
  formTitle,
  children,
  isArrowBack,
  isLoading,
}: AuthFormProps) {
  const router = useRouter();

  const form = useForm<AuthFormSchemaState>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(authSchema),
  });

  return (
    <div className='w-11/12 space-y-4 rounded-lg px-8 py-8 nm-flat-white sm:w-[500px] md:px-14'>
      <div className='flex flex-wrap items-center justify-between space-y-2'>
        <div>
          {isArrowBack && (
            <ArrowLeft
              onClick={() => {
                router.push('/auth/login');
              }}
              className='h-6 w-6 cursor-pointer'
            />
          )}
        </div>
        <h1 className={`text-3xl font-bold ${isArrowBack && '-ml-6'}`}>
          {formTitle}
        </h1>
        <div></div>
      </div>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col items-center space-y-5'>
              <div className='flex w-full flex-col space-y-5'>
                {inputFields.map((field) => (
                  <InputFormField
                    key={field.label}
                    label={field.label}
                    displayLabel={field.displayLabel}
                    placeholder={field.placeholder}
                    type={field.type}
                    isRequired={field.isRequired}
                  />
                ))}
              </div>
              {children && <>{children}</>}
              <Button
                type='submit'
                className='w-44 nm-concave-blue-500-sm hover:nm-concave-blue-600-sm'
                disabled={isLoading || !form.formState.isValid}
              >
                {buttonLabel}
              </Button>
            </div>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
