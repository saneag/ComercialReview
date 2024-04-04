import { ImageOff } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import RatingStars from '@/app/components/RatingStars';
import { Badge } from '@/app/components/ui/badge';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';
import { categoryEnumToText } from '@/app/types/enums/CategoryFilterEnum';
import { roundTo } from '@/app/utils/roundTo';

export default function ShortDetails() {
  const { businessId } = useParams();
  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  return (
    business && (
      <div className='flex h-fit flex-col gap-3 bg-gray-200 pb-5'>
        <div className='flex-x-center max-h-[300px] min-h-[100px]'>
          {business.logoPath ? (
            <Image
              src={business.logoPath}
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
                {categoryEnumToText(business.category)}
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
