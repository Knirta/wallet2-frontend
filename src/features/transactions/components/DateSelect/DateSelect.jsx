import DatePicker, { registerLocale } from 'react-datepicker';
import { uk } from 'date-fns/locale/uk';
registerLocale('uk', uk);

const DateSelect = ({ selected, handleChange }) => {
  return (
    <DatePicker
      name="date"
      onChange={handleChange}
      maxDate={new Date()}
      dateFormat="dd.MM.yyyy"
      locale="uk"
      placeholderText="Дата транзакції"
      selected={selected}
      className="border-brand-gray placeholder:text-brand-gray focus:border-brand-green border-b p-3 focus:outline-none max-md:w-full"
      wrapperClassName="!flex items-end"
      popperClassName="!translate-y-2.5"
    />
  );
};

export default DateSelect;
