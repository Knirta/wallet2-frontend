import emptyStateImage from '@/assets/images/empty-state.png';
import { useSelector } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';

const EmptyState = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className="flex items-center gap-4">
      <img
        className="h-auto w-15"
        src={emptyStateImage}
        alt="No transactions"
      />
      <p>
        Вітання, <span className="font-bold">{userName}</span>! У Вас ще немає
        транзакцій. Додайте першу, щоб почати облік!
      </p>
    </div>
  );
};

export default EmptyState;
