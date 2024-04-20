import { ArrowDownNarrowWide, ArrowUpNarrowWide } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { useAppDispatch } from '@/app/redux/store';
import {
  FilterValueType,
  SetSortFilterType,
} from '@/app/types/filter/EntityFilterType';
import { SortDirectionEnum, SortType } from '@/app/types/SortType';

interface SortDropdownProps<T> extends SortType<T> {
  sortOptions: FilterValueType[];
  sortBy: T;
  setSortFilter: SetSortFilterType | any;
}

export default function SortDropdown<T>({
  sortBy,
  sortDirection,
  sortOptions,
  setSortFilter,
}: SortDropdownProps<T>) {
  const dispatch = useAppDispatch();

  const handleSelectChange = (value: string) => {
    dispatch(setSortFilter({ sortBy: Number(value), sortDirection }));
  };

  const handleButtonClick = () => {
    dispatch(
      setSortFilter({
        sortBy,
        sortDirection:
          sortDirection === SortDirectionEnum.Ascending
            ? SortDirectionEnum.Descending
            : SortDirectionEnum.Ascending,
      })
    );
  };

  return (
    <div className='flex items-center gap-2'>
      <p className='whitespace-nowrap'>Sort By: </p>
      <Select
        value={String(sortBy)}
        onValueChange={(value) => handleSelectChange(value)}
      >
        <SelectTrigger className='gap-1'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value.toString()}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button size='icon' className='p-2' onClick={handleButtonClick}>
        {sortDirection === SortDirectionEnum.Ascending ? (
          <ArrowUpNarrowWide />
        ) : (
          <ArrowDownNarrowWide />
        )}
      </Button>
    </div>
  );
}
