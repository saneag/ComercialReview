import { useFormContext } from 'react-hook-form';

import { ThumbsDown, ThumbsUp } from 'lucide-react';

import ThumbsDownButton from '@/app/components/reviewsList/personalReviewCard/ThumbsDownButton';
import ThumbsUpButton from '@/app/components/reviewsList/personalReviewCard/ThumbsUpButton';
import { Button } from '@/app/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/components/ui/form';
import { LikeType } from '@/app/types/LikeType';

interface PersonalReviewCardActionButtonsProps {
  isDisabled: boolean;
  isEdit?: boolean;
  handleEdit?: () => void;
}

export default function PersonalReviewCardActionButtons({
  isDisabled,
  isEdit,
  handleEdit,
}: PersonalReviewCardActionButtonsProps) {
  const form = useFormContext();

  return (
    <FormField
      name='like'
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className='mt-3 flex flex-col gap-2'>
              <span>Do you recommend this business?</span>
              <div className='flex justify-between'>
                <div className='flex flex-wrap gap-2'>
                  <ThumbsUpButton
                    onChange={(value: LikeType) => field.onChange(value)}
                    isDisabled={isDisabled}
                    isSelected={field.value === LikeType.LIKE}
                  />
                  <ThumbsDownButton
                    onChange={(value: LikeType) => field.onChange(value)}
                    isDisabled={isDisabled}
                    isSelected={field.value === LikeType.DISLIKE}
                  />
                </div>
                <div className='flex flex-wrap-reverse justify-end gap-2'>
                  {isEdit && (
                    <Button
                      className='text-black nm-flat-gray-300-sm hover:bg-gray-400'
                      onClick={handleEdit}
                      type='button'
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    className='bg-gradient-to-tr from-purple-500/70 to-blue-500/70 text-white shadow-md brightness-125 hover:from-purple-500/50 hover:to-blue-500/50'
                    type='submit'
                    disabled={isDisabled}
                  >
                    Post review
                  </Button>
                </div>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
