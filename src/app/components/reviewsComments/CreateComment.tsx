import { useState } from 'react';

import { useParams } from 'next/navigation';

import ReviewCommentForm from '@/app/components/reviewsComments/ReviewCommentForm';
import { Button } from '@/app/components/ui/button';
import { useCreateCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { useAppSelector } from '@/app/redux/store';
import { CommentCreateType } from '@/app/types/comment/CommentType';
import { commentCreateFormSchema } from '@/app/utils/formValidations/commentFormSchema';

interface CreateCommentProps {
  reviewAuthorId: number;
}

export default function CreateComment({ reviewAuthorId }: CreateCommentProps) {
  const { businessId } = useParams();
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const isAuth = useAppSelector((state) => state.user.isAuth);

  const defaultValues: CommentCreateType = {
    businessId: Number(businessId),
    text: '',
    reviewAuthorId,
  };

  const handleSubmit = async (data: CommentCreateType) => {
    try {
      createComment(data);
      setIsAddingComment(false);
    } catch (error) {}
  };

  if (!isAuth) return null;

  return (
    <>
      {isAddingComment ? (
        <ReviewCommentForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          resolver={commentCreateFormSchema}
          buttonLabel='Comment'
          buttonClassName='bg-blue-500 text-white hover:bg-blue-600'
          isLoading={isLoading}
          isAddingComment={isAddingComment}
          setIsAddingComment={setIsAddingComment}
        />
      ) : (
        <Button
          className='flex self-end text-black nm-flat-white hover:nm-flat-white-sm'
          onClick={() => setIsAddingComment(true)}
        >
          Add Comment
        </Button>
      )}
    </>
  );
}
