import { ImageOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import RatingStars from '@/app/components/RatingStars';
import { CardHeader } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';
import { roundTo } from '@/app/utils/roundTo';

interface BusinessCardHeaderProps {
  business: BusinessType;
}

export default function BusinessCardHeader({
  business,
}: BusinessCardHeaderProps) {
  const { title, shortDescription, logoPath, rating, reviewsCount, id } =
    business;

  return (
    <CardHeader className='flex flex-row flex-wrap gap-3'>
      <div className='max-sm:flex-x-center min-w-14 max-sm:w-full'>
        <div>
          {logoPath ? (
            <Image
              src={logoPath || ''}
              alt={business.title}
              width={0}
              height={0}
              sizes='100vw'
              className='h-14 w-auto'
            />
          ) : (
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gray-200'>
              <ImageOff />
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-1 flex-wrap gap-x-4 max-sm:justify-between'>
        <div className='flex flex-1 flex-col'>
          <Link
            href={`/businesses/${id}`}
            className='whitespace-break-spaces text-3xl'
          >
            {title}
          </Link>
          <span className='line-clamp-3 whitespace-break-spaces'>
            {shortDescription}
          </span>
        </div>
        <div className='w-fit text-sm xs:px-2'>
          <div className='mt-2 flex items-center justify-evenly gap-1 text-gray-500'>
            <span>{roundTo(rating, 1)}</span>
            <div className='flex space-x-1'>
              <RatingStars starsCount={rating} starSize={12} />
            </div>
            <span className='text-gray-500'>({reviewsCount})</span>
          </div>
        </div>
      </div>
    </CardHeader>
  );
}
