import ExchangeRate from '@/components/ui/ExchangeRate';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from '@/features/auth/state/selectors';
import { selectTransactions } from '@/features/transactions/state/selectors';
import { HomeIcon, StatisticsIcon, ExchangeIcon } from '@/components/icons';
import AsideLink from '@/components/ui/AsideLink';

const Aside = () => {
  const totalBalance = useSelector(selectTotalBalance);
  const transactions = useSelector(selectTransactions);

  return (
    <aside className="block md:grid md:grid-cols-2 xl:block">
      <div>
        <div className="links flex items-center justify-center gap-7.5">
          <AsideLink to="/dashboard">
            <HomeIcon />
          </AsideLink>
          <AsideLink to="/stats">
            <StatisticsIcon />
          </AsideLink>
          <AsideLink to="/exchange" hidden={true}>
            <ExchangeIcon />
          </AsideLink>
        </div>

        {transactions.length > 0 && (
          <div className="balance">Balance: {totalBalance}</div>
        )}
      </div>

      <div className="exchange hidden md:block">
        <ExchangeRate />
      </div>
    </aside>
  );
};

export default Aside;
