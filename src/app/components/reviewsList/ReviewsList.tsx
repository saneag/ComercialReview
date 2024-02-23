import Link from 'next/link';
import { useParams } from 'next/navigation';

import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';

interface ReviewsListProps {
  reviewsLimit?: number;
}

export default function ReviewsList({ reviewsLimit }: ReviewsListProps) {
  const { businessId } = useParams();

  const { data: reviews, isSuccess } = useGetReviewsByBusinessIdQuery(
    Number(businessId)
  );

  return (
    <div className='w-full space-y-4'>
      <div className='flex justify-end'>
        <Link
          href={`/businesses/${businessId}/reviews`}
          className='text-blue-500 underline underline-offset-4'
        >
          Show All {reviews?.length || 0} reviews
        </Link>
      </div>
      {/* TODO: remove slice after pagination is implemented */}
      {isSuccess &&
        reviews
          .slice(0, reviewsLimit)
          .map((review, index) => <ReviewCard key={index} review={review} />)}
    </div>
  );
}
