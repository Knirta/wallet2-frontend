import { useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  selectTransactions,
  selectIsTransactionsLoading,
  selectTotalPages,
} from '@/features/transactions/state/selectors';
import TransactionCell from '@/features/transactions/components/TransactionCell';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import clsx from 'clsx';

const TransactionsList = ({ page, onPageChange }) => {
  const transactions = useSelector(selectTransactions);
  const isTransactionsLoading = useSelector(selectIsTransactionsLoading);
  const totalPages = useSelector(selectTotalPages);

  const observerRef = useRef(null);

  const lastElementRef = useCallback(
    node => {
      if (isTransactionsLoading) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        const isMobileSize = window.innerWidth < 768;

        if (entries[0].isIntersecting && page < totalPages && isMobileSize) {
          onPageChange(page + 1, true);
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isTransactionsLoading, page, totalPages, onPageChange],
  );

  return (
    <div className="w-full md:overflow-x-auto">
      <div className="w-full md:grid md:grid-cols-[1fr_0.4fr_1.5fr_2.5fr_1.5fr_1.5fr] md:items-center md:gap-x-4 xl:gap-x-6">
        <div className="hidden rounded-full bg-white px-5 py-4 font-bold md:col-span-6 md:grid md:grid-cols-[1fr_0.4fr_1.5fr_2.5fr_1.5fr_1.5fr] md:items-center md:gap-x-10 md:border-none">
          <div className="text-left">Дата</div>
          <div className="text-center">Тип</div>
          <div className="text-left">Категорія</div>
          <div className="text-left">Коментар</div>
          <div className="text-right">Сума</div>
          <div className="text-right">Баланс</div>
        </div>

        {transactions.map((transaction, index) => (
          <div
            key={transaction._id}
            className={clsx(
              'mb-2.5 flex flex-col rounded-md border-l-4 bg-white',
              transaction.type === 'income'
                ? 'border-brand-green'
                : 'border-brand-red',
              'md:contents',
            )}
          >
            <TransactionCell
              title="Дата"
              value={new Date(transaction.date).toLocaleDateString('uk-UA')}
              isFirst={true}
            />
            <TransactionCell
              title="Тип"
              value={transaction.type === 'income' ? <FaPlus /> : <FaMinus />}
              valueStyle="flex items-center justify-end md:justify-center"
            />
            <TransactionCell
              title="Категорія"
              value={transaction.category.name}
              valueStyle="break-words"
            />
            <TransactionCell
              title="Коментар"
              value={transaction.comment.trim() || '-'}
              valueStyle="break-words"
            />
            <TransactionCell
              title="Сума"
              value={transaction.amount
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
              valueStyle={clsx(
                transaction.type === 'income'
                  ? 'text-brand-green'
                  : 'text-brand-red',
                'md:text-right font-bold break-all',
              )}
            />
            <TransactionCell
              title="Баланс"
              value={transaction.balanceAfter
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
              isLast={true}
              valueStyle="md:text-right break-all"
            />
            {index !== transactions.length - 1 && (
              <div className="col-span-6 border-b border-gray-200 max-md:hidden"></div>
            )}
          </div>
        ))}
      </div>
      <div
        ref={lastElementRef}
        className="my-2 flex h-12 w-full items-center justify-center md:hidden"
      >
        {isTransactionsLoading && page !== totalPages && (
          <p className="animate-pulse text-sm text-gray-400">
            Завантаження транзакцій...
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
