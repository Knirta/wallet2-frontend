import AuthPage from '@/components/layout/AuthPage.jsx';
import RegisterSuccessBlock from '@/components/ui/RegisterSuccessBlock';
import regImgSmall from '@/assets/images/register-274.webp';
import regImgMedium from '@/assets/images/register-548.webp';
import regImgLarge from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';

const RegisterSuccessPage = () => {
  return (
    <AuthPage
      authForm={<RegisterSuccessBlock />}
      imgSmall={regImgSmall}
      imgMedium={regImgMedium}
      imgLarge={regImgLarge}
      imgDefault={registerImgDefault}
      linkTo="/register"
      linkText="Реєстрація"
    />
  );
};

export default RegisterSuccessPage;
