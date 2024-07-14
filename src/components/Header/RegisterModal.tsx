import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Popup from './Popup';
import Loading from './Loading';
import '../Header/styles/register.css';

interface RegisterModalProps {
  onClose: () => void;
}

interface FormData {
  username: string;
  password: string;
  confirmPassword: string;
}

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-white">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 p-3 w-full border rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
    />
  </div>
);

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userHash, setUserHash] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(''); // Redefinir estado de erro antes de prosseguir
    setSuccessMessage('');

    const { username, password, confirmPassword } = formData;

    if (username.length < 5) {
      setError('O username deve ter pelo menos 5 caracteres.');
      setShowPopup(true);
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('A senha deve ter pelo menos 8 caracteres.');
      setShowPopup(true);
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      setShowPopup(true);
      setIsLoading(false);
      return;
    }

    const apiRegisterUrl = 'http://localhost:3000/api/public/register';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'seu_api_key'; // Obtenha a chave da API do .env ou use um valor padrão

    try {
      const response = await fetch(apiRegisterUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({ accountName: username, password: password })
      });

      if (response.status === 201) {
        const data = await response.json();
        setUserHash(data.userHash);
        setSuccessMessage(`Registro bem-sucedido! Guarde seu ID Token:`);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          onClose(); // Fechar modal após o sucesso
        }, 30000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Conta de usuário existente!');
        setShowPopup(true);
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      setError('Erro ao conectar ao servidor');
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash).then(() => {
      setSuccessMessage('ID Token copiado para a área de transferência!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }).catch(err => {
      setError('Falha ao copiar o ID Token.');
      setShowPopup(true);
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center modal-overlay">
      {isLoading && <Loading />}
      {showPopup && (
        <Popup
          message={
            <div>
              {error || successMessage}
              {userHash && (
                <div>
                  <span
                    className="user-hash"
                    onClick={() => copyToClipboard(userHash)}
                    style={{ cursor: 'pointer', backgroundColor: '#f0f0f0', borderLeft: '3px solid #3498db', padding: '5px', display: 'inline-block', marginTop: '10px', color: '#007BFF', fontWeight: 'bold' }}
                  >
                    {userHash}
                  </span>
                </div>
              )}
            </div>
          }
          onClose={() => setShowPopup(false)}
        />
      )}
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 w-96 relative register-modal">
        <button onClick={onClose} className="absolute top-4 right-4 register-modal-close-btn">&times;</button>
        <span className="text-xl font-bold flex items-center justify-center mb-4">
          <Image
            src="https://i.ibb.co/Krrpxjs/DALLE-2023-12-23-22-57-32-Anime-style-character-with-long-blonde-hair-and-bright-blue-eyes-She-wears.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-full rounded-md"
          />
        </span>
        <form onSubmit={handleSubmit}>
          <InputField label="Username" type="text" name="username" value={formData.username} onChange={handleChange} />
          <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
          <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <button type="submit" className="w-full py-2 px-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
