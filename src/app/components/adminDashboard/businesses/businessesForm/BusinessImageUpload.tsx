import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ImageUploading, { ImageType } from 'react-images-uploading';

import { Pencil, Trash, Upload } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/app/components/ui/form';

export default function BusinessImageUpload() {
  const form = useFormContext();

  const [showBigImage, setShowBigImage] = useState(false);
  const [imageId, setImageId] = useState<number | null>(null);

  return (
    <div>
      <FormField
        name='galleryPhotos'
        control={form.control}
        render={({ field }) => (
          <FormItem className='px-1'>
            <FormLabel>Images</FormLabel>
            <FormControl>
              <ImageUploading
                multiple
                value={field.value}
                onChange={field.onChange}
                dataURLKey='data_url'
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageRemove,
                  dragProps,
                  isDragging,
                  onImageUpdate,
                }) => (
                  <div className='upload__image-wrapper space-y-5'>
                    <div className='space-y-3'>
                      <Button
                        type='button'
                        variant='outline'
                        className='flex h-20 w-full items-center gap-2'
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div>
                          <Upload size={16} />
                        </div>
                        <span>Click or Drop here</span>
                      </Button>
                      <div className='flex w-full justify-end'>
                        {imageList.length > 0 && (
                          <Button
                            type='button'
                            variant='destructive'
                            className='flex items-center gap-2'
                            onClick={() => {
                              onImageRemoveAll();
                              form.setValue(
                                'photosToDelete',
                                imageList.map((image) => image?.id)
                              );
                            }}
                          >
                            <div>
                              <Trash size={16} />
                            </div>
                            <span>Remove all images</span>
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                      {imageList.map((image, index) => (
                        <div key={index}>
                          <div className='image-item relative flex flex-col items-center justify-center gap-2'>
                            <Image
                              src={image['data_url']}
                              alt=''
                              width={0}
                              height={0}
                              sizes='100vw'
                              className='size-40'
                              onClick={() => {
                                setShowBigImage(true);
                                setImageId(index);
                              }}
                            />
                            <Button
                              className='absolute right-1 top-1 size-fit p-1'
                              type='button'
                              variant='destructive'
                              size='icon'
                              onClick={(e) => {
                                e.stopPropagation();
                                onImageRemove(index);
                                form.setValue('photosToDelete', [
                                  ...form.watch('photosToDelete'),
                                  image.id,
                                ]);
                              }}
                            >
                              <Trash size={16} />
                            </Button>
                          </div>
                          {showBigImage && imageId === index && (
                            <div
                              className='fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/80 p-5'
                              onClick={() => {
                                setShowBigImage(false);
                                setImageId(null);
                              }}
                            >
                              <Image
                                src={image['data_url']}
                                alt=''
                                width={0}
                                height={0}
                                sizes='100vw'
                                className='max-w-screen h-auto max-h-[90%] w-auto rounded-xl'
                                onClick={() => setShowBigImage(true)}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
