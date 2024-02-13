import { MapPinIcon } from 'lucide-react';

import { CardFooter } from '@/app/components/ui/card';
import { GoogleMapsEndpoint } from '@/app/constants/googleMapsEndpoint';
import { BusinessType } from '@/app/types/BusinessType';

interface BusinessCardFooterProps {
  business: BusinessType;
}

export default function BusinessCardFooter({
  business,
}: BusinessCardFooterProps) {
  return (
    <CardFooter className='justify-end'>
      <div>
        <a
          href={`${GoogleMapsEndpoint}/${business.address.latitude}+${business.address.longitude}`}
          target='_blank'
          className='group flex items-center gap-1 transition-colors hover:text-black/80'
        >
          <div>
            <MapPinIcon
              size={16}
              className='transition-colors group-hover:text-red-400'
            />
          </div>
          <span>{business.address.street}</span>
        </a>
      </div>
    </CardFooter>
  );
}
