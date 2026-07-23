import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';
import { FaChevronDown } from 'react-icons/fa6';

const CategoryListBox = ({ categories, isError, ...props }) => {
  const [field, _, helpers] = useField(props);
  const { values } = useFormikContext();

  const categoryId = field.value;
  const selectedCategory = categoryId
    ? categories.find(c => field.value === c._id)
    : categoryId;
  const handleChange = categoryId => {
    helpers.setValue(categoryId);
  };
  const isExpense = values.type === 'expense';

  return (
    <Listbox
      value={categoryId}
      onChange={handleChange}
      as="div"
      className="relative"
    >
      <ListboxButton
        className={clsx(
          'border-brand-gray focus:border-brand-green relative block w-full cursor-pointer border-b pl-4 text-left text-base/10 focus:outline-none',
          isError && 'border-brand-red',
        )}
      >
        {selectedCategory ? (
          selectedCategory.name
        ) : (
          <span className="text-brand-gray">Виберіть категорію</span>
        )}
        <FaChevronDown
          className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-black"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="absolute z-50 mt-1 w-full rounded-xl bg-gray-100/40 shadow-2xl backdrop-blur-lg focus:outline-none">
        {categories.map(category => (
          <ListboxOption
            key={category._id}
            value={category._id}
            className={clsx(
              'cursor-pointer rounded-lg px-3 text-base/11 select-none data-focus:bg-white',
              isExpense ? 'hover:text-brand-red' : 'hover:text-brand-green',
            )}
          >
            <div>{category.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default CategoryListBox;
