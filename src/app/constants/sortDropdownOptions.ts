import { BusinessSortByEnum, ReviewSortByEnum } from '@/app/types/SortType';

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

export const reviewSortOptions = [
  {
    value: ReviewSortByEnum.UpdatedDate,
    label: 'Updated Date',
  },
  {
    value: ReviewSortByEnum.Grade,
    label: 'Grade',
  },
  {
    value: ReviewSortByEnum.Recommendation,
    label: 'Recommendation',
  },
];
