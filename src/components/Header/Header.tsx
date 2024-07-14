"use client"
import { useState, useEffect } from "react";
import { FaWindows } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { GrHost } from "react-icons/gr";
import { GiBossKey } from "react-icons/gi";
import CardsRanking from "./../CardsRanking/CardsRanking";

const apiGetOnlinePlayers = 'http://localhost:3000/api/public/getCharacterOnline';

export default function Header() {
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);

  useEffect(() => {
    const fetchOnlinePlayers = async () => {
      const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'seu_api_key'; // Obtenha a chave da API do .env ou use um valor padrão

      try {
        const response = await fetch(apiGetOnlinePlayers, {
          headers: {
            'x-api-key': apiKey
          }
        });
        if (!response.ok) {
          throw new Error('Erro na resposta da API');
        }
        const data = await response.json();
        setOnlinePlayers(parseInt(data.onlineCharacters, 10)); // Certifique-se de converter para número
      } catch (error) {
        console.error("Erro ao buscar jogadores online:", error);
      }
    };

    fetchOnlinePlayers();
  }, []);

  return (
    <header className="relative bg-cover bg-center h-screen text-white">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="h-screen flex space-x-6 items-center justify-center">
        <div className="relative z-0 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl font-bold md:text-4xl">Welcome to Lunia Realm</h1>
          <p className="mt-4 text-lg md:text-xl">Your success starts here</p>
          <div className="flex flex-col items-center justify-center mt-6">
            <button className="w-48 flex items-center gap-4 h-12 justify-center rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300">
              <FaWindows className="text-xl" />
              Download Now
            </button>
            <div className="flex space-x-2 mt-4 font-medium">
              <div className="flex w-40 space-x-2 items-center justify-center bg-blue-600 p-2 rounded-lg">
                <SiYoutubegaming />
                <p>{onlinePlayers !== null ? `${onlinePlayers} Players` : "Loading..."}</p>
              </div>
              <div className="flex w-40 space-x-2 items-center justify-center bg-purple-800 p-2 rounded-lg">
                <GrHost />
                <p>Host Brazil</p>
              </div>
              <div className="flex w-40 space-x-2 items-center justify-center bg-green-600 p-2 rounded-lg">
                <GiBossKey />
                <p>DDM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-1 flex flex-col items-center justify-center h-full px-4 text-center">
          <CardsRanking />
        </div>
      </div>
    </header>
  );
}
