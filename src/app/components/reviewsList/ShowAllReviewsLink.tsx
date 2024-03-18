import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';

interface ShowAllReviewsLinkProps {
  reviewsLimit?: number;
}

export default function ShowAllReviewsLink({
  reviewsLimit,
}: ShowAllReviewsLinkProps) {
  const { businessId } = useParams();

  const { data: reviews } = useGetReviewsByBusinessIdQuery(Number(businessId));

  const showAllReviewsButton =
    reviewsLimit && reviews && reviewsLimit < reviews?.length;

  return (
    showAllReviewsButton && (
      <div className='flex justify-end'>
        <Link
          href={`/businesses/${businessId}/reviews`}
          className='text-blue-500 underline underline-offset-4'
        >
          Show All {reviews?.length || 0} reviews
        </Link>
      </div>
    )
  );
}
