import { useState, useEffect } from 'react';
import { api } from '@/api/api.js';
import Diagram from '@/features/statistics/components/Diagram';
import Loader from '@/components/ui/Loader';

const StatsPage = () => {
  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth());
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());
  const [statistics, setStatistics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const { data: result } = await api.get(
        `api/categories/statistics?month=${selectedMonth}&year=${selectedYear}`,
      );
      return result.data;
    };
    fetchStatistics()
      .then(data => setStatistics(data))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [selectedMonth, selectedYear]);
  return (
    <>
      <p className="font-display mb-2.5 text-3xl md:mb-5">Статистика</p>
      <div className="md:grid md:grid-cols-[1fr_1.3fr]">
        {isLoading ? (
          <Loader />
        ) : (
          <Diagram
            expenseStatistics={statistics?.expenseStatistics}
            totalExpense={statistics?.totalExpense}
          />
        )}
        <div className="diagram-info pr-3 pl-10">
          <div className="choose_period">
            <p>Місяць</p>
            <p>Рік</p>
          </div>
          <div className="list">Табличка</div>
          <p className="flex items-center justify-between">
            <span className="font-bold">Витрати:</span>
            <span className="text-brand-red font-bold">
              {statistics?.totalExpense
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span className="font-bold">Доходи:</span>
            <span className="text-brand-green font-bold">
              {statistics?.totalIncome
                .toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .replace(/,/g, ' ')}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
