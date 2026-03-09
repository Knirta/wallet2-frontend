import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { verifyEmail } from '@/features/auth/services/authService.js';

const VerifyEmailBlock = () => {
  const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get('code');
    verifyEmail(code)
      .then(() => {
        setStatus('success');
        setTimeout(() => navigate('/login'), 3500);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => navigate('/register'), 3500);
      });
  }, [searchParams, navigate]);

  return (
    <div className="border-blue mt-14 mb-8 max-w-md min-w-70 rounded-[20px] border p-8">
      {status === 'loading' && (
        <div className="flex items-center justify-center gap-5">
          <div className="border-blue h-5 w-5 animate-spin rounded-full border-2 border-t-transparent"></div>
          <p>Підтверджуємо Ваш імейл...</p>
        </div>
      )}
      {status === 'success' && (
        <div>
          Ваш email успішно підтверджено! Ви будете перенаправлені на сторінку
          логіну.
        </div>
      )}
      {status === 'error' && (
        <div>Помилка підтвердження email. Будь ласка, спробуйте ще раз.</div>
      )}
    </div>
  );
};

export default VerifyEmailBlock;
