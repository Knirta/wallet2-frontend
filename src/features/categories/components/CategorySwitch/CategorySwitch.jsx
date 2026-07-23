import { Switch } from '@headlessui/react';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const CategorySwitch = props => {
  const [field, _, helpers] = useField(props);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  let isExpense = field.value === 'expense';
  const handleChange = nextIsExpense => {
    helpers.setValue(nextIsExpense ? 'expense' : 'income');
    setFieldValue('category', '');
    setFieldTouched('category', false);
  };

  return (
    <div className="switch flex items-center gap-3 self-center">
      <span
        className={clsx(
          'text-brand-gray text-sm',
          !isExpense && 'text-brand-green',
        )}
      >
        Дохід
      </span>
      <Switch
        checked={isExpense}
        onChange={handleChange}
        className="group border-brand-gray relative flex h-10 w-20 cursor-pointer rounded-full border focus:not-data-focus:outline-none data-focus:outline-none"
      >
        <div
          aria-hidden="true"
          className={clsx(
            'pointer-events-none -mt-0.75 flex size-11 -translate-x-1 items-center justify-center rounded-full shadow-lg transition duration-200 ease-in-out group-data-checked:translate-x-10',
            isExpense
              ? 'bg-brand-red shadow-brand-red/50'
              : 'bg-brand-green shadow-brand-green/50',
          )}
        >
          {isExpense ? (
            <FaMinus className="h-5 w-5 text-white" />
          ) : (
            <FaPlus className="h-5 w-5 text-white" />
          )}
        </div>
      </Switch>
      <span
        className={clsx(
          'text-brand-gray text-sm',
          isExpense && 'text-brand-red',
        )}
      >
        Витрата
      </span>
    </div>
  );
};

export default CategorySwitch;
