import { useState } from 'react';

import { formatDistance } from 'date-fns';
import { UserRound } from 'lucide-react';

import LikeButton from '@/app/components/LikeButton';
import CommentDropdownMenu from '@/app/components/reviewsComments/CommentDropdownMenu';
import UpdateComment from '@/app/components/reviewsComments/UpdateComment';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import {
  useLikeCommentMutation,
  useUnlikeCommentMutation,
} from '@/app/redux/features/commentApi/commentLikeApi';
import { CommentType } from '@/app/types/comment/CommentType';

interface CommentContainerProps {
  comment: CommentType;
}

export default function CommentContainer({ comment }: CommentContainerProps) {
  const [isUpdatingComment, setIsUpdatingComment] = useState(false);

  const [triggerLike] = useLikeCommentMutation();
  const [triggerUnlike] = useUnlikeCommentMutation();

  const handleHeartClick = () => {
    if (comment.currentUserLiked) {
      triggerUnlike({ commentId: comment.id });
    } else {
      triggerLike({ commentId: comment.id });
    }
  };

  return (
    <div key={comment.id} className='flex flex-col'>
      <div className='flex justify-between gap-4'>
        <div className='flex flex-wrap items-center gap-1'>
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
          <span className='text-xs text-gray-500 max-xs:indent-3'>
            {formatDistance(comment.updatedDate, new Date(), {
              addSuffix: true,
            })}
          </span>
        </div>
        <CommentDropdownMenu
          isUpdatingComment={isUpdatingComment}
          setIsUpdatingComment={setIsUpdatingComment}
          commentId={comment.id}
          authorId={comment.author.id}
        />
      </div>
      {isUpdatingComment ? (
        <UpdateComment
          id={comment.id}
          text={comment.text}
          isUpdatingComment={isUpdatingComment}
          setIsUpdatingComment={setIsUpdatingComment}
        />
      ) : (
        <div className='pt-1'>
          <span className='pl-2 indent-2'>{comment.text}</span>
          <div className='flex justify-end pr-2'>
            <LikeButton
              currentUserLiked={comment.currentUserLiked}
              handleHeartClick={handleHeartClick}
              likesCount={comment.likesCount}
            />
          </div>
        </div>
      )}
    </div>
  );
}
