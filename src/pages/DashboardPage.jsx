import { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTransactions,
  selectIsTransactionsLoading,
} from '@/features/transactions/state/selectors';
import AddTransactionDialog from '@/features/transactions/components/AddTransactionDialog';
import TransactionsList from '@/features/transactions/components/TransactionsList';
import Loader from '@/components/ui/Loader';
import EmptyState from '@/features/transactions/components/EmptyState';
import Pagination from '@/features/transactions/components/Pagination';
import { getTransactions } from '@/features/transactions/state/operations.js';

const DashboardPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [page, setPage] = useState(1);

  const isTransactionsLoading = useSelector(selectIsTransactionsLoading);
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions({ page: 1, limit: 3, isAppending: false }));
  }, [dispatch]);

  const handlePageChange = (targetPage, isAppending = false) => {
    setPage(targetPage);
    dispatch(getTransactions({ page: targetPage, limit: 3, isAppending }));
  };

  if (isTransactionsLoading && transactions.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {transactions.length > 0 ? (
        <>
          <TransactionsList page={page} onPageChange={handlePageChange} />
          <Pagination page={page} onPageChange={handlePageChange} />
        </>
      ) : (
        !isTransactionsLoading && <EmptyState />
      )}

      <div
        onClick={() => setIsDialogOpen(true)}
        className="bg-brand-green shadow-brand-green/50 absolute right-0 bottom-0 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-xl text-white shadow-lg transition-transform hover:scale-105"
      >
        <FaPlus />
      </div>
      <AddTransactionDialog
        isOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default DashboardPage;
