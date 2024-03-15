import { useRef, useState } from 'react';

import { Button } from '@/app/components/ui/button';
import { CardContent } from '@/app/components/ui/card';
import { useIsOverflow } from '@/app/hooks/useIsOverflow';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardBodyProps {
  review: ReviewType;
}

export default function ReviewCardBody({ review }: ReviewCardBodyProps) {
  const contentRef = useRef(null);
  const hasOverflow = useIsOverflow(contentRef);
  const [showMore, setShowMore] = useState(false);

  return (
    <CardContent>
      <p
        className={`overflow-hidden ${showMore ? '' : 'max-h-[50px] '}`}
        ref={contentRef}
      >
        {review.reviewText}
      </p>
      {hasOverflow && (
        <div className='flex-center'>
          <Button
            variant='link'
            className='mt-2'
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </Button>
        </div>
      )}
    </CardContent>
  );
}
