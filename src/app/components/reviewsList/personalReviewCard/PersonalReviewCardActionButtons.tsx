import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '@/app/components/ui/button';

interface PersonalReviewCardActionButtonsProps {
  isDisabled: boolean;
}

export default function PersonalReviewCardActionButtons({
  isDisabled,
}: PersonalReviewCardActionButtonsProps) {
  return (
    <div className='mt-3 flex flex-col gap-2'>
      <span>Do you recommend this business?</span>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
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
        <Button
          className='bg-gradient-to-tr from-purple-500/70 to-blue-500/70 text-white brightness-125'
          type='submit'
          disabled={isDisabled}
        >
          Post review
        </Button>
      </div>
    </div>
  );
}
