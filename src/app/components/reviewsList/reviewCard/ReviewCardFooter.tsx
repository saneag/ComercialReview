import { useState } from 'react';

import { Heart } from 'lucide-react';

import LikeButton from '@/app/components/LikeButton';
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
        <LikeButton
          handleHeartClick={handleHeartClick}
          currentUserLiked={review.currentUserLiked}
          likesCount={review.likesCount}
        />
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
