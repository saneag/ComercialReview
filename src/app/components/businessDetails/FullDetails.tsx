import { useParams } from 'next/navigation';

import { ScrollArea } from '@/app/components/ui/scroll-area';
import { Separator } from '@/app/components/ui/separator';
import { useGetBusinessQuery } from '@/app/redux/features/businessApi/businessApi';

export default function FullDetails() {
  const { businessId } = useParams();

  const { data: business, isLoading } = useGetBusinessQuery(Number(businessId));

  return (
    business && (
      <div className='w-full'>
        <p className='text-2xl font-semibold'>About {business.title}</p>
        {business.fullDescription ? (
          <>
            <Separator className='mb-2 bg-gray-300' />
            <ScrollArea className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-fit max-h-[20rem] overflow-y-auto pl-3 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400'>
              <div
                className='pr-4'
                dangerouslySetInnerHTML={{ __html: business.fullDescription }}
              />
            </ScrollArea>
            <Separator className='mt-2 bg-gray-300' />
          </>
        ) : (
          <p className='text-xl text-gray-400'>No description</p>
        )}
      </div>
    )
  );
}
