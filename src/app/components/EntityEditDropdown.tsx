import { MoreVertical, Pen, Trash } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

interface EntityEditDropdownProps {
  handleEdit?: () => void;
  handleDelete?: () => void;
  changeOrder?: boolean;
}

export default function EntityEditDropdown({
  handleEdit,
  handleDelete,
  changeOrder,
}: EntityEditDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`flex min-w-fit gap-3 px-3 py-2 nm-flat-gray-100 ${changeOrder ? 'flex-row-reverse' : ''}`}
      >
        <Button
          className='max-h-10 max-w-10 bg-blue-600 hover:bg-blue-600/90'
          onClick={handleEdit}
        >
          <div>
            <Pen size={22} />
          </div>
        </Button>
        <Button
          className='max-h-10 max-w-10'
          variant='destructive'
          onClick={handleDelete}
        >
          <div>
            <Trash size={24} />
          </div>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
