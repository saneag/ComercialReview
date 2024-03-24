import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import PersonalReviewCardContent from '@/app/components/reviewsList/personalReviewCard/PersonalReviewCardContent';
import PersonalReviewCardHeader from '@/app/components/reviewsList/personalReviewCard/PersonalReviewCardHeader';
import ReviewCard from '@/app/components/reviewsList/reviewCard/ReviewCard';
import { Card } from '@/app/components/ui/card';
import {
  useDeleteReviewMutation,
  useLazyGetReviewByUserAndBusinessIdQuery,
} from '@/app/redux/features/reviewApi/reviewApi';
import { useAppSelector } from '@/app/redux/store';

export default function PersonalReviewCard() {
  const { businessId } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const user = useAppSelector((state) => state.user.user);

  const [trigger, { data, isSuccess }] =
    useLazyGetReviewByUserAndBusinessIdQuery();

  const [deleteReview] = useDeleteReviewMutation();

  useEffect(() => {
    if (user) {
      trigger({ businessId: Number(businessId), id: user.id });
    }
  }, [businessId, user, trigger]);

  if (!user) {
    return null;
  }

  const handleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleDelete = () => {
    deleteReview({
      businessId: Number(businessId),
    });
  };

  if (isEdit) {
    return (
      <Card>
        <PersonalReviewCardHeader />
        <PersonalReviewCardContent
          isEdit={isEdit}
          handleEdit={handleEdit}
          review={data}
        />
      </Card>
    );
  }

  return (
    <>
      {isSuccess ? (
        data && (
          <div className='space-y-2'>
            <p className='pl-2 text-2xl'>Your review</p>
            <ReviewCard
              review={data}
              isEditable={!!data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        )
      ) : (
        <Card>
          <PersonalReviewCardHeader />
          <PersonalReviewCardContent />
        </Card>
      )}
    </>
  );
}
