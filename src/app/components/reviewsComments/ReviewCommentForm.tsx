import { useEffect } from 'react';
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
  buttonLabel: string;
  buttonClassName?: string;
  isLoading?: boolean;
  isAddingComment?: boolean;
  setIsAddingComment?: (value: boolean) => void;
}

export default function ReviewCommentForm({
  defaultValues,
  onSubmit,
  resolver,
  buttonLabel,
  buttonClassName,
  isLoading,
  isAddingComment,
  setIsAddingComment,
}: ReviewCommentFormProps) {
  const form = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(resolver),
  });

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  return (
    <div className='w-full'>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
            <div className='w-full space-y-2'>
              <TextareaFormField
                label='text'
                displayLabel='Comment'
                isRequired
                isDisabled={isLoading}
                textAreaClassName='nm-flat-white-sm min-h-[20px]'
              />
              <div className='flex items-center justify-end gap-2'>
                {form.watch('text') !== '' ||
                  (isAddingComment && (
                    <Button
                      type='button'
                      disabled={isLoading}
                      variant='ghost'
                      className='rounded-2xl'
                      onClick={() => {
                        form.reset();
                        if (setIsAddingComment) {
                          setIsAddingComment(false);
                        }
                      }}
                    >
                      Cancel
                    </Button>
                  ))}
                <Button
                  type='submit'
                  disabled={isLoading || form.watch('text') === ''}
                  className={`rounded-2xl ${buttonClassName}`}
                >
                  {buttonLabel}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
