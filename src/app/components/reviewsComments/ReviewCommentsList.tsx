import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import CommentContainer from '@/app/components/reviewsComments/CommentContainer';
import { Button } from '@/app/components/ui/button';
import { apiSlice } from '@/app/redux/features/baseQuery';
import { useGetCommentsQuery } from '@/app/redux/features/commentApi/commentApi';
import { useAppDispatch } from '@/app/redux/store';
import { PaginationType } from '@/app/types/PaginationType';
import { CommentSortByEnum, SortDirectionEnum } from '@/app/types/SortType';
import { showToastError } from '@/app/utils/showToastMessage';

interface ReviewCommentsListProps {
  reviewAuthorId: number;
}

export default function ReviewCommentsList({
  reviewAuthorId,
}: ReviewCommentsListProps) {
  const dispatch = useAppDispatch();
  const { businessId } = useParams();

  const [page, setPage] = useState<PaginationType>({
    pageIndex: 1,
    pageSize: 3,
  });

  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommentsQuery({
    businessId: Number(businessId),
    reviewAuthorId,
    pageNumber: page.pageIndex,
    pageSize: page.pageSize,
    sortBy: CommentSortByEnum.CreatedDate,
    sortDirection: SortDirectionEnum.Descending,
  });

  useEffect(() => {
    if (isError) {
      showToastError('Error fetching comments');
    }
  }, [isError]);

  useEffect(() => {
    return () => {
      setPage({
        pageIndex: 1,
        pageSize: 3,
      });
      dispatch(apiSlice.util.resetApiState());
    };
  }, [dispatch]);

  const handleShowMore = () => {
    setPage((prev) => ({
      ...prev,
      pageSize: prev.pageSize + 3,
    }));
  };

  if (comments?.totalCount === 0) {
    return null;
  }

  return (
    <div className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex max-h-[300px] w-full flex-col gap-5 overflow-y-auto rounded-xl p-3 shadow-lg-inner scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-slate-400'>
      {comments?.items?.map((comment) => (
        <CommentContainer key={comment.id} comment={comment} />
      ))}

      {comments?.hasNext && (
        <Button onClick={handleShowMore} variant='link'>
          Load More
        </Button>
      )}
    </div>
  );
}
