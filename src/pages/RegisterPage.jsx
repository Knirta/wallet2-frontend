import AuthPage from '@/features/auth/components/AuthPage';
import Link from '@/components/ui/Link';
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
      authCtrl={<Link to="/login">Вхід</Link>}
    />
  );
};

export default RegisterPage;
