import { AvatarImage } from '@radix-ui/react-avatar';
import { Base64 } from 'js-base64';
import Link from 'next/link';

import RatingStars from '@/app/components/RatingStars';
import { Avatar } from '@/app/components/ui/avatar';
import { CardHeader } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';
import { roundTo } from '@/app/utils/roundTo';

interface BusinessCardHeaderProps {
  business: BusinessType;
}

export default function BusinessCardHeader({
  business,
}: BusinessCardHeaderProps) {
  const { title, shortDescription, logo, rating, reviewsCount, id } = business;

  const convertedImage =
    logo && logo.data
      ? `data:image/png;base64,${Base64.decode(logo.data)}`
      : null;

  return (
    <CardHeader className='flex flex-row flex-wrap gap-3'>
      <div className='max-sm:flex-x-center max-sm:w-full'>
        {convertedImage && (
          <Avatar className='h-14 w-auto'>
            <AvatarImage
              className='object-contain'
              src={convertedImage}
              alt={title}
            />
          </Avatar>
        )}
      </div>
      <div className='flex flex-1 flex-wrap max-sm:justify-between'>
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
