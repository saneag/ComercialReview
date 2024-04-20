import { isMobile } from 'react-device-detect';

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

  const pagesToShow = isMobile ? 1 : 2;

  return (
    <div className={`flex ${page.pageIndex <= pagesToShow ? 'hidden' : ''}`}>
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
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    </div>
  );
}
