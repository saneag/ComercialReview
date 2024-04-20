import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/app/components/ui/pagination';
import { setPage } from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

interface EndPage {
  totalPages: number;
}

export default function EndPage({ totalPages }: EndPage) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination);

  return (
    <div className='flex max-md:hidden'>
      <PaginationItem
        className={`max-md:hidden ${page.pageIndex >= totalPages - 1 ? 'hidden' : ''}`}
      >
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          className='cursor-pointer select-none'
          onClick={() =>
            dispatch(
              setPage({
                pageIndex: totalPages,
                pageSize: page.pageSize,
              })
            )
          }
          isActive={totalPages === page.pageIndex}
        >
          {totalPages}
        </PaginationLink>
      </PaginationItem>
    </div>
  );
}
