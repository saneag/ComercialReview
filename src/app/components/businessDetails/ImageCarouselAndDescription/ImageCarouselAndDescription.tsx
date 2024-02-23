import { ImageOff } from 'lucide-react';
import { useParams } from 'next/navigation';

import Description from '@/app/components/businessDetails/ImageCarouselAndDescription/Description';
import ImageCarousel from '@/app/components/imageCarousel';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';

export default function ImageCarouselAndDescription() {
  const { businessId } = useParams();
  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  const images: string[] = [
    '/assets/images/linella1.jpg',
    '/assets/images/linella2.jpg',
    '/assets/images/linella3.jpg',
    '/assets/images/linella4.jpg',
    '/assets/images/linella5.png',
  ];

  return (
    business && (
      <div className='flex w-full gap-4'>
        <div className='w-8/12'>
          {images.length !== 0 ? (
            <ImageCarousel images={images} includeBigImage />
          ) : (
            <div className='flex-center h-96 bg-gray-300'>
              <ImageOff size={96} />
            </div>
          )}
        </div>
        <Description />
      </div>
    )
  );
}
