import { useParams } from 'next/navigation';

import ReviewsList from '@/app/components/reviewsList/ReviewsList';
import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';

export default function ReviewsSection() {
  const { businessId } = useParams();

  const { data: reviews, isLoading } = useGetReviewsByBusinessIdQuery(
    Number(businessId)
  );

  return (
    <div className='space-y-3'>
      <div className='flex w-8/12'>
        <ReviewsList reviewsLimit={3} />
      </div>
    </div>
  );
}
