'use client';

import { ReactNode, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import BusinessAddressFormField from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressFormField';
import BusinessAddressInputManual from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressInputManual';
import BusinessCategorySelect from '@/app/components/adminDashboard/businesses/businessesForm/BusinessCategorySelect';
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
}: BusinessFormProps) {
  const form = useForm<BusinessFormSchemaState>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(resolver),
  });

  const [businessAddressInputType, setBusinessAddressInputType] =
    useState<BusinessAddressInputEnum>(BusinessAddressInputEnum.AUTO);

  const handleInputTypeChange = (type: BusinessAddressInputEnum) => {
    setBusinessAddressInputType(type);
  };

  return (
    <div className='w-1/2 rounded-xl px-10 py-5 nm-flat-white'>
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
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
                />
              ))}
            {businessAddressInputType === BusinessAddressInputEnum.AUTO ? (
              <BusinessAddressFormField
                businessAddressInputType={businessAddressInputType}
                handleInputTypeChange={handleInputTypeChange}
              />
            ) : (
              <BusinessAddressInputManual
                businessAddressInputType={businessAddressInputType}
                handleInputTypeChange={handleInputTypeChange}
              />
            )}
            <BusinessCategorySelect />
            <ImageInputFormField
              label='logo'
              displayLabel='Business Logo'
              className='flex justify-center gap-3'
            />
            <div className='flex justify-center'>
              <Button type='submit' className={buttonClassName}>
                {buttonLabel}
              </Button>
            </div>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
}
