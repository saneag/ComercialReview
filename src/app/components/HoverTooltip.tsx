import { ReactNode } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip';

interface TooltipProps {
  triggerChildren: ReactNode;
  contentChildren: ReactNode;
}

export default function HoverTooltip({
  triggerChildren,
  contentChildren,
}: TooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger type='button'>{triggerChildren}</TooltipTrigger>
        <TooltipContent>{contentChildren}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
