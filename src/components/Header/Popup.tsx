import React, { ReactNode } from 'react';

interface PopupProps {
  message: ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-2 text-slate-600">Atenção</h2>
        <div className='text-slate-900'>{message}</div>
        <button
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Popup;
