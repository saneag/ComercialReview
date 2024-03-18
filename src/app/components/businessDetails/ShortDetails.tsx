import { Base64 } from 'js-base64';
import { ImageOff } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import RatingStars from '@/app/components/RatingStars';
import { Badge } from '@/app/components/ui/badge';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';
import { roundTo } from '@/app/utils/roundTo';

export default function ShortDetails() {
  const { businessId } = useParams();
  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  const convertedImage =
    business && business.logo && business.logo.data
      ? `data:image/png;base64,${Base64.decode(business.logo.data)}`
      : null;

  return (
    business && (
      <div className='flex h-fit flex-col gap-3 bg-gray-200 pb-5'>
        <div className='flex-x-center max-h-[300px] min-h-[100px]'>
          {convertedImage ? (
            <Image
              src={convertedImage}
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full'
            />
          ) : (
            <div className='flex-center h-52 w-full bg-gray-300'>
              <ImageOff size={60} />
            </div>
          )}
        </div>
        <div className='space-y-3 px-5'>
          <p>{business.shortDescription}</p>
          <div className='flex flex-wrap justify-between gap-2'>
            <div>
              <p className='text-sm text-gray-500'>Category</p>
              <Badge className='bg-pink-400 hover:bg-pink-500'>
                {business.category}
              </Badge>
            </div>
            <div>
              <p className='text-sm text-gray-500'>Rating</p>
              <div className='flex gap-2'>
                <Badge className='flex w-fit bg-white hover:bg-white/70'>
                  <RatingStars starsCount={business.rating} starSize={16} />
                </Badge>
                <p className='text-nowrap text-sm text-gray-500'>
                  ( {roundTo(business.rating, 1)} / {business.reviewsCount}{' '}
                  reviews)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
