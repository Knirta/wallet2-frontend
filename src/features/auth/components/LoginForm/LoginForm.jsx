import { useId } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { MdEmail } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import Button from '@/components/ui/Button';
import FormInput from '@/components/ui/FormInput';
import { login } from '@/features/auth/state/operations.js';

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const initialValues = { email: '', password: '' };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
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
    const resultAction = await dispatch(login(values));
    if (login.fulfilled.match(resultAction)) {
      actions.resetForm();
      navigate('/dashboard');
    }
    if (login.rejected.match(resultAction)) {
      const error = resultAction.payload;
      toast.error(error);
    }
    actions.setSubmitting(false);
  };

  return (
    <div className="w-full min-w-70 max-md:max-w-md">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
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
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting && (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              )}
              {isSubmitting ? 'Завантаження...' : 'Вхід'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
