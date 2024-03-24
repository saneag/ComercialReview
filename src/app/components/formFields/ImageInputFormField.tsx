import { ChangeEvent, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Image as ImagePlaceholder } from 'lucide-react';
import Image from 'next/image';

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
  if (!event.target.files || !event.target.files.length)
    return { files: null, displayUrl: '' };

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
  isDisabled,
}: ImageInputFormFieldProps) {
  const [showBigImage, setShowBigImage] = useState(false);
  const [preview, setPreview] = useState('');
  const form = useFormContext();

  const handleImageSave = (files: FileList | null, onChange: any) => {
    if (!files || !files.length) return;
    onChange({ data: files[0] });
  };

  const handleImageClick = () => {
    if (preview) {
      setShowBigImage(!showBigImage);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    onChange: any
  ) => {
    const { files, displayUrl } = getImageData(event);
    if (displayUrl) {
      setPreview(displayUrl);
    }
    handleImageSave(files, onChange);
  };

  useEffect(() => {
    if (form.watch(label)?.data !== '') {
      // const base64Data = Base64.decode(form.watch(label).data);
      // setPreview(`data:image/png;base64,${base64Data}`);
      // setPreview();
    }
  }, [form, label]);

  return (
    <div className={className}>
      <Avatar
        className={`h-24 w-24 ${preview !== '' && 'cursor-pointer'}`}
        onClick={handleImageClick}
      >
        <AvatarImage src={preview} className='object-contain' />
        <AvatarFallback className='bg-gray-200'>
          <ImagePlaceholder />
        </AvatarFallback>
      </Avatar>
      {showBigImage && (
        <div
          className='fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/80'
          onClick={handleImageClick}
        >
          <Image
            src={preview}
            alt='Image'
            width={0}
            height={0}
            className='h-96 w-auto rounded-xl'
          />
        </div>
      )}
      {!isDisabled && (
        <FormField
          control={form.control}
          name={label}
          disabled={isDisabled}
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel className='text-lg text-gray-500'>
                {displayLabel} {isRequired && <RequiredFieldStar />}
              </FormLabel>
              <FormControl>
                <Input
                  {...rest}
                  type='file'
                  onChange={(event) => handleInputChange(event, onChange)}
                  className='max-w-[220px]'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
}
