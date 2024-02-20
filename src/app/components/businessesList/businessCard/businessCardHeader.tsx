import { AvatarImage } from '@radix-ui/react-avatar';
import { Base64 } from 'js-base64';
import Link from 'next/link';

import RatingStars from '@/app/components/RatingStars';
import { Avatar } from '@/app/components/ui/avatar';
import { CardHeader } from '@/app/components/ui/card';
import { BusinessType } from '@/app/types/business/BusinessType';

interface BusinessCardHeaderProps {
  business: BusinessType;
}

export default function BusinessCardHeader({
  business,
}: BusinessCardHeaderProps) {
  const { title, shortDescription, logo, rating, reviewsCount, id } = business;

  const convertedImage = logo.data
    ? `data:image/png;base64,${Base64.decode(logo.data)}`
    : null;

  return (
    <CardHeader className='flex flex-col gap-x-3 xs:flex-row'>
      {convertedImage && (
        <Avatar className='h-14 w-auto'>
          <AvatarImage
            className='object-contain'
            src={convertedImage}
            alt={title}
          />
        </Avatar>
      )}
      <div className='flex flex-1 flex-col'>
        <Link href={`/businesses/${id}`} className='break-all text-3xl'>
          {title}
        </Link>
        <span className='break-all'>{shortDescription}</span>
      </div>
      <div className='w-fit text-sm xs:px-2'>
        <div className='mt-2 flex items-center justify-evenly gap-1 text-gray-500'>
          <span>{rating}</span>
          <div className='flex space-x-1'>
            <RatingStars starsCount={rating} starSize={12} />
          </div>
          <span className='text-gray-500'>({reviewsCount})</span>
        </div>
      </div>
    </CardHeader>
  );
}
