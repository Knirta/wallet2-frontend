import { useId } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { loginUser } from '@/services/auth.js';
import Button from '@/components/ui/Button';
import FormInput from '@/components/ui/FormInput';

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const initialValues = { email: '', password: '' };

  const registerSchema = Yup.object().shape({
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
      const data = await loginUser(values);
      console.log(data);
      actions.resetForm();
    } catch (error) {
      console.error('Login error:', error); //toast
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
            Вхід
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
