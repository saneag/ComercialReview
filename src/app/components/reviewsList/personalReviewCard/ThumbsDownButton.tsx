import { Check, ThumbsDown } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { RecommendationType } from '@/app/types/RecommendationType';

interface ThumbsDownButtonProps {
  isDisabled: boolean;
  onChange: (value: RecommendationType) => void;
  isSelected: boolean;
}

export default function ThumbsDownButton({
  isDisabled,
  onChange,
  isSelected,
}: ThumbsDownButtonProps) {
  return (
    <Button
      className='relative nm-flat-red-500-sm hover:nm-flat-red-600-sm'
      disabled={isDisabled || isSelected}
      onClick={() => onChange(RecommendationType.NotRecommended)}
      type='button'
    >
      <ThumbsDown />
      {isSelected && (
        <Check className='absolute inset-0 size-full text-black' />
      )}
    </Button>
  );
}
