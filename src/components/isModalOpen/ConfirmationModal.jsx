// filepath: /src/components/ConfirmationModal.jsx
import React from 'react';
import { Dialog, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} handler={onRequestClose} className='bg-pink-50'>
      <DialogBody>
        <h2 className="text-lg font-bold">Confirm Delete</h2>
        <p>Are you sure you want to delete this product?</p>
      </DialogBody>
      <DialogFooter>
        <Button
          type="button"
          onClick={onRequestClose}
        //   className="mr-2 bg-gray-500 hover:bg-gray-700 text-white"
        className="mr-2 px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
        >
          Cancel
        </Button>
        <Button
          type="button"
          onClick={onConfirm}
        //   className="bg-red-600 hover:bg-red-700 text-white"
        className=" px-4 py-3 text-center text-gray-100 bg-red-600 hover:bg-red-700 border border-transparent dark:border-gray-700 rounded-lg"
        >
          Delete
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmationModal;