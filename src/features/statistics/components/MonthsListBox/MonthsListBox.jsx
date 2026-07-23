import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';

const months = [
  { id: 0, name: 'Січень' },
  { id: 1, name: 'Лютий' },
  { id: 2, name: 'Березень' },
  { id: 3, name: 'Квітень' },
  { id: 4, name: 'Травень' },
  { id: 5, name: 'Червень' },
  { id: 6, name: 'Липень' },
  { id: 7, name: 'Серпень' },
  { id: 8, name: 'Вересень' },
  { id: 9, name: 'Жовтень' },
  { id: 10, name: 'Листопад' },
  { id: 11, name: 'Грудень' },
];

const MonthsListBox = ({ selectedMonth, handleChange }) => {
  const currentMonth = months.find(month => month.id === selectedMonth);
  return (
    <Listbox
      as="div"
      value={selectedMonth}
      onChange={handleChange}
      className="relative max-md:mb-5"
    >
      <ListboxButton className="relative w-full cursor-pointer rounded-full border border-black text-center text-base/10 focus:outline-none">
        {currentMonth.name}
        <FaChevronDown
          className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-black"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        modal={false}
        className="absolute z-100 mt-1 max-h-150 w-full overflow-y-auto rounded-xl bg-gray-100/40 shadow-2xl backdrop-blur-lg focus:outline-none"
      >
        {months.map(month => (
          <ListboxOption
            key={month.id}
            value={month.id}
            className="cursor-pointer rounded-lg px-3 text-base/9 select-none data-focus:bg-white"
          >
            {month.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default MonthsListBox;
