import { useState, useEffect } from 'react';
import emptyStateImage from '@/assets/images/empty-state.png';
import { FaPlus } from 'react-icons/fa6';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';
import {
  selectTransactions,
  selectIsTransactionsLoading,
} from '@/features/transactions/state/selectors';
import AddTransactionDialog from '@/features/transactions/components/AddTransactionDialog';
import TransactionsList from '@/features/transactions/components/TransactionsList';
import Loader from '@/components/ui/Loader';
import { getTransactions } from '@/features/transactions/state/operations.js';

const DashboardPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const userName = useSelector(selectUserName);
  const isTransactionsLoading = useSelector(selectIsTransactionsLoading);
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions({ page, limit: 3 }));
  }, [dispatch, page]);

  if (isTransactionsLoading && transactions.length === 0) {
    return <Loader />;
  }

  return (
    <>
      {transactions.length > 0 ? (
        <TransactionsList page={page} setPage={setPage} />
      ) : (
        !isTransactionsLoading && (
          <div className="flex items-center gap-4">
            <img
              className="h-auto w-15"
              src={emptyStateImage}
              alt="No transactions"
            />
            <p>
              Вітання, <span className="font-bold">{userName}</span>! У Вас ще
              немає транзакцій. Додайте першу, щоб почати облік!
            </p>
          </div>
        )
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
