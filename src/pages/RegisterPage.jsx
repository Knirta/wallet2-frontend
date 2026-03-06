import AuthPage from '@/features/auth/components/AuthPage';
import AuthLink from '@/features/auth/components/AuthLink';
import RegisterForm from '@/features/auth/components/RegisterForm';
import regImgSmall from '@/assets/images/register-274.webp';
import regImgMedium from '@/assets/images/register-548.webp';
import regImgLarge from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';

const RegisterPage = () => {
  return (
    <AuthPage
      authForm={<RegisterForm />}
      imgSmall={regImgSmall}
      imgMedium={regImgMedium}
      imgLarge={regImgLarge}
      imgDefault={registerImgDefault}
      authCtrl={<AuthLink to="/login">Вхід</AuthLink>}
    />
  );
};

export default RegisterPage;
