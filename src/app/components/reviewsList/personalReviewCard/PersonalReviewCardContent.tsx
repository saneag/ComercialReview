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
import { useCreateReviewMutation } from '@/app/redux/features/reviewApi/reviewApi';
import { useAppSelector } from '@/app/redux/store';
import { reviewCreateFormSchema } from '@/app/utils/formValidations/reviewCreateFormSchema';
import { showToastSuccess } from '@/app/utils/showToastMessage';

export default function PersonalReviewCardContent() {
  const { businessId } = useParams();
  const [createReview, { isLoading, isSuccess }] = useCreateReviewMutation();
  const user = useAppSelector((state) => state.user.user);

  const form = useForm({
    defaultValues: {
      grade: 0,
      reviewText: '',
    },
    mode: 'onChange',
    resolver: zodResolver(reviewCreateFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof reviewCreateFormSchema>) => {
    try {
      await createReview({
        businessId: Number(businessId),
        review: {
          ...data,
          authorId: user?.userId,
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    if (isSuccess) {
      showToastSuccess('Review created successfully');
      form.reset();
    }
  }, [isSuccess, form]);

  return (
    <CardContent>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-2'
          >
            <div className='flex justify-end'>
              <BusinessGradeSelect isDisabled={isLoading} />
            </div>
            <TextareaFormField
              label='reviewText'
              displayLabel='Write a review'
              isDisabled={isLoading}
              isRequired
              textAreaClassName='nm-flat-white-sm'
            />
            <PersonalReviewCardActionButtons isDisabled={isLoading} />
          </form>
        </Form>
      </FormProvider>
    </CardContent>
  );
}
