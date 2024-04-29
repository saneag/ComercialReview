'use client';

import { useRouter } from 'next/navigation';

import BusinessesForm from '@/app/components/adminDashboard/businesses/businessesForm/BusinessesForm';
import { useCreateBusinessMutation } from '@/app/redux/features/businessApi/businessApi';
import { BusinessFormSchemaState } from '@/app/types/business/BusinessSchemaType';
import { BusinessCreateType } from '@/app/types/business/BusinessType';
import { BusinessCreateFieldType } from '@/app/types/business/FormFieldsType';
import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { businessCreateFormSchema } from '@/app/utils/formValidations/businessFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function CreateBusiness() {
  const router = useRouter();
  const [createBusiness, { isLoading, isError }] = useCreateBusinessMutation();

  const defaultValues: BusinessCreateType = {
    title: '',
    shortDescription: '',
    fullDescription: '',
    logo: null,
    address: {
      street: '',
      latitude: '',
      longitude: '',
    },
    category: CategoryFilterEnum.ALL,
    galleryPhotos: [],
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
      const formData = new FormData();
      formData.append('Title', data.title);
      formData.append('ShortDescription', data.shortDescription);
      formData.append('FullDescription', data.fullDescription ?? '');
      formData.append('Logo', data.logo ?? '');
      formData.append('Address.Street', data.address.street);
      formData.append('Address.Latitude', data.address.latitude);
      formData.append('Address.Longitude', data.address.longitude);
      formData.append('Category', CategoryFilterEnum[data.category]);
      data.galleryPhotos.forEach((photo) => {
        formData.append('GalleryPhotos', photo.file);
      });

      const response = await createBusiness(formData).unwrap();

      if (response && response.id) {
        showToastSuccess('Business created successfully');
        router.push('/dashboard/businesses');
      }
    } catch (error) {}
  };

  return (
    <div className='my-10 flex justify-center'>
      <BusinessesForm
        defaultValues={defaultValues}
        resolver={businessCreateFormSchema}
        onSubmit={onSubmit}
        formFields={formFields}
        textFormFields={textFormFields}
        buttonLabel='Create Business'
        buttonClassName='bg-green-600 hover:bg-green-700'
        isPending={isLoading}
        isError={isError}
      />
    </div>
  );
}
