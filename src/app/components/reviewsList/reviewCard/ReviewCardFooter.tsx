import { useEffect, useState } from 'react';

import { Heart } from 'lucide-react';

import CreateComment from '@/app/components/reviewsComments/CreateComment';
import ReviewCommentsList from '@/app/components/reviewsComments/ReviewCommentsList';
import { CardFooter } from '@/app/components/ui/card';
import {
  useLikeReviewMutation,
  useUnlikeReviewMutation,
} from '@/app/redux/features/reviewApi/reviewLikeApi';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardFooterProps {
  review: ReviewType;
}

export default function ReviewCardFooter({ review }: ReviewCardFooterProps) {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const [triggerLike] = useLikeReviewMutation();
  const [triggerUnlike] = useUnlikeReviewMutation();

  const handleHeartClick = () => {
    if (review.currentUserLiked) {
      triggerUnlike({ businessId: review.businessId, userId: review.authorId });
    } else {
      triggerLike({ businessId: review.businessId, userId: review.authorId });
    }
  };

  return (
    <CardFooter className='flex flex-col gap-5'>
      <div
        className={`flex w-full gap-3 ${isAddingComment ? 'flex-col' : 'items-center justify-between'}`}
      >
        <div className='flex items-center gap-2 pl-2'>
          <Heart
            onClick={handleHeartClick}
            className='cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80'
            fill={review.currentUserLiked ? '#ff0000' : '#fff'}
            stroke={review.currentUserLiked ? '#ff0000' : '#000'}
            size={20}
          />
          <span className='text-gray-500'>{review.likesCount || 0}</span>
        </div>
        <CreateComment
          reviewAuthorId={review.authorId}
          isAddingComment={isAddingComment}
          setIsAddingComment={setIsAddingComment}
        />
      </div>
      <ReviewCommentsList reviewAuthorId={review.authorId} />
    </CardFooter>
  );
}
