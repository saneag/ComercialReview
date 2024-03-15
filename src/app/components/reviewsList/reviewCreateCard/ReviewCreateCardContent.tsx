import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import z from 'zod';

import TextareaFormField from '@/app/components/formFields/TextareaFormField';
import BusinessGradeSelect from '@/app/components/reviewsList/reviewCreateCard/BusinessGradeSelect';
import { Button } from '@/app/components/ui/button';
import { CardContent } from '@/app/components/ui/card';
import { Form } from '@/app/components/ui/form';
import { reviewCreateFormSchema } from '@/app/utils/formValidations/reviewCreateFormSchema';

export default function ReviewCreateCardContent() {
  const form = useForm({
    defaultValues: {
      grade: 0,
      reviewText: '',
    },
    mode: 'onChange',
    resolver: zodResolver(reviewCreateFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof reviewCreateFormSchema>) => {
    console.log(data);
  };

  return (
    <CardContent>
      <FormProvider {...form}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col'
          >
            <div className='flex justify-end'>
              <BusinessGradeSelect isDisabled={false} />
            </div>
            <TextareaFormField
              label='reviewText'
              displayLabel='Write a review'
              isDisabled={false}
              isRequired
              textAreaClassName='nm-flat-white-sm'
            />
            <div className='mt-3 flex flex-col gap-2'>
              <span>Do you recommend this business?</span>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <Button className='nm-flat-green-500-sm hover:nm-flat-green-600-sm'>
                    <ThumbsUp />
                  </Button>
                  <Button className='nm-flat-red-500-sm hover:nm-flat-red-600-sm'>
                    <ThumbsDown />
                  </Button>
                </div>
                <Button className='bg-gradient-to-tr from-purple-500/70 to-blue-500/70 text-white brightness-125'>
                  Post review
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </FormProvider>
    </CardContent>
  );
}
