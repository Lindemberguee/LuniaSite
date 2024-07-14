"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import './table.css';

interface TowerRankData {
  rank: number;
  characterName: string;
  level: number;
  time: string;
}

const defaultImg = 'https://file.valofe.com/Valofe_file/web/luniaz-revival/images/main/bg-card-info-min.png';

const fetchTowerData = async (): Promise<TowerRankData[]> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY || 'seu_api_key'; // Obtenha a chave da API do .env ou use um valor padrão
  const response = await axios.get<TowerRankData[]>('http://localhost:3000/api/public/tower1Ranking', {
    headers: {
      'x-api-key': apiKey
    }
  });
  return response.data;
};

const RankingTable: React.FC<{ towerData: TowerRankData[] }> = ({ towerData }) => (
  <div className="w-full bg-tablecolor rounded-lg border border-slate-800">
    <div className='bg-tablaHead-color border-t-4 border-red-600 rounded-lg p-4 mb-4 flex flex-col'>
      <h1 className="text-3xl font-bold text-gray-200">Top Ranking Torre</h1>
      <p className="text-gray-400">Abaixo está o ranking com o menor tempo e maior piso da torre</p>
    </div>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-tablecolor rounded-lg shadow-md">
        <thead className="bg-gray-700">
          <tr className='text-gray-400'>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Posição</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Personagem</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Piso</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">Tempo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-600">
          {towerData.map((item, index) => (
            <tr key={index} className='text-gray-300 hover:bg-gray-700 transition duration-200'>
              <td className="px-6 py-4 whitespace-nowrap">{item.rank}</td>
              <td className="px-6 py-4">
                <div className='flex items-center space-x-4'>
                  <Image src={defaultImg} alt="Character" width={48} height={48} className='w-12 h-12 rounded-full'/>
                  <p className="whitespace-nowrap">{item.characterName}</p>
                </div>
              </td>
              <td className="px-6 py-4">{item.level}</td>
              <td className="px-6 py-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='bg-tablaHead-color rounded-lg p-2 mb-2 flex flex-col'>
      <p className="text-gray-300 text-center">View Statistics</p>
    </div>
  </div>
);

const TrainingVideo: React.FC<{ imgSrc: string, title: string, character: string }> = ({ imgSrc, title, character }) => (
  <div className='p-4 flex space-y-4 border-b border-slate-800'>
    <Image src={imgSrc} alt={title} width={112} height={112} className='w-28 h-28'/>
    <div className='m-4 flex flex-col text-slate-300'>
      <p className='mb-2'>{title}</p>
      <div className='flex space-x-2'>
        <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>{character}</p>
        <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Meta</p>
        <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
          <span className='bg-red-600 rounded-full w-2 h-2'></span>DDZ
        </p>
        <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
          <span className='bg-green-600 rounded-full w-2 h-2'></span>DDX
        </p>
      </div>
    </div>
  </div>
);

const RankingTower: React.FC = () => {
  const [towerData, setTowerData] = useState<TowerRankData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTowerData();
        setTowerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-main-color p-12 space-x-4">
      <RankingTable towerData={towerData} />
      <div className="w-full bg-tablecolor rounded-lg">
        <div className='border border-slate-800 rounded-xl flex flex-col justify-between h-full'>
          <div className='bg-tablaHead-color border-t-4 border-red-600 rounded-lg p-4 mb-4 flex flex-col'>
            <h1 className="text-2xl font-bold text-gray-200">Training Videos</h1>
            <p className="text-gray-400">Unlock your Valorant potential with our lineups guide. Understand optimal character!</p>
          </div>
          <TrainingVideo
            imgSrc="https://static.wikia.nocookie.net/lunia/images/7/7b/Profile_DarkEir.jpg"
            title="Aggressive Early Round Two Player Dash Setup for A Lobby"
            character="Dark Eir"
          />
          <TrainingVideo
            imgSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMMvQ24UUnOUxVkdy45MJrzWNP7VEShgSvl_cWqJ8vCf2gcWMicWcx0PgpP5woATxR5bg_nrQLlA8sgSixC1KQehJQuvBxZuqGeQQTODiM1fZg76QRkN-aXPoQjp0zo9fSjrQjq4Zx4xI/s1600/Lunia-Online-Art-Works-006-Free-MMO-Games.jpg"
            title="Aggressive Early Round Two Player Dash Setup for A Lobby"
            character="Ryan"
          />
          <TrainingVideo
            imgSrc="https://static.wikia.nocookie.net/lunia/images/d/d1/Profile_Iris.jpg"
            title="Aggressive Early Round Two Player Dash Setup for A Lobby"
            character="Iris"
          />
          <div className='bg-tablaHead-color rounded-lg p-4 mb-4 flex flex-col'>
            <p className="text-gray-300 text-center">View Gameplays</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingTower;
