import { X } from 'lucide-react';

import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/app/components/ui/card';
import { useAppDispatch } from '@/app/redux/store';
import { DisplayFilterType } from '@/app/types/filter/EntityFilterType';

interface FiltersDisplayProps {
  filters: DisplayFilterType[];
}

export default function FiltersDisplay({ filters }: FiltersDisplayProps) {
  const dispatch = useAppDispatch();

  return (
    <Card className='bg-gray-100 px-1'>
      <CardHeader className='px-6 pb-3 pt-5'>
        <span className='text-lg font-semibold'>Selected filters</span>
      </CardHeader>
      <CardContent>
        {filters.map((filter) => (
          <div key={filter.filterByLabel}>
            <p>{filter.filterByLabel}</p>
            <div className='my-2 flex flex-wrap gap-2'>
              {filter.filterValues.map((it) => (
                <Badge
                  key={it.value}
                  className='cursor-pointer space-x-1 bg-gradient-to-tr from-purple-500/70 to-blue-500/70 px-2'
                  onClick={() =>
                    dispatch(filter.removeOnClick(Number(it.value)))
                  }
                >
                  <X className='h-4 w-4' />
                  <span>{it.label}</span>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
