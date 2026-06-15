import { useSelector } from 'react-redux';
import { selectTotalPages } from '@/features/transactions/state/selectors';

const Pagination = ({ page, onPageChange }) => {
  const totalPages = useSelector(selectTotalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="my-6 hidden flex-col items-center gap-3 md:flex">
      {page < totalPages && (
        <button onClick={() => onPageChange(page + 1, true)}>
          Показати ще
        </button>
      )}
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => onPageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
        >
          Назад
        </button>
        <span>
          Сторінка {page} з {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Pagination;
