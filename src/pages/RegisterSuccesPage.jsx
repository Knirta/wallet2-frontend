import { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthPage from '@/features/auth/components/AuthPage';
import Button from '@/components/ui/Button';
import RegisterSuccessBlock from '@/features/auth/components/RegisterSuccessBlock';
import regImgSmall from '@/assets/images/register-274.webp';
import regImgMedium from '@/assets/images/register-548.webp';
import regImgLarge from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';
import { reVerifyEmail } from '@/features/auth/services/authService';

const RegisterSuccessPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1); //
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleResend = async () => {
    try {
      setIsLoading(true);
      await reVerifyEmail(email);
      setSeconds(60);
    } catch (error) {
      console.error('Помилка верифікації імейла:', error); //toast
    } finally {
      setIsLoading(false);
    }
  };

  if (!email) {
    return <Navigate to="/register" replace />;
  }

  return (
    <AuthPage
      authForm={<RegisterSuccessBlock email={email} />}
      imgSmall={regImgSmall}
      imgMedium={regImgMedium}
      imgLarge={regImgLarge}
      imgDefault={registerImgDefault}
      authCtrl={
        <Button
          variant="primary"
          className="flex w-full max-w-md min-w-70 items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-75"
          onClick={handleResend}
          disabled={isLoading || seconds > 0}
        >
          {(isLoading || seconds > 0) && (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          )}
          {seconds > 0
            ? `Надіслати знову через ${seconds}с`
            : 'Надіслати повторно'}
        </Button>
      }
    />
  );
};

export default RegisterSuccessPage;
