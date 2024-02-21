'use client';

import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { useAppDispatch } from '@/app/redux/store';
import { categoryFilterArray } from '@/app/types/enums/CategoryFilterEnum';
import {
  CategoryFilterType,
  SetCategoryFilterType,
} from '@/app/types/filter/EntityFilterType';

interface CategoryAccordionItemsProps {
  categoryFilter: CategoryFilterType;
  setFilter: SetCategoryFilterType;
}

export default function CategoryAccordionItems({
  categoryFilter,
  setFilter,
}: CategoryAccordionItemsProps) {
  const dispatch = useAppDispatch();

  const handleCheckboxChecked = (categoryValue: number): boolean => {
    return categoryFilter.includes(categoryValue);
  };

  const handleCheckboxChange = (categoryValue: number) => {
    dispatch(setFilter(categoryValue));
  };

  return (
    <div className='flex flex-col space-y-3 pt-5'>
      {categoryFilterArray.map((category) => (
        <div className='flex items-center space-x-2' key={category.value}>
          <Checkbox
            id={String(category.value)}
            onCheckedChange={() => handleCheckboxChange(category.value)}
            checked={handleCheckboxChecked(category.value)}
            className='from-purple-500/70 to-blue-500/70 
            [&[data-state=checked]]:bg-gradient-to-br'
          />
          <Label
            htmlFor={String(category.value)}
            className='flex items-center space-x-2'
          >
            <span>{category.label}</span>
          </Label>
        </div>
      ))}
    </div>
  );
}
