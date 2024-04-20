import { isMobile } from 'react-device-detect';

import { PaginationItem, PaginationLink } from '@/app/components/ui/pagination';
import { setPage } from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

interface MiddlePages {
  totalPages: number;
}

export default function MiddlePages({ totalPages }: MiddlePages) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination);

  const pagesToShow = isMobile ? 1 : 3;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  const startPage = Math.max(1, page.pageIndex - halfPagesToShow);
  const endPage = Math.min(totalPages - 1, startPage + pagesToShow - 1);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => i + startPage
  );

  return pages.map((currentPage) => (
    <PaginationItem key={currentPage}>
      <PaginationLink
        className='cursor-pointer select-none'
        onClick={() =>
          dispatch(
            setPage({
              pageIndex: currentPage,
              pageSize: page.pageSize,
            })
          )
        }
        isActive={currentPage === page.pageIndex}
      >
        {currentPage}
      </PaginationLink>
    </PaginationItem>
  ));
}
