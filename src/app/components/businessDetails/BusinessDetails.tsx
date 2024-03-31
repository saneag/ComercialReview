'use client';

import { useParams } from 'next/navigation';

import FullDetails from '@/app/components/businessDetails/FullDetails';
import Description from '@/app/components/businessDetails/ShortDetails';
import ImageCarousel from '@/app/components/ImageCarousel';
import ReviewsList from '@/app/components/reviewsList/ReviewsList';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';
import { showToastError } from '@/app/utils/showToastMessage';

export default function BusinessDetails() {
  const { businessId } = useParams();

  const {
    data: business,
    isLoading,
    isError,
  } = useGetBusinessQuery(Number(businessId));

  if (isError) {
    showToastError('Error fetching business');
  }

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
      <div className='flex flex-col gap-4'>
        <div>
          <p className='text-4xl font-semibold'>{business.title}</p>
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
        <div className='space-y-3'>
          <div className='flex w-full lg:w-8/12'>
            <ReviewsList showAllReviewsLink />
          </div>
        </div>
      </div>
    )
  );
}
