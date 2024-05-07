import { MoreVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { useDeleteCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { useAppSelector } from '@/app/redux/store';

interface CommentDropdownMenuProps {
  isUpdatingComment: boolean;
  setIsUpdatingComment: (isUpdatingComment: boolean) => void;
  commentId: number;
  authorId: number;
}

export default function CommentDropdownMenu({
  isUpdatingComment,
  setIsUpdatingComment,
  commentId,
  authorId,
}: CommentDropdownMenuProps) {
  const { user, isAuth } = useAppSelector((state) => state.user);

  const [deleteComment] = useDeleteCommentMutation();

  const handleCommentEdit = () => {
    setIsUpdatingComment(!isUpdatingComment);
  };

  const handleCommentDelete = () => {
    deleteComment({
      id: commentId,
    });
  };

  return (
    isAuth &&
    authorId === user?.id && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleCommentEdit}
            className='text-blue-500 hover:text-blue-600'
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={handleCommentDelete}
            className='text-red-500 hover:text-red-600'
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
