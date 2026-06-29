import { useState, useEffect } from 'react';
import Loader from '@/components/ui/Loader';
// import mockData from '@/app/monoMock.json';

const ExchangeRate = () => {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.monobank.ua/bank/currency')
      .then(res => {
        if (!res.ok) throw new Error('Помилка завантаження курсів');
        return res.json();
      })
      .then(data => {
        // ISO коди: 840 = USD, 978 = EUR, 985 = PLN, 980 = UAH
        const allowedCodes = [840, 978, 985];
        const filteredRates = data
          .filter(
            item =>
              allowedCodes.includes(item.currencyCodeA) &&
              item.currenceCodeB === 980,
          )
          .map(item => {
            let codeName = '';
            if (item.currencyCodeA === 840) codeName = 'USD';
            if (item.currencyCodeA === 978) codeName = 'EUR';
            if (item.currencyCodeA === 985) codeName = 'PLN';
            return {
              currencyName: codeName,
              buy: item.rateBuy
                ? item.rateBuy.toFixed(2)
                : (item.rateCross * 0.995).toFixed(2),
              sell: item.sellRate
                ? item.sellRate.toFixed(2)
                : (item.rateCross * 1.005).toFixed(2),
            };
          });
        setRates(filteredRates);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });

    // для localhost, бо api monobank дозволяє оновлювати курси
    //  не частіше ніж раз на 5 хвилин для однієї IP-адреси
    // інакше Error 429 (Too Many Requests)
    // const allowedCodes = [840, 978, 985];
    // const filteredRates = mockData
    //   .filter(
    //     item =>
    //       allowedCodes.includes(item.currencyCodeA) &&
    //       item.currencyCodeB === 980,
    //   )
    //   .map(item => {
    //     let codeName = '';
    //     if (item.currencyCodeA === 840) codeName = 'USD';
    //     if (item.currencyCodeA === 978) codeName = 'EUR';
    //     if (item.currencyCodeA === 985) codeName = 'PLN';
    //     return {
    //       currencyName: codeName,
    //       buy: item.rateBuy
    //         ? item.rateBuy.toFixed(2)
    //         : (item.rateCross * 0.995).toFixed(2),
    //       sell: item.rateSell
    //         ? item.rateSell.toFixed(2)
    //         : (item.rateCross * 1.005).toFixed(2),
    //     };
    //   });
    // setRates(filteredRates);
    // setIsLoading(false);
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
