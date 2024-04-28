import CreateComment from '@/app/components/reviewsComments/CreateComment';
import { CardFooter } from '@/app/components/ui/card';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardFooterProps {
  review: ReviewType;
}

export default function ReviewCardFooter({ review }: ReviewCardFooterProps) {
  return (
    <CardFooter>
      <CreateComment reviewAuthorId={review.authorId} />
    </CardFooter>
  );
}
