import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  starsCount: number;
  starSize?: number;
}

export default function RatingStars({
  starsCount,
  starSize = 10,
}: RatingStarsProps) {
  const isFloat = starsCount % 1 !== 0;

  if (isFloat) {
    return (
      <>
        {Array.from({ length: starsCount }, (_, index) => (
          <Star
            key={starsCount + index}
            size={starSize}
            fill='#ffd250'
            color='#ffd250'
          />
        ))}
        <div className='relative'>
          <Star size={starSize} color='#ffd250' className='absolute' />
          <StarHalf size={starSize} fill='#ffd250' color='#ffd250' />
        </div>
        {Array.from({ length: 5 - Math.ceil(starsCount) }, (_, index) => (
          <Star
            key={starsCount + index + 5}
            size={starSize}
            fill='none'
            color='#ffd250'
          />
        ))}
      </>
    );
  }

  return (
    <>
      {Array.from({ length: starsCount }, (_, index) => (
        <Star
          key={starsCount + index}
          size={starSize}
          fill='#ffd250'
          color='#ffd250'
        />
      ))}
      {Array.from({ length: 5 - Math.ceil(starsCount) }, (_, index) => (
        <Star
          key={starsCount + index + 5}
          size={starSize}
          fill='none'
          color='#ffd250'
        />
      ))}
    </>
  );
}
