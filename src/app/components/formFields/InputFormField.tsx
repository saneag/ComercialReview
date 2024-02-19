import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Eye, X } from 'lucide-react';

import RequiredFieldStar from '@/app/components/requiredFieldStar';
import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { BaseFieldType } from '@/app/types/BaseFormFieldType';

interface InputFormFieldProps extends BaseFieldType {}

export default function InputFormField({
  label,
  displayLabel,
  placeholder,
  type,
  isRequired,
}: InputFormFieldProps) {
  const form = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const handleButtonClick = () => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else {
      form.setValue(label, '');
    }
  };

  return (
    <FormField
      control={form.control}
      name={label}
      render={({ field }) => (
        <FormItem>
          {displayLabel && (
            <FormLabel htmlFor={label} className='text-lg text-gray-500'>
              {displayLabel} {isRequired && <RequiredFieldStar />}
            </FormLabel>
          )}
          <FormControl>
            <div className='relative'>
              <Input
                id={label}
                {...field}
                placeholder={placeholder}
                type={type === 'password' && showPassword ? 'text' : type}
                className='w-full nm-flat-white-sm focus-visible:ring-1 focus-visible:ring-blue-500'
                autoComplete='new-password'
              />
              {form.watch(label) !== '' && (
                <Button
                  variant='link'
                  size='icon'
                  type='button'
                  className='absolute right-0 top-0'
                  onClick={handleButtonClick}
                >
                  {type !== 'password' ? <X size={20} /> : <Eye size={20} />}
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
