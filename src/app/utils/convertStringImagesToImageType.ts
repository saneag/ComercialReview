import { ImageType } from 'react-images-uploading';

import { GalleryPhotoType } from '@/app/types/business/BusinessType';

export const convertImages = (
  images: GalleryPhotoType[] | undefined
): ImageType[] => {
  if (!images) return [];

  return images.map(async (image) => {
    try {
      return {
        id: image?.id || 0,
        data_url: image.path,
        file: new File([], ''),
      };
    } catch (error) {
      return {
        data_url: '',
        file: new File([], ''),
      };
    }
  });
};
