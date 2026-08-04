import { useState, useEffect, useMemo } from 'react';
import { api } from '@/api/api.js';
import { useSelector } from 'react-redux';
import { selectCategories } from '@/features/categories/state/selectors.js';
import DiagramContent from '@/features/statistics/components/DiagramContent';
import MonthsListBox from '@/features/statistics/components/MonthsListBox';
import YearsListBox from '@/features/statistics/components/YearsListBox';
import ExpensesTable from '@/features/statistics/components/ExpensesTable';

const StatsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [statistics, setStatistics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const allCategories = useSelector(selectCategories);

  const globalColorsMap = useMemo(() => {
    if (!allCategories || allCategories.length === 0) {
      return {};
    }

    const expenseCategories = allCategories.filter(
      category => category.type === 'expense',
    );

    const sortedCategoriesNames = expenseCategories
      .map(category => category.name)
      .sort((a, b) => a.localeCompare(b));

    const colorsMap = {};
    const total = sortedCategoriesNames.length;

    sortedCategoriesNames.forEach((name, index) => {
      const hue = total > 1 ? (360 * index) / total : 0;
      colorsMap[name] = `hsl(${hue}, 75%, 55%)`;
    });

    return colorsMap;
  }, [allCategories]);

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data: result } = await api.get(
          `api/categories/statistics?month=${selectedMonth}&year=${selectedYear}`,
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
        colorsMap={globalColorsMap}
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
          <ExpensesTable
            expenses={statistics.expenseStatistics}
            colorsMap={globalColorsMap}
          />
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
