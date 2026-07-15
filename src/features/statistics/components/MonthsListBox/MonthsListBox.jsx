import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa6';

const months = [
  { id: 0, name: 'січень' },
  { id: 1, name: 'лютий' },
  { id: 2, name: 'березень' },
  { id: 3, name: 'квітень' },
  { id: 4, name: 'травень' },
  { id: 5, name: 'червень' },
  { id: 6, name: 'липень' },
  { id: 7, name: 'серпень' },
  { id: 8, name: 'вересень' },
  { id: 9, name: 'жовтень' },
  { id: 10, name: 'листопад' },
  { id: 11, name: 'грудень' },
];

const MonthsListBox = ({ selectedMonth, handleChange }) => {
  return (
    <Listbox
      as="div"
      value={selectedMonth}
      onChange={handleChange}
      className="relative max-md:mb-5"
    >
      <ListboxButton className="relative w-full cursor-pointer rounded-full border border-black text-center text-base/10 focus:outline-none">
        {selectedMonth ? (
          months.find(month => month.id === selectedMonth)?.name
        ) : (
          <span>Місяць</span>
        )}
        <FaChevronDown
          className="pointer-events-none absolute top-1/2 right-2.5 h-3 w-3 -translate-y-1/2 text-black"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions className="absolute z-100 mt-1 w-full overflow-y-scroll rounded-xl bg-gray-100/40 shadow-2xl backdrop-blur-lg focus:outline-none">
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
