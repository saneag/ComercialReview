import FilterAccordionItem from '@/app/components/filters/filtersAccordion/filterAccordionItems';
import { Accordion } from '@/app/components/ui/accordion';
import { FilterAccordionItemType } from '@/app/types/filter/FilterAccordionItemType';

interface FiltersAccordionProps {
  filterAccordionItems: FilterAccordionItemType[];
}

export default function FiltersAccordion({
  filterAccordionItems,
}: FiltersAccordionProps) {
  return (
    <Accordion type='single' collapsible className='space-y-2'>
      {filterAccordionItems.map((filterAccordionItems, index) => (
        <FilterAccordionItem key={index} {...filterAccordionItems} />
      ))}
    </Accordion>
  );
}
