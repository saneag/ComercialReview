import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';
import { Card, CardContent } from '@/app/components/ui/card';
import { FilterAccordionItemType } from '@/app/types/FilterAccordionItemType';

interface AccordionItemProps extends FilterAccordionItemType {}

export default function FilterAccordionItem({
  filterValue,
  triggerLabel,
  children,
}: AccordionItemProps) {
  return (
    <AccordionItem value={filterValue} className='space-y-2 border-0'>
      <AccordionTrigger className='rounded-xl px-5 py-3 nm-flat-white hover:no-underline'>
        {triggerLabel}
      </AccordionTrigger>
      <AccordionContent className='px-2'>
        <Card className='nm-flat-white'>
          <CardContent>{children}</CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
}
