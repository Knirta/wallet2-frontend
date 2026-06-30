import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';
import { getExchangeRate } from '@/features/currency/services/currencyService.js';

const ExchangeRate = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getExchangeRate()
      .then(data => {
        setRates(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loader />;
  if (error) {
    return (
      <div className="text-brand-red flex h-full w-full items-center justify-center text-sm">
        Не вдалося оновити курс
      </div>
    );
  }

  return (
    <div className="bg-brand-violet bg-diagram mx-auto grid max-w-80 grid-cols-3 overflow-hidden rounded-[30px] bg-contain bg-bottom bg-no-repeat pb-5.5 text-white md:max-w-100 xl:max-w-none xl:pb-33">
      <div className="bg-white/20 py-3 pl-5 text-lg font-bold xl:pt-5 xl:pl-7.5">
        Валюта
      </div>
      <div className="bg-white/20 py-3 pl-2 text-lg font-bold md:pl-5 xl:pt-5">
        Покупка
      </div>
      <div className="bg-white/20 py-3 pr-5 text-right text-lg font-bold xl:pt-5 xl:pr-7.5">
        Продаж
      </div>
      {rates.map(rate => (
        <div key={rate.currencyName} className="contents">
          <div className="py-3 pl-5 xl:pt-5 xl:pl-7.5">{rate.currencyName}</div>
          <div className="py-3 text-center xl:pt-5">{rate.buy}</div>
          <div className="py-3 pr-5 text-right xl:pt-5 xl:pr-7.5">
            {rate.sell}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExchangeRate;
