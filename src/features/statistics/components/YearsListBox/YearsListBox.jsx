import { useSelector } from 'react-redux';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';
import { selectUserCreatedAt } from '@/features/auth/state/selectors.js';
import { createYearsArray } from '@/heplers';

const YearsListBox = ({ selectedYear, handleChange }) => {
  const userCreatedAt = useSelector(selectUserCreatedAt);
  const startYear = new Date(userCreatedAt).getFullYear() - 5;
  const endYear = new Date().getFullYear();

  let years;

  startYear === endYear
    ? (years = [{ id: 0, name: endYear }])
    : (years = createYearsArray(startYear, endYear));

  return (
    <Listbox
      as="div"
      value={selectedYear}
      onChange={handleChange}
      className="relative"
    >
      <ListboxButton className="relative w-full cursor-pointer rounded-full border border-black text-center text-base/10 focus:outline-none">
        {selectedYear ? (
          years.find(year => year.name === selectedYear)?.name
        ) : (
          <span>Рік</span>
        )}
        <FaChevronDown
          className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-black"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="absolute z-100 mt-1 w-full rounded-xl bg-gray-100/40 shadow-2xl backdrop-blur-lg focus:outline-none">
        {years.map(year => (
          <ListboxOption
            key={year.id}
            value={year.name}
            className="cursor-pointer rounded-lg px-3 text-base/9 select-none data-focus:bg-white"
          >
            {year.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default YearsListBox;
