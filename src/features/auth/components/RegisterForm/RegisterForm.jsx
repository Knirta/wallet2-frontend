import { useId } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import Button from '@/components/ui/Button';
import FormInput from '@/components/ui/FormInput';
import { register } from '@/features/auth/state/operations.js';
import { selectIsLoading } from '@/features/auth/state/selectors.js';

const RegisterForm = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const initialValues = { username: '', email: '', password: '' };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Ім'я занадто коротке!")
      .max(40, "Ім'я занадто довге!")
      .required("Обов'язкове поле!"),
    email: Yup.string()
      .email('Повинна бути коректна електронна пошта!')
      .required("Обов'язкове поле!"),
    password: Yup.string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів!')
      .matches(/[A-Z]/, 'Додайте хоча б одну велику літеру')
      .matches(/[0-9]/, 'Додайте хоча б одну цифру')
      .test(
        'no-cyrillic',
        'Кирилиця заборонена',
        val => !/[а-яА-ЯёЁіІїЇєЄ]/.test(val || ''),
      )
      .required("Обов'язкове поле!"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      actions.resetForm();
      navigate('/register-success', { state: { email: values.email } });
    } catch (error) {
      console.error('Registration error:', error); //toast
    }
  };

  return (
    <div className="w-full max-w-md min-w-70">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className="mt-12 flex flex-col gap-8 bg-white/30 backdrop-blur-md">
          <FormInput
            type="text"
            name="username"
            id={usernameFieldId}
            placeholder="Ваше ім'я"
            aria-label="Ім'я користувача"
            icon={BiSolidUserRectangle}
          />
          <FormInput
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email"
            aria-label="Електронна пошта"
            icon={MdEmail}
          />
          <FormInput
            type="password"
            name="password"
            id={passwordFieldId}
            placeholder="Пароль"
            aria-label="Пароль"
            icon={IoMdLock}
          />
          <Button
            type="submit"
            variant="primary"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {isLoading && (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            )}
            {isLoading ? 'Завантаження...' : 'Реєстрація'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
