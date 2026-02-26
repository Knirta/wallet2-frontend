import AuthPage from '@/components/layout/AuthPage.jsx';
import RegisterForm from '@/features/auth/components/RegisterForm';
import registerImg274 from '@/assets/images/register-274.webp';
import registerImg548 from '@/assets/images/register-548.webp';
import registerImg905 from '@/assets/images/register-905.webp';
import registerImgDefault from '@/assets/images/register-548.png';

const LoginPage = () => {
  return (
    <AuthPage
      authForm={<RegisterForm />}
      img274={registerImg274}
      img548={registerImg548}
      img905={registerImg905}
      imgDefault={registerImgDefault}
      linkTo="/register"
      linkText="Реєстрація"
    />
  );
};

export default LoginPage;
