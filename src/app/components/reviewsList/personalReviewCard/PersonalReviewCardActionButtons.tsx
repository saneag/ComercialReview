import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '@/app/components/ui/button';

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
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <span>Do you recommend this business?</span>
      <div className='flex justify-between'>
        <div className='flex flex-wrap gap-2'>
          <Button
            className='nm-flat-green-500-sm hover:nm-flat-green-600-sm'
            disabled={isDisabled}
          >
            <ThumbsUp />
          </Button>
          <Button
            className='nm-flat-red-500-sm hover:nm-flat-red-600-sm'
            disabled={isDisabled}
          >
            <ThumbsDown />
          </Button>
        </div>
        <div className='flex flex-wrap-reverse justify-end gap-2'>
          {isEdit && (
            <Button
              className='text-black nm-flat-gray-300-sm hover:bg-gray-400'
              onClick={handleEdit}
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
  );
}
