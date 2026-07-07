import { useSelector } from 'react-redux';
import {
  selectCurrentPage,
  selectTotalPages,
} from '@/features/transactions/state/selectors';
import PaginationButton from '@/components/ui/PaginationButton';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Pagination = ({ onPageChange }) => {
  const page = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="my-6 hidden flex-col items-center gap-3 md:flex">
      {page < totalPages && (
        <PaginationButton onClick={() => onPageChange(page + 1, true)}>
          Показати ще
        </PaginationButton>
      )}
      <div className="flex items-center justify-center gap-5">
        <PaginationButton
          onClick={() => onPageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          <FaArrowLeft />
        </PaginationButton>
        <span className="text-brand-violet font-bold">
          Сторінка {page} з {totalPages}
        </span>
        <PaginationButton
          onClick={() => onPageChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
        >
          <FaArrowRight />
        </PaginationButton>
      </div>
    </div>
  );
};

export default Pagination;
