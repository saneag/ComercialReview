import { useEffect, useState } from 'react';

import Image from 'next/image';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/app/components/ui/carousel';
import { GalleryPhotoType } from '@/app/types/business/BusinessType';

interface ImageCarouselProps {
  images: GalleryPhotoType[];
  includeBigImage?: boolean;
}

export default function ImageCarousel({
  images,
  includeBigImage,
}: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleImageClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }

    setCurrent(index);
  };

  return (
    <div>
      {includeBigImage && (
        <div className='flex-y-center h-full min-h-[400px]'>
          <Image
            src={images[current].path}
            alt='image'
            width={0}
            height={0}
            sizes='100vw'
            className='h-full max-h-[400px] w-full object-contain'
            priority
          />
        </div>
      )}
      <Carousel setApi={setApi} className='w-full'>
        <CarouselContent className='ml-0 mr-0 flex gap-2 py-2'>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className='basis-1/3 pl-0 sm:basis-1/4 lg:basis-1/3 xl:basis-1/4'
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.path}
                alt='image'
                width={0}
                height={0}
                sizes='100vw'
                className='h-20 w-full cursor-pointer rounded-md object-cover shadow-sm hover:shadow-md'
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
