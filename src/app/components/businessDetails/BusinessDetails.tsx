'use client';

import { useParams } from 'next/navigation';

import FullDetails from '@/app/components/businessDetails/FullDetails';
import ReviewsSection from '@/app/components/businessDetails/reviewsSection/ReviewsSection';
import Description from '@/app/components/businessDetails/ShortDetails';
import ImageCarousel from '@/app/components/ImageCarousel';
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
        <div className='flex w-full flex-wrap-reverse justify-center gap-4 lg:justify-normal'>
          <div className='w-full space-y-10 lg:w-7/12 xl:w-8/12'>
            {images.length !== 0 && (
              <ImageCarousel images={images} includeBigImage />
            )}
            <FullDetails />
          </div>
          <div className='w-full sm:w-8/12 lg:w-6/12 lg:flex-1 xl:w-full'>
            <Description />
          </div>
        </div>
        <div>
          <ReviewsSection />
        </div>
      </div>
    )
  );
}