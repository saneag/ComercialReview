import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import z from 'zod';

import TextareaFormField from '@/app/components/formFields/TextareaFormField';
import BusinessGradeSelect from '@/app/components/reviewsList/personalReviewCard/BusinessGradeSelect';
import PersonalReviewCardActionButtons from '@/app/components/reviewsList/personalReviewCard/PersonalReviewCardActionButtons';
import { CardContent } from '@/app/components/ui/card';
import { Form } from '@/app/components/ui/form';
import {
  useCreateReviewMutation,
  useUpdateReviewMutation,
} from '@/app/redux/features/reviewApi/reviewApi';
import { useAppSelector } from '@/app/redux/store';
import { LikeType } from '@/app/types/LikeType';
import { ReviewCreateType, ReviewType } from '@/app/types/review/ReviewType';
import { reviewCreateFormSchema } from '@/app/utils/formValidations/reviewCreateFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

interface PersonalReviewCardContentProps {
  isEdit?: boolean;
  handleEdit?: () => void;
  review?: ReviewType;
}

export default function PersonalReviewCardContent({
  isEdit,
  handleEdit,
  review,
}: PersonalReviewCardContentProps) {
  const { businessId } = useParams();
  const user = useAppSelector((state) => state.user.user);

  const [
    createReview,
    { isLoading: isCreateLoading, isSuccess: isCreateSuccess },
  ] = useCreateReviewMutation();

  const [
    updateReview,
    { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateReviewMutation();

  const form = useForm<ReviewCreateType>({
    defaultValues: {
      grade: 0,
      reviewText: '',
      like: LikeType.NONE,
    },
    mode: 'onChange',
    resolver: zodResolver(reviewCreateFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof reviewCreateFormSchema>) => {
    try {
      if (isEdit) {
        await updateReview({
          businessId: Number(businessId),
          review: {
            ...data,
          },
        });
      } else {
        await createReview({
          businessId: Number(businessId),
          review: {
            ...data,
          },
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (isCreateSuccess || isUpdateSuccess) {
      showToastSuccess('Review saved successfully');
      form.reset();
      if (handleEdit) {
        handleEdit();
      }
    }
  }, [isCreateSuccess, form, isUpdateSuccess, handleEdit, user, businessId]);

  useEffect(() => {
    if (review) {
      form.reset({
        grade: review.grade,
        reviewText: review.reviewText,
        like: review.like,
      });
    }
  }, [form, review]);

  return (
    <CardContent>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2'
          >
            <div className='flex justify-end'>
              <BusinessGradeSelect
                isDisabled={isCreateLoading || isUpdateLoading}
              />
            </div>
            <TextareaFormField
              label='reviewText'
              displayLabel='Write a review'
              isDisabled={isCreateLoading || isUpdateLoading}
              isRequired
              textAreaClassName='nm-flat-white-sm'
            />
            <PersonalReviewCardActionButtons
              isDisabled={isCreateLoading || isUpdateLoading}
              isEdit={isEdit}
              handleEdit={handleEdit}
            />
          </form>
        </Form>
      </FormProvider>
    </CardContent>
  );
}
