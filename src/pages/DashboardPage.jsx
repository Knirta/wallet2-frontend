import emptyStateImage from '@/assets/images/empty-state.png';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';

const DashboardPage = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className="relative grid grid-cols-1 xl:grid-cols-[9fr_16fr]">
      <p>First column content</p>
      <div className="xl:pl-7.5">
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
        </div>
      </div>
      <div className="bg-green rounded-5 absolute right-5 bottom-5 z-40 h-5 w-5">
        +
      </div>
    </div>
  );
};

export default DashboardPage;
