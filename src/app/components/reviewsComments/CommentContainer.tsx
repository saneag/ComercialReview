import { useState } from 'react';

import { MoreVertical, UserRound } from 'lucide-react';

import UpdateComment from '@/app/components/reviewsComments/UpdateComment';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { useDeleteCommentMutation } from '@/app/redux/features/commentApi/commentApi';
import { CommentType } from '@/app/types/comment/CommentType';

interface CommentContainerProps {
  comment: CommentType;
}

export default function CommentContainer({ comment }: CommentContainerProps) {
  const [isUpdatingComment, setIsUpdatingComment] = useState(false);

  const [deleteComment] = useDeleteCommentMutation();

  const handleCommentEdit = () => {
    setIsUpdatingComment(!isUpdatingComment);
  };

  const handleCommentDelete = () => {
    deleteComment({
      id: comment.id,
    });
  };

  return (
    <div key={comment.id} className='flex flex-col'>
      <div className='flex justify-between gap-4'>
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src={comment.author.avatarPath ?? ''} />
            <AvatarFallback>
              <UserRound />
            </AvatarFallback>
          </Avatar>
          {comment.isCommentOfBusinessOwner ? (
            <Badge className='w-fit bg-gray-500' title='Owner of the business'>
              {`${comment.author.firstName} ${comment.author.lastName}`} (Owner)
            </Badge>
          ) : (
            <span className='font-semibold'>{`${comment.author.firstName} ${comment.author.lastName}`}</span>
          )}
        </div>
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
      </div>
      {isUpdatingComment ? (
        <UpdateComment
          id={comment.id}
          text={comment.text}
          isUpdatingComment={isUpdatingComment}
          setIsUpdatingComment={setIsUpdatingComment}
        />
      ) : (
        <span className='pl-2 indent-2'>{comment.text}</span>
      )}
    </div>
  );
}