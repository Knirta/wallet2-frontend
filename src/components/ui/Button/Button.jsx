import { mergeClasses } from '@/utils';

const Button = ({ children, variant, className, ...props }) => {
  const variantStyles = {
    primary: 'bg-brand-green text-white hover:bg-hover-brand-green',
    secondary: 'bg-white text-brand-blue hover:bg-brand-blue hover:text-white',
  }[variant];
  return (
    <button
      {...props}
      className={mergeClasses(
        `rounded-[20px] ${variantStyles} w-full cursor-pointer self-center p-3 tracking-widest uppercase outline transition-colors duration-300 active:scale-95 md:w-75`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
