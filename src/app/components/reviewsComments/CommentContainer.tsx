import { UserRound } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import { Badge } from '@/app/components/ui/badge';
import { CommentType } from '@/app/types/comment/CommentType';

interface CommentContainerProps {
  comment: CommentType;
}

export default function CommentContainer({ comment }: CommentContainerProps) {
  return (
    <div key={comment.id} className='flex flex-col'>
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
      <span className='pl-2'>{comment.text}</span>
    </div>
  );
}
