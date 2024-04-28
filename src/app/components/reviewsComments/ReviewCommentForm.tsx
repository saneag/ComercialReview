import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import InputFormField from '@/app/components/formFields/InputFormField';
import TextareaFormField from '@/app/components/formFields/TextareaFormField';
import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import {
  CommentFormSchemaState,
  CommentFormSchemaType,
} from '@/app/types/comment/CommentSchemaType';
import { CommentCRUDType } from '@/app/types/comment/CommentType';
import { CommentCRUDFieldType } from '@/app/types/comment/FormFieldsType';

interface ReviewCommentFormProps {
  defaultValues: CommentCRUDType;
  onSubmit: (data: CommentFormSchemaState) => Promise<void>;
  resolver: CommentFormSchemaType;
  formFields: CommentCRUDFieldType[];
  textFormFields?: CommentCRUDFieldType[];
  buttonLabel: string;
  buttonClassName?: string;
  isLoading?: boolean;
}

export default function ReviewCommentForm({
  defaultValues,
  onSubmit,
  resolver,
  formFields,
  textFormFields,
  buttonLabel,
  buttonClassName,
  isLoading,
}: ReviewCommentFormProps) {
  const form = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(resolver),
  });

  return (
    <div className='w-full'>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-4'
          >
            {formFields.map((field) => (
              <InputFormField
                key={field.label}
                label={field.label}
                displayLabel={field.displayLabel}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
            {textFormFields &&
              textFormFields.map((field) => (
                <TextareaFormField
                  key={field.label}
                  label={field.label}
                  displayLabel={field.displayLabel}
                  isRequired={field.isRequired}
                  className={field.className}
                  isDisabled={field.isDisabled}
                  placeholder={field.placeholder}
                  textAreaClassName='nm-flat-white-sm'
                />
              ))}
            <div className='flex justify-end'>
              <Button
                type='submit'
                disabled={isLoading}
                className={buttonClassName}
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
