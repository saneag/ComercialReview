import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/pagination';
import { PaginationType } from '@/app/types/PaginationType';

interface ListPagination {
  page: PaginationType;
  setPage: React.Dispatch<React.SetStateAction<PaginationType>>;
  totalPages: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}

export default function ListPagination({
  page,
  setPage,
  totalPages,
  hasNextPage,
  hasPreviousPage,
}: ListPagination) {
  const handleNextPage = () => {
    if (totalPages === page.pageIndex || !hasNextPage) return;
    setPage((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }));
  };

  const handlePreviousPage = () => {
    if (page.pageIndex === 0 || !hasPreviousPage) return;
    setPage((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }));
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
                setPage({ pageIndex: index + 1, pageSize: page.pageSize })
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
