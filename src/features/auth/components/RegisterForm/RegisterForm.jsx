import { useId } from 'react';
import { Formik, Form } from 'formik';
// import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { api } from '@/services/api.js';
import Button from '@/components/ui/Button';
import FormInput from '@/components/ui/FormInput';

const RegisterForm = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  // const navigate = useNavigate();
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
    const response = await api.post('/api/auth/register', values);
    console.log(response);
    actions.resetForm();
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
          <Button type="submit" variant="primary">
            Реєстрація
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
