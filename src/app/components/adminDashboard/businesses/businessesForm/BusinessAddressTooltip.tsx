import { Info } from 'lucide-react';

import HoverTooltip from '@/app/components/HoverTooltip';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { BusinessAddressInputEnum } from '@/app/types/enums/BusinessAddressInputEnum';

interface BusinessAddressTooltipProps {
  businessAddressInputType: BusinessAddressInputEnum;
}

export default function BusinessAddressTooltip({
  businessAddressInputType,
}: BusinessAddressTooltipProps) {
  const content =
    businessAddressInputType === BusinessAddressInputEnum.AUTO ? (
      <p>
        Addresses are searched using google maps search engine. If you have some
        trouble finding the address please change the address input type.
      </p>
    ) : (
      <p>
        In manual input you can add the address manually. Please fill all the
        fields using google maps. Sorry for the inconvenience.
      </p>
    );

  return (
    <>
      <div className='hidden lg:flex'>
        <HoverTooltip
          triggerChildren={<Info size={20} />}
          contentChildren={<div className='max-w-[250px]'>{content}</div>}
        />
      </div>
      <div className='flex lg:hidden'>
        <Popover>
          <PopoverTrigger type='button'>
            <Info size={20} />
          </PopoverTrigger>
          <PopoverContent className='max-w-[250px]'>{content}</PopoverContent>
        </Popover>
      </div>
    </>
  );
}
