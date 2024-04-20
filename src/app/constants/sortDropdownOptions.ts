import { BusinessSortByEnum } from '@/app/types/SortType';

export const businessSortOptions = [
  {
    value: BusinessSortByEnum.UpdatedDate,
    label: 'Updated Date',
  },
  {
    value: BusinessSortByEnum.Title,
    label: 'Title',
  },
  {
    value: BusinessSortByEnum.Category,
    label: 'Category',
  },
  {
    value: BusinessSortByEnum.Rating,
    label: 'Rating',
  },
];
