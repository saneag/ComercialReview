import ReviewCommentForm from '@/app/components/reviewsComments/ReviewCommentForm';
import { useUpdateCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { CommentUpdateType } from '@/app/types/comment/CommentType';
import { commentUpdateFormSchema } from '@/app/utils/formValidations/commentFormSchema';

interface UpdateCommentProps {
  id: number;
  text: string;
  isUpdatingComment: boolean;
  setIsUpdatingComment: (value: boolean) => void;
}

export default function UpdateComment({
  id,
  text,
  isUpdatingComment,
  setIsUpdatingComment,
}: UpdateCommentProps) {
  const [updateComment, { isLoading }] = useUpdateCommentMutation();

  const defaultValues: CommentUpdateType = {
    id,
    text,
  };

  const handleSubmit = async (data: any) => {
    try {
      updateComment({
        id,
        text: data.text,
      });
      setIsUpdatingComment(false);
    } catch (error) {}
  };

  return (
    <ReviewCommentForm
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      resolver={commentUpdateFormSchema as any}
      buttonLabel='Update Comment'
      buttonClassName='bg-blue-500 text-white hover:bg-blue-600'
      isLoading={isLoading}
      isAddingComment={isUpdatingComment}
      setIsAddingComment={setIsUpdatingComment}
    />
  );
}
