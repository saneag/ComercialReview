'use client';

import { ReactNode, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import BusinessAddressFormField from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressFormField';
import BusinessAddressInputManual from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressInputManual';
import BusinessCategorySelect from '@/app/components/adminDashboard/businesses/businessesForm/BusinessCategorySelect';
import BusinessImageUpload from '@/app/components/adminDashboard/businesses/businessesForm/BusinessImageUpload';
import ImageInputFormField from '@/app/components/formFields/ImageInputFormField';
import InputFormField from '@/app/components/formFields/InputFormField';
import TextareaFormField from '@/app/components/formFields/TextareaFormField';
import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import {
  BusinessFormSchemaState,
  BusinessFormSchemaType,
} from '@/app/types/business/BusinessSchemaType';
import { BusinessCRUDType } from '@/app/types/business/BusinessType';
import { BusinessCRUDFieldType } from '@/app/types/business/FormFieldsType';
import { BusinessAddressInputEnum } from '@/app/types/enums/BusinessAddressInputEnum';

interface BusinessFormProps {
  defaultValues: BusinessCRUDType;
  resolver: BusinessFormSchemaType;
  onSubmit: (data: BusinessFormSchemaState) => Promise<void>;
  formFields: BusinessCRUDFieldType[];
  textFormFields?: BusinessCRUDFieldType[];
  children?: ReactNode;
  buttonLabel: string;
  buttonClassName?: string;
  isError?: boolean;
  isPending?: boolean;
}

export default function BusinessesForm({
  defaultValues,
  resolver,
  onSubmit,
  formFields,
  textFormFields,
  children,
  buttonLabel,
  buttonClassName,
  isError,
  isPending,
}: BusinessFormProps) {
  const form = useForm<BusinessFormSchemaState>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(resolver),
  });

  const [isLoading, setIsLoading] = useState(false);

  const [businessAddressInputType, setBusinessAddressInputType] =
    useState<BusinessAddressInputEnum>(BusinessAddressInputEnum.AUTO);

  const handleInputTypeChange = (type: BusinessAddressInputEnum) => {
    setBusinessAddressInputType(type);
  };

  useEffect(() => {
    if (isPending) return;

    if (!isError && defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form, isError, isPending]);

  return (
    <div className='w-full max-w-screen-xl rounded-xl px-5 py-5 nm-flat-white md:mx-5 md:px-10'>
      <p className='flex-x-center mb-2 text-xl text-gray-500'>{buttonLabel}</p>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex w-full flex-wrap justify-evenly gap-5'>
              <div className='w-full space-y-4 md:w-[48%]'>
                {formFields.map((field) => (
                  <InputFormField
                    label={field.label}
                    displayLabel={field.displayLabel}
                    isRequired={field.isRequired}
                    key={field.label}
                    placeholder={field.placeholder}
                  />
                ))}
                {textFormFields &&
                  textFormFields.map((field) => (
                    <TextareaFormField
                      label={field.label}
                      displayLabel={field.displayLabel}
                      isRequired={field.isRequired}
                      key={field.label}
                      placeholder={field.placeholder}
                      type={field.type}
                      textAreaClassName='nm-flat-white-sm'
                      isDisabled={field.isDisabled}
                    />
                  ))}
                {businessAddressInputType === BusinessAddressInputEnum.AUTO ? (
                  <BusinessAddressFormField
                    businessAddressInputType={businessAddressInputType}
                    handleInputTypeChange={handleInputTypeChange}
                    setIsLoading={setIsLoading}
                  />
                ) : (
                  <BusinessAddressInputManual
                    businessAddressInputType={businessAddressInputType}
                    handleInputTypeChange={handleInputTypeChange}
                  />
                )}
                <BusinessCategorySelect />
              </div>
              <div className='w-full space-y-4 md:w-[48%]'>
                <ImageInputFormField
                  label='logo'
                  displayLabel='Business Logo'
                  className='flex flex-wrap justify-center gap-3 max-sm:text-center'
                />
                <BusinessImageUpload />
              </div>
            </div>
            <div className='flex justify-center'>
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
