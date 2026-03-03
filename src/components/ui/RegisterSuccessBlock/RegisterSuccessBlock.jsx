import { useLocation } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';

const RegisterSuccessBlock = () => {
  const location = useLocation();
  const email = location.state?.email || 'вашу пошту';

  return (
    <div>
      <h1>Лист надіслано!</h1>
      <MdEmail className="h-12 w-12" />
      <p>
        Ми надіслали посилання для підтвердження на <span>{email}</span>. Будь
        ласка, перевірте пошту та натисніть на посилання. Цю вкладку можна буде
        закрити після підтвердження.
      </p>
    </div>
  );
};

export default RegisterSuccessBlock;
