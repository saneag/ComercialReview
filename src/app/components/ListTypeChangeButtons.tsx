import { Grid2X2, Rows3 } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { ListType } from '@/app/types/ListType';

interface ListTypeChangeButtonsProps {
  setListType: (listType: ListType) => void;
}

export default function ListTypeChangeButtons({
  setListType,
}: ListTypeChangeButtonsProps) {
  return (
    <div className='flex items-center justify-end gap-3'>
      <p>Display Type</p>
      <Button
        variant='ghost'
        size='icon'
        className='nm-flat-purple-400-sm hover:nm-flat-purple-500-sm'
        onClick={() => setListType(ListType.Grid)}
      >
        <Grid2X2 color='white' />
      </Button>
      <Button
        variant='ghost'
        size='icon'
        className='nm-flat-purple-400-sm hover:nm-flat-purple-500-sm'
        onClick={() => setListType(ListType.List)}
      >
        <Rows3 color='white' />
      </Button>
    </div>
  );
}
