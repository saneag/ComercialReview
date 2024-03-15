import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Star } from 'lucide-react';

import RequiredFieldStar from '@/app/components/RequiredFieldStar';

interface BusinessGradeSelectProps {
  isDisabled: boolean;
}

export default function BusinessGradeSelect({
  isDisabled,
}: BusinessGradeSelectProps) {
  const form = useFormContext();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [mouseOverGrade, setMouseOverGrade] = useState(0);

  const handleStarClick = (grade: number) => {
    if (!isDisabled) {
      form.setValue('grade', grade);
    }
  };

  const handleMouseOver = (grade: number) => {
    if (!isDisabled) {
      setIsMouseOver(true);
      setMouseOverGrade(grade);
    }
  };

  const handleMouseLeave = () => {
    if (!isDisabled) {
      setIsMouseOver(false);
      setMouseOverGrade(0);
    }
  };

  const shouldFillStar = (index: number) => {
    if (isMouseOver) {
      return mouseOverGrade > index;
    }
    return form.watch('grade') > index;
  };

  return (
    <div className='flex items-center gap-3'>
      <span>
        Rating <RequiredFieldStar />
      </span>
      <div className='flex' onMouseLeave={handleMouseLeave}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            onMouseEnter={() => handleMouseOver(index + 1)}
            className='cursor-pointer text-yellow-500'
            fill={shouldFillStar(index) ? 'currentColor' : 'none'}
            onClick={() => handleStarClick(index + 1)}
            size={30}
          />
        ))}
      </div>
    </div>
  );
}
