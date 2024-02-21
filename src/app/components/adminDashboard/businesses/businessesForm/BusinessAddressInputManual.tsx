import { Search } from 'lucide-react';

import BusinessAddressTooltip from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressTooltip';
import InputFormField from '@/app/components/formFields/InputFormField';
import { Button } from '@/app/components/ui/button';
import { BusinessAddressInputEnum } from '@/app/types/enums/BusinessAddressInputEnum';

interface BusinessAddressInputManualProps {
  businessAddressInputType: BusinessAddressInputEnum;
  handleInputTypeChange: (type: BusinessAddressInputEnum) => void;
}

export default function BusinessAddressInputManual({
  handleInputTypeChange,
  businessAddressInputType,
}: BusinessAddressInputManualProps) {
  return (
    <div className='space-y-4'>
      <div className='relative'>
        <InputFormField
          label='address.street'
          displayLabel='Street'
          isRequired
        />
        <div className='absolute left-16 top-1 text-gray-500'>
          <BusinessAddressTooltip
            businessAddressInputType={businessAddressInputType}
          />
        </div>
        <Button
          className='absolute right-0 top-0 h-fit py-1'
          variant='ghost'
          size='icon'
          onClick={() => handleInputTypeChange(BusinessAddressInputEnum.AUTO)}
        >
          <Search />
        </Button>
      </div>
      <InputFormField
        label='address.latitude'
        displayLabel='Latitude'
        isRequired
      />
      <InputFormField
        label='address.longitude'
        displayLabel='Longitude'
        isRequired
      />
    </div>
  );
}
