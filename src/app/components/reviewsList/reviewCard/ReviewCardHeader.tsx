import { Star } from 'lucide-react';

import { CardHeader } from '@/app/components/ui/card';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardHeaderProps {
  review: ReviewType;
}

export default function ReviewCardHeader({ review }: ReviewCardHeaderProps) {
  const getStarColor = (grade: number) => {
    if (grade <= 2) {
      return '#FD909B';
    }

    if (grade > 2 && grade <= 4) {
      return '#FFD297';
    }

    return '#71BEA2';
  };

  return (
    <CardHeader>
      <div className='flex justify-between'>
        <div className='flex gap-1'>
          <p>{review.author.firstName}</p>
          <p>{review.author.lastName}</p>
        </div>
        <div className='flex-y-center gap-2'>
          <p className='text-lg'>{review.grade}</p>
          <Star
            size={24}
            color={getStarColor(review.grade)}
            fill={getStarColor(review.grade)}
            className='drop-shadow'
          />
        </div>
      </div>
    </CardHeader>
  );
}
