'use client';

import { useParams } from 'next/navigation';

import ImageCarouselAndDescription from '@/app/components/businessDetails/ImageCarouselAndDescription/ImageCarouselAndDescription';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';

export default function BusinessDetails() {
  const { businessId } = useParams();

  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  return (
    !isLoading &&
    business && (
      <div className='flex flex-col gap-2'>
        <div>
          <p className='text-2xl font-semibold'>{business.title}</p>
        </div>
        <ImageCarouselAndDescription />
      </div>
    )
  );
}
