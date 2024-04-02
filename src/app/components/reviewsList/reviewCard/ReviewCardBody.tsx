import { useRef } from 'react';

import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { CardContent } from '@/app/components/ui/card';
import { useIsTruncatedElement } from '@/app/hooks/useIsTruncatedElement';
import { LikeType } from '@/app/types/LikeType';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardBodyProps {
  review: ReviewType;
}

export default function ReviewCardBody({ review }: ReviewCardBodyProps) {
  const contentRef = useRef(null);
  const { isTruncated, isReadingMore, setIsReadingMore } =
    useIsTruncatedElement(contentRef);

  return (
    <CardContent>
      <div className='space-y-5'>
        <p
          className={`overflow-hidden ${isReadingMore ? '' : 'max-h-[50px] '}`}
          ref={contentRef}
        >
          {review.reviewText}
        </p>
        {review.like === LikeType.LIKE && (
          <div className='flex items-center gap-2 '>
            <ThumbsUp className='size-10 rounded-lg bg-green-500 p-2 text-white' />
            <span>Recommended</span>
          </div>
        )}
        {review.like === LikeType.DISLIKE && (
          <div className='flex items-center gap-2 '>
            <ThumbsDown className='size-10 rounded-lg bg-red-500 p-2 text-white' />
            <span>Not Recommended</span>
          </div>
        )}
      </div>
      {isTruncated && (
        <div className='flex-center'>
          <Button
            variant='link'
            className='mt-2'
            onClick={() => setIsReadingMore(!isReadingMore)}
          >
            {isReadingMore ? 'Show less' : 'Show more'}
          </Button>
        </div>
      )}
    </CardContent>
  );
}
