import ExchangeRate from '@/features/currency/components/ExchangeRate';
import { useSelector } from 'react-redux';
import { selectTotalBalance } from '@/features/auth/state/selectors';
import { selectTransactions } from '@/features/transactions/state/selectors';
import { useIsNotMobile } from '@/hooks/useIsNotMobile.js';
import { useLocation } from 'react-router-dom';
import { HomeIcon, StatisticsIcon, ExchangeIcon } from '@/components/icons';
import AsideLink from '@/components/ui/AsideLink';

const Aside = () => {
  const totalBalance = useSelector(selectTotalBalance);
  const transactions = useSelector(selectTransactions);

  const isMobile = !useIsNotMobile();
  const location = useLocation();
  const shouldShowBalance = !(
    isMobile &&
    (location.pathname === '/exchange' || location.pathname === '/stats')
  );

  return (
    <aside className="mb-7.5 block md:mb-10 md:grid md:grid-cols-2 md:gap-5 xl:block xl:py-10">
      <div className="xl:mb-7.5">
        <div className="mb-3 flex items-center justify-center gap-7.5 md:mb-5 md:flex-col md:items-start md:gap-3 xl:mb-7.5">
          <AsideLink to="/dashboard" icon={HomeIcon} title="Головна" />
          <AsideLink to="/stats" icon={StatisticsIcon} title="Статистика" />
          <AsideLink to="/exchange" hidden={true} icon={ExchangeIcon} />
        </div>

        {transactions.length > 0 && shouldShowBalance && (
          <div className="balance rounded-[30px] bg-white pt-2 pr-4 pb-4 pl-7.5">
            <p className="text-font-gray mb-2 text-xs uppercase">Ваш баланс</p>
            <p className="font-display text-3xl font-bold">
              <span className="font-sans font-normal">₴ </span>
              {totalBalance
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
            </p>
          </div>
        )}
      </div>

      <div className="exchange hidden md:block">
        <ExchangeRate />
      </div>
    </aside>
  );
};

export default Aside;
