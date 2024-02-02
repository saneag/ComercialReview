import { useFormContext } from 'react-hook-form';

import RequiredFieldStar from '@/app/components/requiredFieldStar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { BaseFieldType } from '@/app/types/auth/FormFieldsType';

interface InputFormFieldProps extends BaseFieldType {}

export default function InputFormField({
  label,
  displayLabel,
  placeholder,
  type,
  isRequired,
}: InputFormFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={label}
      render={({ field }) => (
        <FormItem>
          {displayLabel && (
            <FormLabel className='text-lg text-gray-500'>
              {displayLabel} {isRequired && <RequiredFieldStar />}
            </FormLabel>
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              type={type ?? 'text'}
              className='w-full nm-flat-white-sm focus-visible:ring-1 focus-visible:ring-blue-500'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
