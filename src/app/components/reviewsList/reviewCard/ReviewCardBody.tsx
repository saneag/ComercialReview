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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam
        provident molestias, non iure accusantium? Repudiandae optio accusamus
        facilis nesciunt quia asperiores, iste fuga natus vero at iusto
        consequatur sit sunt neque ullam. Error ducimus at quos illo tempora
        rerum eaque nulla est? Necessitatibus, cumque? Aperiam aut labore
        corporis sequi ex praesentium culpa id veniam beatae sint qui in minus
        delectus natus debitis et corrupti modi quasi ut, error expedita
        commodi! Inventore est aut deleniti officia nulla animi adipisci ab. Est
        autem error, ea quo rem mollitia cumque ducimus corrupti minus odit
        ullam non voluptate et voluptatibus atque? Repellendus, iste!
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
