import AuthPage from '@/features/auth/components/AuthPage/AuthPage.jsx';
import VerifyEmailBlock from '@/features/auth/components/VerifyEmailBlock';
import regImgSmall from '@/assets/images/register-274.webp';
import regImgMedium from '@/assets/images/register-548.webp';
import regImgLarge from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';

const VerifyEmailPage = () => {
  return (
    <>
      <AuthPage
        authForm={<VerifyEmailBlock />}
        imgSmall={regImgSmall}
        imgMedium={regImgMedium}
        imgLarge={regImgLarge}
        imgDefault={registerImgDefault}
      />
    </>
  );
};

export default VerifyEmailPage;
