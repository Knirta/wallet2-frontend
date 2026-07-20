import React from 'react';
import { getCategoryIcon } from '@/heplers';

const ExpensesTable = ({ expenses }) => {
  return (
    <div className="mb-8 grid grid-cols-[2fr_1fr]">
      <div className="rounded-l-full bg-white px-5 py-4 text-left font-bold">
        Категорія
      </div>
      <div className="rounded-r-full bg-white py-4 pr-5 text-right font-bold">
        Сума
      </div>
      {expenses.map((expense, index, array) => {
        const hue = (360 * index) / array.length;
        const rainbowColor = `hsl(${hue}, 65%, 50%)`;
        const Icon = getCategoryIcon(expense.icon);
        return (
          <React.Fragment key={expense.id}>
            <div className="flex items-center justify-start px-5 py-4 text-left">
              <div
                className="mr-2.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                style={{ backgroundColor: rainbowColor }}
              >
                <Icon className="h-5 w-5 stroke-[2.5]" />
              </div>
              {expense.name}
            </div>
            <div className="py-4 pr-5 text-right">
              {expense.totalAmount
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
            </div>

            <div className="col-span-2 border-b border-gray-200"></div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default ExpensesTable;
