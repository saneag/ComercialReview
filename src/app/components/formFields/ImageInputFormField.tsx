import { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Base64 } from 'js-base64';

import RequiredFieldStar from '@/app/components/RequiredFieldStar';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { BaseFieldType } from '@/app/types/BaseFormFieldType';

interface ImageInputFormFieldProps extends BaseFieldType {
  className?: string;
}

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const dataTransfer = new DataTransfer();

  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

export default function ImageInputFormField({
  label,
  displayLabel,
  isRequired,
  placeholder,
  className,
}: ImageInputFormFieldProps) {
  const [preview, setPreview] = useState('');
  const form = useFormContext();

  const handleImageSave = (files: FileList, onChange: any) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      const base64String = base64?.toString().split(',')[1];
      const base64Data = Base64.encode(base64String as string);
      onChange({ data: base64Data });
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className={className}>
      <Avatar className='h-24 w-24'>
        <AvatarImage src={preview} className='object-contain' />
        <AvatarFallback>Logo</AvatarFallback>
      </Avatar>
      <FormField
        control={form.control}
        name={label}
        render={({ field: { onChange, value, ...rest } }) => (
          <FormItem>
            <FormLabel className='text-lg text-gray-500'>
              {displayLabel} {isRequired && <RequiredFieldStar />}
            </FormLabel>
            <FormControl>
              <Input
                {...rest}
                type='file'
                onChange={(event) => {
                  const { files, displayUrl } = getImageData(event);
                  setPreview(displayUrl);
                  handleImageSave(files, onChange);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
