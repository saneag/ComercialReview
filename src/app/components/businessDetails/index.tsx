'use client';

import { useParams } from 'next/navigation';

import FullDetails from '@/app/components/businessDetails/FullDetails';
import Description from '@/app/components/businessDetails/ShortDetails';
import ImageCarousel from '@/app/components/imageCarousel/ImageCarousel';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';

export default function BusinessDetails() {
  const { businessId } = useParams();

  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  const images: string[] = [
    '/assets/images/linella1.jpg',
    '/assets/images/linella2.jpg',
    '/assets/images/linella3.jpg',
    '/assets/images/linella4.jpg',
    '/assets/images/linella5.png',
  ];

  return (
    !isLoading &&
    business && (
      <div className='flex flex-col gap-2'>
        <div>
          <p className='text-2xl font-semibold'>{business.title}</p>
        </div>
        <div className='flex w-full gap-4'>
          <div className='w-8/12 space-y-10'>
            {images.length !== 0 && (
              <ImageCarousel images={images} includeBigImage />
            )}
            <FullDetails />
          </div>
          <Description />
        </div>
      </div>
    )
  );
}
