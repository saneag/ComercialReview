import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/app/components/ui/pagination';
import { setPage } from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

export default function FirstPage() {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination);

  return (
    <div
      className={`flex max-md:hidden ${page.pageIndex <= 2 ? 'hidden' : ''}`}
    >
      <PaginationItem>
        <PaginationLink
          onClick={() =>
            dispatch(
              setPage({
                pageIndex: 1,
                pageSize: page.pageSize,
              })
            )
          }
          isActive={page.pageIndex === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className='max-md:hidden'>
        <PaginationEllipsis />
      </PaginationItem>
    </div>
  );
}
