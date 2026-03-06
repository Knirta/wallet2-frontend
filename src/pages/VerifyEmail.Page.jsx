import AuthPage from '@/features/auth/components/AuthPage/AuthPage.jsx';
import regImgSmall from '@/assets/images/register-274.webp';
import regImgMedium from '@/assets/images/register-548.webp';
import regImgLarge from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';

const VerifyEmailPage = () => {
  return (
    <AuthPage
      authForm={<div>VerifyEmailPage</div>}
      imgSmall={regImgSmall}
      imgMedium={regImgMedium}
      imgLarge={regImgLarge}
      imgDefault={registerImgDefault}
      linkTo="/register"
      linkText="Реєстрація"
    />
  );
};

export default VerifyEmailPage;
