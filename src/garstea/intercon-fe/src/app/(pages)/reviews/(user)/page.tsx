import ReviewsFilters from '@/app/components/reviews/reviewsFilters';
import ReviewsList from '@/app/components/reviews/reviewsList';

export default function ReviewsPage() {
  return (
    <div className='flex gap-10'>
      <div className='w-3/12'>
        <ReviewsFilters />
      </div>
      <div className='w-full flex-1'>
        <ReviewsList />
      </div>
    </div>
  );
}
