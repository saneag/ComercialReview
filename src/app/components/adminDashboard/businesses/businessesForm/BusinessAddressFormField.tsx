import { useMemo } from 'react';
import { fromAddress, setKey, setLanguage, setRegion } from 'react-geocode';
import { useFormContext } from 'react-hook-form';

import { debounce } from 'lodash';
import { Info } from 'lucide-react';

import HoverTooltip from '@/app/components/hoverTooltip';
import RequiredFieldStar from '@/app/components/requiredFieldStar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { showToastError } from '@/app/utils/showToastMessage';

setKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string);
setLanguage('ro');
setRegion('md');

export default function BusinessAddressFormField() {
  const form = useFormContext();

  const handleAddressSearch = (address: string, onChange: any) => {
    onChange(address);
    debounceSearch(address);
  };

  const debounceSearch = useMemo(
    () => debounce((address: string) => searchAddress(address), 2000),
    []
  );

  const searchAddress = async (address: string) => {
    try {
      const response = await fromAddress(address);
      form.setValue('address', {
        street: response.results[0].formatted_address,
        latitude: response.results[0].geometry.location.lat,
        longitude: response.results[0].geometry.location.lng,
      });
    } catch (error) {
      showToastError('Address not found');
    }
  };

  return (
    <FormField
      name='address.street'
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='flex items-center gap-2 text-lg text-gray-500'>
            <div>
              <span>Business address</span> <RequiredFieldStar />
            </div>
            <HoverTooltip
              triggerChildren={<Info />}
              contentChildren={
                <div className='max-w-[200px]'>
                  <p>
                    Addresses are searched using google maps search engine.
                    Please enter an address that can be found on google maps.
                  </p>
                </div>
              }
            />
          </FormLabel>
          <FormControl>
            <Input
              value={field.value}
              onChange={({ target }) =>
                handleAddressSearch(target.value, field.onChange)
              }
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
