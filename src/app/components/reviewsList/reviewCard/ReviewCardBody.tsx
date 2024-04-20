import { useRef } from 'react';

import { formatDistance } from 'date-fns';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { CardContent } from '@/app/components/ui/card';
import { useIsTruncatedElement } from '@/app/hooks/useIsTruncatedElement';
import { RecommendationType } from '@/app/types/RecommendationType';
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
      <div>
        <p
          className={`${isReadingMore ? '' : 'line-clamp-2 max-h-[50px]'}`}
          ref={contentRef}
        >
          {review.reviewText}
        </p>
        {isTruncated && (
          <div className='flex-center'>
            <Button
              variant='link'
              onClick={() => setIsReadingMore(!isReadingMore)}
            >
              {isReadingMore ? 'Show less' : 'Show more'}
            </Button>
          </div>
        )}
        <div className='mt-3 flex flex-wrap items-center justify-center gap-5 sm:justify-between'>
          <div>
            {review.recommendationType === RecommendationType.Recommended && (
              <div className='flex items-center gap-2 '>
                <ThumbsUp className='size-10 rounded-lg bg-green-500 p-2 text-white' />
                <span>Recommended</span>
              </div>
            )}
            {review.recommendationType ===
              RecommendationType.NotRecommended && (
              <div className='flex items-center gap-2 '>
                <ThumbsDown className='size-10 rounded-lg bg-red-500 p-2 text-white' />
                <span>Not Recommended</span>
              </div>
            )}
          </div>
          <p>
            Last Updated:{' '}
            {formatDistance(review.updatedDate, new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </CardContent>
  );
}
