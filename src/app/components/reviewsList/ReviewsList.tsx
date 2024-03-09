import { useState } from 'react';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import ListTypeChangeButtons from '@/app/components/ListTypeChangeButtons';
import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';
import { ListType } from '@/app/types/ListType';

interface ReviewsListProps {
  reviewsLimit?: number;
}

export default function ReviewsList({ reviewsLimit }: ReviewsListProps) {
  const [listType, setListType] = useState<ListType>(ListType.List);

  const { businessId } = useParams();

  const { data: reviews, isSuccess } = useGetReviewsByBusinessIdQuery(
    Number(businessId)
  );

  const showAllReviewsButton =
    reviewsLimit && reviews && reviewsLimit < reviews?.length;

  return (
    <div className='space-y-4'>
      {!reviewsLimit && <ListTypeChangeButtons setListType={setListType} />}
      {showAllReviewsButton && (
        <div className='flex justify-end'>
          <Link
            href={`/businesses/${businessId}/reviews`}
            className='text-blue-500 underline underline-offset-4'
          >
            Show All {reviews?.length || 0} reviews
          </Link>
        </div>
      )}
      <div
        className={`gap-4 ${listType === ListType.List ? 'flex w-full flex-col' : 'grid grid-cols-2 max-md:grid-cols-1'}`}
      >
        {isSuccess &&
          reviews
            .slice(0, reviewsLimit)
            .map((review, index) => <ReviewCard key={index} review={review} />)}
      </div>
    </div>
  );
}
