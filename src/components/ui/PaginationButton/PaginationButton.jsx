import clsx from 'clsx';

const PaginationButton = ({ onClick, children, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'rounded-[20px] px-4 py-2 text-white transition-colors duration-300',
        !disabled &&
          'hover:bg-hover-brand-violet bg-brand-violet cursor-pointer active:scale-95',
        disabled && 'cursor-not-allowed bg-gray-300 hover:bg-gray-300',
      )}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
