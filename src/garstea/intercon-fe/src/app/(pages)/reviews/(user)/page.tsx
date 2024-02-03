import ReviewsFilters from '@/app/components/reviews/reviewsFilters';
import ReviewsList from '@/app/components/reviews/reviewsList';

export default function ReviewsPage() {
  return (
    <div className='mt-5 flex flex-col gap-10 md:flex-row'>
      <div className='w-full md:w-4/12'>
        <ReviewsFilters />
      </div>
      <div className='w-full flex-1'>
        <ReviewsList />
      </div>
    </div>
  );
}
