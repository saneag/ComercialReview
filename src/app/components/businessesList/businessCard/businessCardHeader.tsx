import Link from 'next/link';

import RatingStars from '@/app/components/ratingStars';
import { CardHeader } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';

interface BusinessCardHeaderProps {
  business: BusinessType;
}

export default function BusinessCardHeader({
  business,
}: BusinessCardHeaderProps) {
  return (
    <CardHeader className='flex flex-col gap-x-3 xs:flex-row'>
      <div className='flex flex-1 flex-col'>
        <Link
          href={`/businesses/${business.id}`}
          className='break-all text-3xl'
        >
          {business.title}
        </Link>
        <span className='break-all'>{business.shortDescription}</span>
      </div>
      <div className='w-fit text-sm xs:px-2'>
        <div className='mt-2 flex items-center justify-evenly gap-1 text-gray-500'>
          <span>{business.rating}</span>
          <div className='flex space-x-1'>
            <RatingStars starsCount={business.rating} starSize={12} />
          </div>
          <span className='text-gray-500'>({business.reviewsCount})</span>
        </div>
      </div>
    </CardHeader>
  );
}
