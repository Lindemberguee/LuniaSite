import React, { useState } from 'react';
import RegisterModal from './RegisterModal';

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <button 
        onClick={handleOpenModal} 
        className="px-4 py-2 bg-red-500 text-gray-200 rounded-md hover:bg-red-800 transition duration-300"
      >
        Cadastre-se
      </button>
      {showModal && <RegisterModal onClose={handleCloseModal} />}
    </div>
  );
};

export default LoginButton;
