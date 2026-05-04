import { useState } from 'react';
import { useField } from 'formik';
import clsx from 'clsx';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const FormInput = ({ icon: Icon = null, type, id, ...props }) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error;

  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const iconStyles = clsx(
    'text-brand-gray group-focus-within:text-brand-green h-5 w-5 shrink-0 transition-all duration-200 group-focus-within:scale-110',
    isError && 'text-red-500',
  );

  return (
    <div>
      {isError ? (
        <div className="relative top-2 h-4 animate-pulse text-center text-xs text-red-500">
          {meta.error}
        </div>
      ) : (
        <div className="relative top-2 h-4"></div>
      )}
      <label
        htmlFor={id}
        className={clsx(
          'border-brand-gray group focus-within:border-brand-green flex cursor-text items-center gap-5 border-b p-3 transition-all duration-200',
          isError && 'border-red-500',
        )}
      >
        {Icon && <Icon className={iconStyles} />}
        <input
          {...field}
          {...props}
          id={id}
          type={inputType}
          className="flex-1 border-none outline-none focus:outline-none"
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <IoMdEye className={iconStyles} />
            ) : (
              <IoMdEyeOff className={iconStyles} />
            )}
          </button>
        )}
      </label>
    </div>
  );
};

export default FormInput;
