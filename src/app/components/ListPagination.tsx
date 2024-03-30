import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/pagination';
import { setPage } from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

interface ListPagination {
  totalPages: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export default function ListPagination({
  totalPages,
  hasNextPage,
  hasPreviousPage,
}: ListPagination) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination);

  const handleNextPage = () => {
    if (totalPages === page.pageIndex || !hasNextPage) return;
    dispatch(
      setPage({
        pageIndex: page.pageIndex + 1,
        pageSize: page.pageSize,
      })
    );
  };

  const handlePreviousPage = () => {
    if (page.pageIndex === 0 || !hasPreviousPage) return;
    dispatch(
      setPage({
        pageIndex: page.pageIndex - 1,
        pageSize: page.pageSize,
      })
    );
  };

  return (
    <Pagination className='mt-10'>
      <PaginationContent className='rounded-xl bg-gray-200 p-2'>
        <PaginationItem
          className={`${!hasPreviousPage && 'pointer-events-none text-gray-400'}`}
        >
          <PaginationPrevious
            className='cursor-pointer select-none'
            onClick={handlePreviousPage}
          />
        </PaginationItem>
        {Array.from({ length: totalPages || 1 }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className='cursor-pointer select-none'
              onClick={() =>
                dispatch(
                  setPage({
                    pageIndex: index + 1,
                    pageSize: page.pageSize,
                  })
                )
              }
              isActive={index + 1 === page.pageIndex}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          className={`${!hasNextPage && 'pointer-events-none text-gray-400'}`}
        >
          <PaginationNext
            className='cursor-pointer select-none'
            onClick={handleNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
