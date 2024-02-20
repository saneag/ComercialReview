'use client';

import BusinessesForm from '@/app/components/adminDashboard/businesses/businessesForm/BusinessesForm';
import { useCreateBusinessMutation } from '@/app/redux/features/businessApi/businessApi';
import { BusinessFormSchemaState } from '@/app/types/business/BusinessSchemaType';
import { BusinessCreateType } from '@/app/types/business/BusinessType';
import { BusinessCreateFieldType } from '@/app/types/business/FormFieldsType';
import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { businessCreateFormSchema } from '@/app/utils/formValidations/businessFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function CreateBusiness() {
  const [createBusiness, { isLoading }] = useCreateBusinessMutation();

  const defaultValues: BusinessCreateType = {
    ownerId: null,
    title: '',
    shortDescription: '',
    fullDescription: '',
    logo: {
      data: '',
    },
    address: {
      street: '',
      latitude: '',
      longitude: '',
    },
    category: CategoryFilterEnum.ALL,
  };

  const formFields: BusinessCreateFieldType[] = [
    {
      label: 'title',
      displayLabel: 'Title',
      isRequired: true,
    },
  ];

  const textFormFields: BusinessCreateFieldType[] = [
    {
      label: 'shortDescription',
      displayLabel: 'Short Description',
      isRequired: true,
    },
    {
      label: 'fullDescription',
      displayLabel: 'Full Description',
    },
  ];

  const onSubmit = async (data: BusinessFormSchemaState) => {
    try {
      // TODO: change ownerId to the current user id
      await createBusiness({
        ...data,
        ownerId: Math.floor(Math.random() * 1000),
      });
      showToastSuccess('Business created');
    } catch (error) {}
  };

  return (
    <div className='mt-10 flex justify-center'>
      <BusinessesForm
        defaultValues={defaultValues}
        resolver={businessCreateFormSchema}
        onSubmit={onSubmit}
        formFields={formFields}
        textFormFields={textFormFields}
        buttonLabel='Create Business'
        buttonClassName='bg-green-600'
      />
    </div>
  );
}
