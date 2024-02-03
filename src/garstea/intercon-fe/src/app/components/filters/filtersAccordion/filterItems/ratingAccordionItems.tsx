'use client';

import { Star } from 'lucide-react';

import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { useAppDispatch } from '@/app/redux/store';
import { RatingFilterType } from '@/app/types/filter/EntityFilterType';

interface RatingAccordionItemsProps {
  setFilter: RatingFilterType;
}

export default function RatingAccordionItems({
  setFilter,
}: RatingAccordionItemsProps) {
  const dispatch = useAppDispatch();

  const ratings = [
    { value: 5, label: '5' },
    { value: 4, label: '4' },
    { value: 3, label: '3' },
    { value: 2, label: '2' },
    { value: 1, label: '1' },
  ];

  const handleCheckboxChange = (ratingValue: number) => {
    dispatch(setFilter(ratingValue));
  };

  return (
    <div className='flex flex-col space-y-3 pt-5'>
      {ratings.map((rating) => (
        <div className='flex items-center space-x-2' key={rating.value}>
          <Checkbox
            id={String(rating.value)}
            onCheckedChange={() => handleCheckboxChange(rating.value)}
          />
          <Label
            htmlFor={String(rating.value)}
            className='flex items-center space-x-2'
          >
            <span>{rating.label}</span>
            <span className='flex space-x-1'>
              {Array.from({ length: rating.value }, (_, index) => (
                <Star
                  key={rating.value + index}
                  size={10}
                  fill='#ffd250'
                  color='#ffd250'
                />
              ))}
            </span>
          </Label>
        </div>
      ))}
    </div>
  );
}
