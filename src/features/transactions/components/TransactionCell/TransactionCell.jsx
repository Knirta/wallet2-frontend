import clsx from 'clsx';
import { mergeClasses } from '@/utils';

const TransactionCell = ({
  title,
  value,
  isFirst = false,
  isLast = false,
  valueStyle,
}) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-x-8 border-b border-gray-200 py-3 max-md:px-5',
        'md:block md:border-none',
        isFirst && 'md:pl-5',
        isLast && 'border-b-0 md:pr-5',
      )}
    >
      <div className="font-bold md:hidden">{title}</div>
      <div className={mergeClasses('text-right md:text-left', valueStyle)}>
        {value}
      </div>
    </div>
  );
};

export default TransactionCell;
