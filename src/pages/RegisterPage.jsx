import AuthPage from '@/components/layout/AuthPage.jsx';
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
      linkTo="/login"
      linkText="Вхід"
    />
  );
};

export default RegisterPage;
