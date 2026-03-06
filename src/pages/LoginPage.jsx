import AuthPage from '@/features/auth/components/AuthPage';
import AuthLink from '@/features/auth/components/AuthLink';
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
      authCtrl={<AuthLink to="/register">Реєстрація</AuthLink>}
    />
  );
};

export default LoginPage;
