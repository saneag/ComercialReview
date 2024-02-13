import { ReactNode } from 'react';

export interface FilterAccordionItemType {
  filterValue: string;
  triggerLabel: ReactNode;
  children: ReactNode;
}
