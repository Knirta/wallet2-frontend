import { useSelector } from 'react-redux';
import { selectUserName } from '@/features/auth/state/selectors.js';

const DashboardPage = () => {
  const userName = useSelector(selectUserName);
  return (
    <p>
      Welcome, <span className="font-bold">{userName}</span>!
    </p>
  );
};

export default DashboardPage;
