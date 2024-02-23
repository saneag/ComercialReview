import ReviewCardBody from '@/app/components/reviewsList/reviewCard/ReviewCardBody';
import ReviewCardHeader from '@/app/components/reviewsList/reviewCard/ReviewCardHeader';
import { Card } from '@/app/components/ui/card';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardProps {
  review: ReviewType;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <ReviewCardHeader review={review} />
      <ReviewCardBody review={review} />
    </Card>
  );
}
