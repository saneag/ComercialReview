import { useFormContext } from 'react-hook-form';

import RequiredFieldStar from '@/app/components/RequiredFieldStar';
import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Textarea } from '@/app/components/ui/textarea';
import { BaseFieldType } from '@/app/types/BaseFormFieldType';

interface TextareaFormFieldProps extends BaseFieldType {}

export default function TextareaFormField({
  label,
  displayLabel,
  isRequired,
  placeholder,
  type,
}: TextareaFormFieldProps) {
  const form = useFormContext();

  const handleButtonClick = () => {
    form.setValue(label, '');
  };

  return (
    <FormField
      name={label}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {displayLabel && (
            <div className='flex items-end justify-between'>
              <FormLabel htmlFor={label} className='text-lg text-gray-500'>
                {displayLabel} {isRequired && <RequiredFieldStar />}
              </FormLabel>
              {form.watch(label) !== '' && (
                <Button
                  variant='ghost'
                  type='button'
                  className='h-fit w-fit px-2 py-0.5'
                  onClick={handleButtonClick}
                >
                  Clear text
                </Button>
              )}
            </div>
          )}
          <FormControl>
            <div className='relative'>
              <Textarea
                id={label}
                {...field}
                placeholder={placeholder}
                className='w-full nm-flat-white-sm focus-visible:ring-1 focus-visible:ring-blue-500'
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
