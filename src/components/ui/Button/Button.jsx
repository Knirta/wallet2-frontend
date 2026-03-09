import { mergeClasses } from '@/utils';

const Button = ({ children, variant, className, ...props }) => {
  const variantStyles = {
    primary: 'bg-green text-white hover:bg-hover-green',
    secondary: 'bg-white text-blue hover:bg-blue hover:text-white',
  }[variant];
  return (
    <button
      {...props}
      className={mergeClasses(
        `rounded-[20px] ${variantStyles} cursor-pointer p-3 tracking-widest uppercase outline transition-colors duration-300`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
