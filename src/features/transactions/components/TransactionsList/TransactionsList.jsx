import { useSelector } from 'react-redux';
import {
  selectTransactions,
  selectTotalPages,
} from '@/features/transactions/state/selectors';

import clsx from 'clsx';

const TransactionsList = ({ page, setPage }) => {
  const transactions = useSelector(selectTransactions);
  const totalPages = useSelector(selectTotalPages);

  return (
    <div className="w-full md:overflow-x-auto">
      <div className="w-full md:grid md:min-w-3xl md:grid-cols-[max-content_max-content_minmax(90px,max-content)_minmax(160px,1fr)_max-content_max-content] md:items-center md:gap-x-6">
        <div className="hidden rounded-full bg-white px-5 py-4 font-bold md:col-span-6 md:grid md:grid-cols-subgrid md:items-center md:gap-x-10 md:border-none">
          <div className="text-left">Дата</div>
          <div className="text-center">Тип</div>
          <div className="text-left">Категорія</div>
          <div className="text-left">Коментар</div>
          <div className="text-right">Сума</div>
          <div className="text-right">Баланс</div>
        </div>

        {transactions.map(transaction => (
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
            <div className="flex items-center justify-between border-b border-gray-200 py-3 max-md:px-5 md:block md:border-none md:pl-5">
              <div className="font-bold md:hidden">Дата</div>
              <div className="text-right md:text-left">
                {new Date(transaction.date).toLocaleDateString('uk-UA')}
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-3 max-md:px-5 md:block md:border-none">
              <div className="font-bold md:hidden">Тип</div>
              <div className="text-right md:text-center">
                {transaction.type === 'income' ? '+' : '-'}
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-3 max-md:px-5 md:block md:border-b-0 md:border-none">
              <div className="font-bold md:hidden">Категорія</div>
              <div className="text-right md:text-left">
                {transaction.category.name}
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-8 border-b border-gray-200 py-3 max-md:px-5 md:block md:border-b-0 md:border-none">
              <div className="font-bold md:hidden">Коментар</div>
              <div className="text-right md:text-left">
                {transaction.comment.trim() || '-'}
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-3 max-md:px-5 md:block md:border-b-0 md:border-none">
              <div className="font-bold md:hidden">Сума</div>
              <div
                className={clsx(
                  transaction.type === 'income'
                    ? 'text-brand-green'
                    : 'text-brand-red',
                  'text-right font-bold',
                )}
              >
                {transaction.amount
                  .toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  .replace(/,/g, ' ')}
              </div>
            </div>
            <div className="flex items-center justify-between py-3 max-md:px-5 md:block md:pr-5">
              <div className="font-bold md:hidden">Баланс</div>
              <div className="text-right">
                {transaction.balanceAfter
                  .toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  .replace(/,/g, ' ')}
              </div>
            </div>
            <div className="col-span-6 border-b border-gray-200 max-md:hidden"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
