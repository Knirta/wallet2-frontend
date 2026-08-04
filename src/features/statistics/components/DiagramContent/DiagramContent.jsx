import { useMemo } from 'react';
import Diagram from '@/features/statistics/components/Diagram';
import Loader from '@/components/ui/Loader';

const DiagramContent = ({
  error,
  isLoading,
  hasExpenses,
  statistics,
  colorsMap,
}) => {
  const sortedExpenseForDiagram = useMemo(() => {
    const expenses = statistics?.expenseStatistics;
    if (!expenses) return [];
    return [...expenses].sort((a, b) => a.name.localeCompare(b.name));
  }, [statistics]);

  if (error)
    return (
      <div className="text-brand-red my-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center md:col-span-2">
        <p className="font-semibold">Ой, щось пішло не так...</p>
        <p className="mt-1 text-sm opacity-90">
          Не вдалося завантажити дані. Будь ласка, оновіть сторінку або
          спробуйте пізніше.
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex min-h-41 items-center justify-center">
        <Loader />
      </div>
    );
  if (!hasExpenses)
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 p-6 text-center text-black max-md:mb-5">
        <span className="mb-2 text-4xl">&#128202;</span>
        <p className="font-medium">Немає витрат за цей період</p>
        <p className="mt-1 text-xs text-black">
          Оберіть інший місяць/рік або додайте транзакції.
        </p>
      </div>
    );
  return (
    <Diagram
      expenseStatistics={sortedExpenseForDiagram}
      totalExpense={statistics?.totalExpense}
      colorsMap={colorsMap}
    />
  );
};

export default DiagramContent;
