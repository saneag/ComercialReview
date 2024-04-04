import { Grid2X2, Rows3 } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { ListType } from '@/app/types/ListType';

interface ListTypeChangeButtonsProps {
  listType: ListType;
  setListType: (listType: ListType) => void;
}

export default function ListTypeChangeButtons({
  listType,
  setListType,
}: ListTypeChangeButtonsProps) {
  const listTypeButtons = [
    {
      type: ListType.List,
      icon: <Rows3 color='white' />,
      onClick: () => setListType(ListType.List),
    },
    {
      type: ListType.Grid,
      icon: <Grid2X2 color='white' />,
      onClick: () => setListType(ListType.Grid),
    },
  ];

  return (
    <div className='flex items-center justify-end gap-3 px-3'>
      <p>Display Type</p>
      {listTypeButtons.map((button, index) => (
        <Button
          key={index}
          variant='ghost'
          size='icon'
          className={`hover:nm-flat-purple-500-sm ${
            button.type === listType
              ? 'nm-flat-purple-500-sm'
              : 'nm-flat-purple-400-sm'
          }`}
          onClick={button.onClick}
        >
          {button.icon}
        </Button>
      ))}
    </div>
  );
}
