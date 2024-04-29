import CreateComment from '@/app/components/reviewsComments/CreateComment';
import ReviewCommentsList from '@/app/components/reviewsComments/ReviewCommentsList';
import { CardFooter } from '@/app/components/ui/card';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardFooterProps {
  review: ReviewType;
}

export default function ReviewCardFooter({ review }: ReviewCardFooterProps) {
  return (
    <CardFooter className='flex flex-col'>
      <CreateComment reviewAuthorId={review.authorId} />
      <ReviewCommentsList reviewAuthorId={review.authorId} />
    </CardFooter>
  );
}
