import { useEffect } from 'react';

import { useParams } from 'next/navigation';

import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import ReviewCreateCardContent from '@/app/components/reviewsList/reviewCreateCard/ReviewCreateCardContent';
import ReviewCreateCardHeader from '@/app/components/reviewsList/reviewCreateCard/ReviewCreateCardHeader';
import { Card } from '@/app/components/ui/card';
import { useLazyGetReviewByUserAndBusinessIdQuery } from '@/app/redux/features/reviewApi/reviewApi';
import { useAppSelector } from '@/app/redux/store';

export default function ReviewCreateCard() {
  const { businessId } = useParams();

  const user = useAppSelector((state) => state.user.user);

  const [trigger, { data, isSuccess }] =
    useLazyGetReviewByUserAndBusinessIdQuery();

  useEffect(() => {
    if (user) {
      trigger({ businessId: Number(businessId), userId: user.userId });
    }
  }, [businessId, user, trigger]);

  if (!user) {
    return null;
  }

  return (
    <>
      {isSuccess ? (
        data && (
          <div className='space-y-2'>
            <p className='pl-2 text-2xl'>Your review</p>
            <ReviewCard review={data} />
          </div>
        )
      ) : (
        <Card>
          <ReviewCreateCardHeader />
          <ReviewCreateCardContent />
        </Card>
      )}
    </>
  );
}
