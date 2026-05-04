import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import CategorySelect from '@/features/categories/components/CategorySelect';
import Button from '@/components/ui/Button';

const AddTransactionDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      as="div"
      className="relative z-50 focus:outline-none"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-5">
        <DialogPanel className="flex w-full max-w-135 min-w-70 flex-col items-center rounded-[20px] bg-white px-5 pt-10 pb-15 md:px-16">
          <h2 className="text-lg">Додайте транзакцію</h2>
          <div className="switch">Switch</div>
          <form>
            <p>Formik</p>
            <CategorySelect />
            <Button variant="primary" type="submit" className="mt-5">
              Додати
            </Button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddTransactionDialog;
