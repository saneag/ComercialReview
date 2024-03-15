import ReviewCreateCardContent from '@/app/components/reviewsList/reviewCreateCard/ReviewCreateCardContent';
import ReviewCreateCardHeader from '@/app/components/reviewsList/reviewCreateCard/ReviewCreateCardHeader';
import { Card } from '@/app/components/ui/card';

export default function ReviewCreateCard() {
  return (
    <Card>
      <ReviewCreateCardHeader />
      <ReviewCreateCardContent />
    </Card>
  );
}
