'use client';

import { format } from 'date-fns';

import { ScrollArea } from '@/app/components/ui/scroll-area';
import { useGetAppLogsQuery } from '@/app/redux/features/appLogsApi/appLogsApi';

export default function AppLogs() {
  const { data: logs, isLoading } = useGetAppLogsQuery({
    pageIndex: 1,
    pageSize: 100,
  });

  return (
    <div className='flex h-full items-center'>
      <div className='w-full rounded-2xl bg-[#23272E]'>
        <ScrollArea className='h-[90vh]'>
          <div className='space-y-3 p-6'>
            {logs?.items.map((log) => (
              <div className='flex gap-2 text-white' key={log.id}>
                <span
                  className={log.isSuccess ? 'text-green-400' : 'text-red-600'}
                >
                  ID: {log.id}
                </span>
                <div className='flex flex-col'>
                  <p>
                    Starting request {log.requestName},{' '}
                    {format(log.startTime, 'dd.MM.yyyy HH:mm:ss')}
                  </p>
                  <p>
                    Finished request {log.requestName}{' '}
                    {format(log.endTime, 'dd.MM.yyyy HH:mm:ss')}
                  </p>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
