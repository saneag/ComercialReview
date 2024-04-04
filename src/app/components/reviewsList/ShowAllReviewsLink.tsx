import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetReviewsByBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';
import { useAppSelector } from '@/app/redux/store';

export default function ShowAllReviewsLink() {
  const { businessId } = useParams();
  const page = useAppSelector((state) => state.pagination);

  const { data: reviews } = useGetReviewsByBusinessIdQuery({
    businessId: Number(businessId),
    params: {
      pageNumber: page.pageIndex,
      pageSize: page.pageSize,
    },
  });

  return (
    reviews?.totalCount !== 0 && (
      <div className='flex justify-end'>
        <Link
          href={`/businesses/${businessId}/reviews`}
          className='text-blue-500 underline underline-offset-4'
        >
          Show all {reviews?.totalCount} reviews
        </Link>
      </div>
    )
  );
}
