import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTransactions,
  selectIsTransactionsLoading,
  selectCurrentPage,
} from '@/features/transactions/state/selectors';
import AddTransactionDialog from '@/features/transactions/components/AddTransactionDialog';
import TransactionsList from '@/features/transactions/components/TransactionsList';
import Loader from '@/components/ui/Loader';
import EmptyState from '@/features/transactions/components/EmptyState';
import Pagination from '@/features/transactions/components/Pagination';
import { getTransactions } from '@/features/transactions/state/operations.js';

const DashboardPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const page = useSelector(selectCurrentPage);
  const isTransactionsLoading = useSelector(selectIsTransactionsLoading);
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  const handlePageChange = (targetPage, isAppending = false) => {
    dispatch(getTransactions({ page: targetPage, limit: 9, isAppending }));
  };

  if (isTransactionsLoading && transactions.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {transactions.length > 0 ? (
        <>
          <TransactionsList page={page} onPageChange={handlePageChange} />
          <Pagination onPageChange={handlePageChange} />
        </>
      ) : (
        !isTransactionsLoading && <EmptyState />
      )}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 container mx-auto">
        <div
          onClick={() => setIsDialogOpen(true)}
          className="bg-brand-green shadow-brand-green/50 pointer-events-auto absolute right-6 bottom-6 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-xl text-white shadow-lg transition-transform hover:scale-105"
        >
          <FaPlus />
        </div>
      </div>
      <AddTransactionDialog
        isOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default DashboardPage;
