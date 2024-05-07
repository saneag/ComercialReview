import { useMemo } from 'react';
import { fromAddress, setKey, setLanguage, setRegion } from 'react-geocode';
import { useFormContext } from 'react-hook-form';

import { debounce } from 'lodash';
import { Hand, Loader2 } from 'lucide-react';

import BusinessAddressTooltip from '@/app/components/adminDashboard/businesses/businessesForm/BusinessAddressTooltip';
import RequiredFieldStar from '@/app/components/RequiredFieldStar';
import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { BusinessAddressInputEnum } from '@/app/types/enums/BusinessAddressInputEnum';
import { showToastError } from '@/app/utils/showToastMessage';

setKey(process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string);
setLanguage('ro');
setRegion('md');

interface BusinessAddressFormFieldProps {
  businessAddressInputType: BusinessAddressInputEnum;
  handleInputTypeChange: (type: BusinessAddressInputEnum) => void;
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

export default function BusinessAddressFormField({
  handleInputTypeChange,
  businessAddressInputType,
  setIsLoading,
  isLoading,
}: BusinessAddressFormFieldProps) {
  const form = useFormContext();

  const handleAddressSearch = (address: string, onChange: any) => {
    setIsLoading(true);
    onChange(address);
    if (address.length) {
      debounceSearch(address);
    } else {
      setIsLoading(false);
    }
  };

  const searchAddress = async (address: string) => {
    try {
      const response = await fromAddress(address);
      form.setValue('address', {
        street: response.results[0].formatted_address,
        latitude: String(response.results[0].geometry.location.lat),
        longitude: String(response.results[0].geometry.location.lng),
      });
    } catch (error) {
      showToastError('Address not found');
    }
    setIsLoading(false);
  };

  const debounceSearch = useMemo(
    () => debounce((address: string) => searchAddress(address), 2000),
    []
  );

  return (
    <FormField
      name='address.street'
      control={form.control}
      render={({ field }) => (
        <FormItem className='relative'>
          <FormLabel
            htmlFor='street'
            className='flex w-fit items-center gap-2 text-lg text-gray-500'
          >
            <div>
              <span>Address</span> <RequiredFieldStar />
            </div>
            <BusinessAddressTooltip
              businessAddressInputType={businessAddressInputType}
            />
            <Button
              className='absolute right-0 top-0 h-fit py-1.5 text-black'
              size='icon'
              variant='ghost'
              onClick={() =>
                handleInputTypeChange(BusinessAddressInputEnum.MANUAL)
              }
            >
              <Hand size={20} />
            </Button>
          </FormLabel>
          <FormControl>
            <div className='relative'>
              <Input
                id='street'
                value={field.value}
                className='w-full nm-flat-white-sm focus-visible:ring-1 focus-visible:ring-blue-500'
                onChange={({ target }) =>
                  handleAddressSearch(target.value, field.onChange)
                }
              />
              {isLoading && (
                <Loader2
                  size={20}
                  className='absolute right-2.5 top-2.5 animate-spin'
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
