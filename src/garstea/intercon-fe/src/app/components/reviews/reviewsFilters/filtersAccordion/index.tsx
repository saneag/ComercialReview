import FilterAccordionItem from '@/app/components/reviews/reviewsFilters/filtersAccordion/filterAccordionItems';
import RatingAccordionItems from '@/app/components/reviews/reviewsFilters/filtersAccordion/filterAccordionItems/ratingAccordionItems';
import { Accordion } from '@/app/components/ui/accordion';

export default function FiltersAccordion() {
  return (
    <Accordion type='single' collapsible className='space-y-2'>
      <FilterAccordionItem filterValue='rating' triggerLabel='Rating'>
        <RatingAccordionItems />
      </FilterAccordionItem>
    </Accordion>
  );
}
