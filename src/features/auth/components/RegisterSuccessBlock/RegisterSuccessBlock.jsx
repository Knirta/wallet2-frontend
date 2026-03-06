import { MdEmail } from 'react-icons/md';

const RegisterSuccessBlock = ({ email }) => {
  return (
    <div className="border-blue mt-14 mb-8 max-w-md min-w-70 rounded-[20px] border p-8">
      <div className="flex items-center justify-center gap-5">
        <MdEmail className="text-blue h-7 w-7" />
        <h1 className="text-xl font-bold">Лист надіслано!</h1>
      </div>

      <p className="mt-6 indent-4 text-lg">
        Ми надіслали посилання для підтвердження на{' '}
        <span className="text-blue font-bold">{email}</span>. Будь ласка,
        перевірте пошту та натисніть на посилання. Перевірте папку Спам, якщо не
        бачите листа.
      </p>
      <p className="mt-2 indent-4 text-lg">
        Цю вкладку можна буде закрити після підтвердження.
      </p>
    </div>
  );
};

export default RegisterSuccessBlock;
