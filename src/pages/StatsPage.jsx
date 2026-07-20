import { useState, useEffect } from 'react';
import { api } from '@/api/api.js';
import DiagramContent from '@/features/statistics/components/DiagramContent';
import MonthsListBox from '@/features/statistics/components/MonthsListBox';
import YearsListBox from '@/features/statistics/components/YearsListBox';
import ExpensesTable from '@/features/statistics/components/ExpensesTable';

const StatsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const currentMonth = selectedMonth ?? new Date().getMonth();
    const currentYear = selectedYear ?? new Date().getFullYear();

    const fetchStatistics = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: result } = await api.get(
          `api/categories/statistics?month=${currentMonth}&year=${currentYear}`,
        );
        setStatistics(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStatistics();
  }, [selectedMonth, selectedYear]);

  const hasExpenses = statistics && statistics.totalExpense > 0;

  return (
    <div className="sm:max-md:mx-auto sm:max-md:max-w-[70%] md:grid md:grid-cols-[1fr_1.3fr]">
      <p className="font-display mb-2.5 text-3xl md:col-span-2 md:mb-5">
        Статистика
      </p>
      <DiagramContent
        error={error}
        isLoading={isLoading}
        hasExpenses={hasExpenses}
        statistics={statistics}
      />
      <div className="diagram-info md:pl-10">
        <div className="choose_period mb-5 md:grid md:grid-cols-2 md:gap-5">
          <MonthsListBox
            selectedMonth={selectedMonth}
            handleChange={setSelectedMonth}
          />
          <YearsListBox
            selectedYear={selectedYear}
            handleChange={setSelectedYear}
          />
        </div>

        {!error && !isLoading && hasExpenses && (
          <ExpensesTable expenses={statistics.expenseStatistics} />
        )}
        <p className="mb-4 flex items-center justify-between px-5">
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
        <p className="flex items-center justify-between px-5">
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
  );
};

export default StatsPage;
