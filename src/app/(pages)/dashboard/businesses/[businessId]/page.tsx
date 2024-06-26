'use client';

import { useCallback, useEffect, useState } from 'react';
import { ImageType } from 'react-images-uploading';

import { useParams, useRouter } from 'next/navigation';

import BusinessesForm from '@/app/components/adminDashboard/businesses/businessesForm/BusinessesForm';
import {
  useGetMyBusinessQuery,
  useUpdateBusinessMutation,
} from '@/app/redux/features/businessApi/businessApi';
import { BusinessFormSchemaState } from '@/app/types/business/BusinessSchemaType';
import { BusinessUpdateType } from '@/app/types/business/BusinessType';
import { BusinessUpdateFieldType } from '@/app/types/business/FormFieldsType';
import { CategoryFilterEnum } from '@/app/types/enums/CategoryFilterEnum';
import { convertImages } from '@/app/utils/convertStringImagesToImageType';
import { businessCreateFormSchema } from '@/app/utils/formValidations/businessFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function UpdateBusiness() {
  const { businessId } = useParams();

  const router = useRouter();
  const { data: businessForUpdate } = useGetMyBusinessQuery();
  const [updateBusiness, { isLoading, isError }] = useUpdateBusinessMutation();
  const [photos, setPhotos] = useState<ImageType[]>([]);

  const getPhotos = useCallback(async () => {
    const photos = await Promise.all(
      convertImages(businessForUpdate?.galleryPhotos)
    );
    setPhotos(photos);
  }, [businessForUpdate?.galleryPhotos]);

  const defaultValues: BusinessUpdateType = {
    id: businessForUpdate?.id || 0,
    title: businessForUpdate?.title || '',
    shortDescription: businessForUpdate?.shortDescription || '',
    fullDescription: businessForUpdate?.fullDescription || '',
    logo: businessForUpdate?.logoPath || null,
    address: businessForUpdate?.address || {
      street: '',
      latitude: '',
      longitude: '',
    },
    category: businessForUpdate?.category || CategoryFilterEnum.ALL,
    galleryPhotos: photos || [],
    photosToDelete: [],
  };

  const formFields: BusinessUpdateFieldType[] = [
    {
      label: 'title',
      displayLabel: 'Title',
      isRequired: true,
    },
  ];

  const textFormFields: BusinessUpdateFieldType[] = [
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
      if (data.galleryPhotos.length > 0) {
        data.galleryPhotos.forEach((photo) => {
          formData.append('GalleryPhotos', photo.file);
        });
      }
      if (data.photosToDelete && data.photosToDelete?.length > 0) {
        data.photosToDelete.forEach((photoId) => {
          formData.append('PhotosToDelete', photoId.toString());
        });
      }

      const response = await updateBusiness({
        body: formData,
        businessId: Number(businessId),
      }).unwrap();

      if (response && response.id) {
        showToastSuccess('Business created successfully');
        router.push('/dashboard/businesses');
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (businessForUpdate) {
      getPhotos();
    }
  }, [businessForUpdate, businessId, getPhotos]);

  return (
    <div className='my-10 flex justify-center'>
      <BusinessesForm
        defaultValues={defaultValues}
        resolver={businessCreateFormSchema}
        onSubmit={onSubmit}
        formFields={formFields}
        textFormFields={textFormFields}
        buttonLabel='Update Business'
        buttonClassName='bg-green-600 hover:bg-green-700'
        isPending={isLoading}
        isError={isError}
      />
    </div>
  );
}
