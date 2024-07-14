import React, { useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import Modal from "react-modal";

export default function RegisterButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="flex items-center bg-gradient-to-r from-red-500 to-red-500 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
        onClick={openModal}
      >
        <div className="mr-2 text-xl">
          <MdManageAccounts />
        </div>
        Register
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Register Modal"
        className="absolute w-auto h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
      >
        <iframe
          title="Registration"
          src="http://25.54.139.49/reg/reg.asp"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </Modal>
    </div>
  );
}
