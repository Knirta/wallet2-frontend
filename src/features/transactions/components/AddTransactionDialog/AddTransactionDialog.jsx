import { Button, Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';

const AddTransactionDialog = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      as="div"
      className="relative z-50 focus:outline-none"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/60" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="w-full max-w-md rounded bg-white p-6">
          <p className="text-lg font-bold">Додайте транзакцію</p>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddTransactionDialog;
