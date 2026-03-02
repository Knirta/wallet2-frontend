import AuthPage from '@/components/layout/AuthPage.jsx';
import LoginForm from '@/features/auth/components/LoginForm';
import loginImgSmall from '@/assets/images/login-261.webp';
import loginImgMedium from '@/assets/images/login-521.webp';
import loginImgLarge from '@/assets/images/login-871.webp';
import loginImgDefault from '@/assets/images/login-521.png';

const LoginPage = () => {
  return (
    <AuthPage
      authForm={<LoginForm />}
      imgSmall={loginImgSmall}
      imgMedium={loginImgMedium}
      imgLarge={loginImgLarge}
      imgDefault={loginImgDefault}
      linkTo="/register"
      linkText="Реєстрація"
    />
  );
};

export default LoginPage;
