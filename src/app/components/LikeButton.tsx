import { Heart } from 'lucide-react';

interface LikeButtonProps {
  currentUserLiked: boolean;
  likesCount: number;
  handleHeartClick: () => void;
}

export default function LikeButton({
  currentUserLiked,
  handleHeartClick,
  likesCount,
}: LikeButtonProps) {
  return (
    <div className='flex items-center gap-2 pl-2'>
      <Heart
        onClick={handleHeartClick}
        className='cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80'
        fill={currentUserLiked ? '#ff0000' : '#fff'}
        stroke={currentUserLiked ? '#ff0000' : '#000'}
        size={20}
      />
      <span className='text-gray-500'>{likesCount || 0}</span>
    </div>
  );
}
