import { useParams } from 'next/navigation';

import ReviewCommentForm from '@/app/components/reviewsComments/ReviewCommentForm';
import { useCreateCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { CommentCreateType } from '@/app/types/comment/CommentType';
import { CommentCRUDFieldType } from '@/app/types/comment/FormFieldsType';
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

  const formFields: CommentCRUDFieldType[] = [
    {
      label: 'text',
      displayLabel: 'Comment',
    },
  ];


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
      formFields={formFields}
      buttonLabel='Add Comment'
      buttonClassName='bg-blue-500 text-white'
    />
  );
}
