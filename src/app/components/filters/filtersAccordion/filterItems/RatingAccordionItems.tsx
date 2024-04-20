'use client';

import { CheckedState } from '@radix-ui/react-checkbox';

import RatingStars from '@/app/components/RatingStars';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { useAppDispatch } from '@/app/redux/store';
import { ratingFilterArray } from '@/app/types/enums/RatingFilterEnum';
import { SetRatingFilterType } from '@/app/types/filter/EntityFilterType';

interface RatingAccordionItemsProps {
  ratingFilter: number[];
  setFilter: SetRatingFilterType;
  isRangeFilter?: boolean;
}

export default function RatingAccordionItems({
  ratingFilter,
  setFilter,
  isRangeFilter = false,
}: RatingAccordionItemsProps) {
  const dispatch = useAppDispatch();

  const handleCheckboxChecked = (ratingValue: number): CheckedState => {
    return ratingFilter.includes(ratingValue);
  };

  const handleCheckboxChange = (ratingValue: number) => {
    dispatch(setFilter(ratingValue));
  };

  return (
    <div className='flex flex-col space-y-3 pt-5'>
      {ratingFilterArray.map((rating) => (
        <div className='flex items-center space-x-2' key={rating.value}>
          <Checkbox
            id={String(rating.value)}
            onCheckedChange={() => handleCheckboxChange(rating.value)}
            checked={handleCheckboxChecked(rating.value)}
            className='from-purple-500/70 to-blue-500/70 
            [&[data-state=checked]]:bg-gradient-to-br'
          />
          <Label
            htmlFor={String(rating.value)}
            className='flex items-center space-x-2'
          >
            <span>
              {rating.label}{' '}
              {isRangeFilter && rating.value !== 0 && rating.value !== 5 && '+'}
            </span>
            <span className='flex space-x-1'>
              <RatingStars starsCount={rating.value} />
            </span>
          </Label>
        </div>
      ))}
    </div>
  );
}
