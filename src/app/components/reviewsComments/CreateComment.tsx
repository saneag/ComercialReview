import { useParams } from 'next/navigation';

import ReviewCommentForm from '@/app/components/reviewsComments/ReviewCommentForm';
import { useCreateCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { CommentCreateType } from '@/app/types/comment/CommentType';
import { commentCreateFormSchema } from '@/app/utils/formValidations/commentFormSchema';

interface CreateCommentProps {
  reviewAuthorId: number;
}

export default function CreateComment({ reviewAuthorId }: CreateCommentProps) {
  const { businessId } = useParams();
  const [createComment, { isLoading }] = useCreateCommentMutation();

  const defaultValues: CommentCreateType = {
    businessId: Number(businessId),
    text: '',
    reviewAuthorId,
  };

  const handleSubmit = async (data: CommentCreateType) => {
    try {
      createComment(data);
    } catch (error) {}
  };

  return (
    <ReviewCommentForm
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      resolver={commentCreateFormSchema}
      buttonLabel='Comment'
      buttonClassName='bg-blue-500 text-white hover:bg-blue-600'
      isLoading={isLoading}
    />
  );
}
