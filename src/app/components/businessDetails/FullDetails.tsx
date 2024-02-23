import { useParams } from 'next/navigation';

import { ScrollArea } from '@/app/components/ui/scroll-area';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';

export default function FullDetails() {
  const { businessId } = useParams();

  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  return (
    business && (
      <div className='flex'>
        <div>
          <p className='text-2xl font-semibold'>About {business.title}</p>
          <ScrollArea className='h-full max-h-[300px]'>
            <div
              className='pr-4'
              dangerouslySetInnerHTML={{ __html: business.fullDescription }}
            />
          </ScrollArea>
        </div>
      </div>
    )
  );
}
