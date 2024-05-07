'use client';

import { useParams, useRouter } from 'next/navigation';

import FullDetails from '@/app/components/businessDetails/FullDetails';
import Description from '@/app/components/businessDetails/ShortDetails';
import ImageCarousel from '@/app/components/ImageCarousel';
import ReviewsList from '@/app/components/reviewsList/ReviewsList';
import { Button } from '@/app/components/ui/button';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';
import { useAppSelector } from '@/app/redux/store';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';
import { showToastError } from '@/app/utils/showToastMessage';

export default function BusinessDetails() {
  const router = useRouter();
  const { businessId } = useParams();
  const { user, role } = useAppSelector((state) => state.user);

  const {
    data: business,
    isLoading,
    isError,
  } = useGetBusinessQuery(Number(businessId));

  if (isError) {
    showToastError('Error fetching business');
  }

  const checkIfUserCanEdit = () => {
    return (
      user &&
      business &&
      user.id === business.ownerId &&
      (role === UserRoleEnum.ADMIN || role === UserRoleEnum.SUPER_ADMIN)
    );
  };

  return (
    !isLoading &&
    business && (
      <div className='flex flex-col gap-4'>
        <div className='flex w-full items-center justify-between gap-3'>
          <p className='text-4xl font-semibold'>{business.title}</p>
          {checkIfUserCanEdit() && (
            <Button
              onClick={() => router.push(`/dashboard/businesses/${businessId}`)}
              className='nm-flat-blue-500-sm hover:nm-flat-blue-600-sm'
            >
              Edit business
            </Button>
          )}
        </div>
        <div className='flex w-full flex-wrap-reverse justify-center gap-4 lg:justify-normal'>
          <div className='w-full space-y-10 lg:w-7/12 xl:w-8/12'>
            {business.galleryPhotos.length !== 0 && (
              <ImageCarousel images={business.galleryPhotos} includeBigImage />
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
