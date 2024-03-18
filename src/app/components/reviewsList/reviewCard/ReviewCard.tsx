import ReviewCardBody from '@/app/components/reviewsList/reviewCard/ReviewCardBody';
import ReviewCardHeader from '@/app/components/reviewsList/reviewCard/ReviewCardHeader';
import { Card } from '@/app/components/ui/card';
import { ReviewType } from '@/app/types/review/ReviewType';

interface ReviewCardProps {
  review: ReviewType;
  isEditable?: boolean;
  handleEdit?: () => void;
  handleDelete?: () => void;
}

export default function ReviewCard({
  review,
  isEditable,
  handleEdit,
  handleDelete,
}: ReviewCardProps) {
  return (
    <Card className='h-fit'>
      <ReviewCardHeader
        review={review}
        isEditable={isEditable}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ReviewCardBody review={review} />
    </Card>
  );
}
