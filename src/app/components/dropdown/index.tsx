import { ReactNode } from 'react';

import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { Separator } from '@/app/components/ui/separator';
import { DropdownContentFields } from '@/app/types/dropdown/DropdownContentFields';

interface DropdownProps {
  triggerText: ReactNode;
  contentLabel: string;
  contentFields: DropdownContentFields[];
  additionalContent?: DropdownContentFields[];
  children?: ReactNode;
}

export default function Dropdown({
  triggerText,
  contentFields,
  contentLabel,
  additionalContent,
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerText}</DropdownMenuTrigger>
      <DropdownMenuContent className='mr-5' sideOffset={7}>
        <DropdownMenuArrow fill='white' className='mr-5' />
        <DropdownMenuLabel>{contentLabel}</DropdownMenuLabel>{' '}
        <DropdownMenuSeparator />
        {contentFields.map((field) => (
          <DropdownMenuItem className='cursor-pointer' key={field.value}>
            {field.label}
          </DropdownMenuItem>
        ))}
        {contentFields.length !== 0 && <Separator />}
        {additionalContent &&
          additionalContent.map((field) => (
            <DropdownMenuItem className='cursor-pointer' key={field.value}>
              {field.label}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
