import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

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
  buttonLabel: string;
}

export default function AuthForm({
  defaultValues,
  authSchema,
  inputFields,
  onSubmit,
  buttonLabel,
}: AuthFormProps) {
  const form = useForm<AuthFormSchemaState>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(authSchema),
  });

  return (
    <div className='rounded-lg px-14 py-8 nm-flat-white'>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col items-center space-y-5'>
              <div className='flex flex-col space-y-5'>
                {inputFields.map((field) => (
                  <InputFormField
                    key={field.label}
                    label={field.label}
                    displayLabel={field.displayLabel}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                ))}
              </div>
              <Button
                type='submit'
                className='w-6/12 nm-concave-blue-500-sm hover:nm-concave-blue-600-sm'
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
