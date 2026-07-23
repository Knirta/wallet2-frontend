import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as Yup from 'yup';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react';
import { useFormik, FormikProvider } from 'formik';
import toast from 'react-hot-toast';
import CategorySwitch from '@/features/categories/components/CategorySwitch';
import CategoryListBox from '@/features/categories/components/CategoryListBox';
import FormInput from '@/components/ui/FormInput';
import Button from '@/components/ui/Button';
import DateSelect from '@/features/transactions/components/DateSelect';
import { IoCloseOutline } from 'react-icons/io5';
import { selectCategories } from '@/features/categories/state/selectors.js';
import {
  addTransaction,
  getTransactions,
} from '@/features/transactions/state/operations.js';

const AddTransactionDialog = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const initialValues = {
    type: 'income',
    category: '',
    amount: '',
    date: new Date(),
    comment: '',
  };

  const AddTransactionSchema = Yup.object().shape({
    type: Yup.string().oneOf(['income', 'expense']).required(),
    category: Yup.string().required('Виберіть категорію'),
    amount: Yup.number()
      .typeError('Сума повинна бути числом')
      .min(0.01, 'Сума повинна бути більше нуля')
      .required("Обов'язкове поле"),
    date: Yup.date()
      .max(new Date(), 'Дата не може бути в майбутньому')
      .required("Обов'язкове поле"),
    comment: Yup.string().max(255, 'Максимум 255 символів'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: AddTransactionSchema,
  });

  function handleDialogClose() {
    formik.resetForm();
    handleClose();
  }

  async function handleSubmit(values) {
    try {
      await dispatch(addTransaction(values)).unwrap();
      dispatch(getTransactions({ page: 1, limit: 9, isAppending: false }));
      handleDialogClose();
    } catch (error) {
      toast.error(error);
    }
  }

  const visibleCategories = categories.filter(category =>
    formik.values.type === 'expense'
      ? category.type === 'expense'
      : category.type === 'income',
  );

  return (
    <Dialog
      open={isOpen}
      onClose={handleDialogClose}
      as="div"
      className="relative z-50 focus:outline-none"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 duration-50 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-5">
          <DialogPanel
            transition
            className={clsx(
              'relative flex w-full max-w-135 min-w-70 flex-col items-center rounded-[20px] bg-white px-5 pt-10 pb-15 duration-200 ease-out',
              'data-closed:transform-[scale(95%)] data-closed:opacity-0 sm:px-16',
            )}
          >
            <button
              type="button"
              onClick={() => handleDialogClose()}
              className="absolute top-4 right-4 cursor-pointer focus:outline-none"
            >
              <span className="sr-only">Close</span>
              <IoCloseOutline className="h-6 w-6" />
            </button>
            <DialogTitle as="h2" className="mb-10 text-2xl font-bold">
              Додати транзакцію
            </DialogTitle>
            <FormikProvider value={formik}>
              <form
                className="flex w-full flex-col gap-8"
                onSubmit={formik.handleSubmit}
              >
                <CategorySwitch name="type" />
                <div>
                  {formik.touched.category && formik.errors.category ? (
                    <div className="text-brand-red relative top-2 h-4 animate-pulse text-center text-xs">
                      {formik.errors.category}
                    </div>
                  ) : (
                    <div className="relative top-2 h-4"></div>
                  )}
                  <CategoryListBox
                    name="category"
                    categories={visibleCategories}
                    isError={formik.touched.category && formik.errors.category}
                  />
                </div>
                <div className="grid-row-1 relative grid gap-8 md:grid-cols-2 md:gap-4">
                  <FormInput
                    // data-autofocus
                    type="number"
                    step="0.01"
                    name="amount"
                    placeholder="0.00"
                    aria-label="Сума транзакції"
                  />
                  <div>
                    {formik.touched.date && formik.errors.date ? (
                      <div className="text-brand-red relative top-2 h-4 animate-pulse text-center text-xs">
                        {formik.errors.date}
                      </div>
                    ) : (
                      <div className="relative top-2 h-4"></div>
                    )}
                    <DateSelect
                      selected={formik.values.date}
                      handleChange={date => formik.setFieldValue('date', date)}
                    />
                  </div>
                </div>
                <FormInput
                  type="text"
                  name="comment"
                  placeholder="Опис (необов'язково)"
                  aria-label="Опис транзакції"
                />
                <Button
                  variant="primary"
                  type="submit"
                  className="disabled:bg-brand-gray mt-4 disabled:cursor-not-allowed"
                  disabled={formik.isSubmitting}
                >
                  Додати
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  className="-mt-2"
                  onClick={handleDialogClose}
                >
                  Скасувати
                </Button>
              </form>
            </FormikProvider>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTransactionDialog;
