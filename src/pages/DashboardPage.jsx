import { useState } from 'react';
import emptyStateImage from '@/assets/images/empty-state.png';
import { FaPlus } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';
import { selectCategories } from '@/features/categories/state/selectors.js';
import AddTransactionDialog from '@/features/transactions/components/AddTransactionDialog';

const DashboardPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const userName = useSelector(selectUserName);
  const categories = useSelector(selectCategories);
  return (
    <>
      <div className="flex items-center gap-4">
        <img
          className="h-auto w-15"
          src={emptyStateImage}
          alt="No transactions"
        />
        <p>
          Вітання, {userName}! У Вас ще немає транзакцій. Додайте першу, щоб
          почати облік!
        </p>
        {categories.length > 0 && (
          <select className="rounded-5 ml-auto border border-gray-300 bg-white px-3 py-1">
            {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div
        onClick={() => setIsDialogOpen(true)}
        className="bg-green shadow-green/50 absolute right-0 bottom-0 z-40 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-xl text-white shadow-lg transition-transform hover:scale-105"
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
