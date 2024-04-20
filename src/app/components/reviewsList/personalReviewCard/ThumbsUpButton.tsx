import { Check, ThumbsUp } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { RecommendationType } from '@/app/types/RecommendationType';

interface ThumbsUpButtonProps {
  isDisabled: boolean;
  onChange: (value: RecommendationType) => void;
  isSelected: boolean;
}

export default function ThumbsUpButton({
  isDisabled,
  onChange,
  isSelected,
}: ThumbsUpButtonProps) {
  return (
    <Button
      className='relative nm-flat-green-500-sm hover:nm-flat-green-600-sm'
      disabled={isDisabled || isSelected}
      onClick={() => onChange(RecommendationType.Recommended)}
      type='button'
    >
      <ThumbsUp />
      {isSelected && (
        <Check className='absolute inset-0 size-full text-black' />
      )}
    </Button>
  );
}
