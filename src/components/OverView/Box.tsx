import React from 'react';
import Image from 'next/image';
import { Dashboard } from '../Dashboard/dash';

interface Character {
  name: string;
  bestMap: string;
  roles: string[];
  image: string;
}

const characters: Character[] = [
  {
    name: 'Kali',
    bestMap: 'DDZ',
    roles: ['Healer', 'Damage Dealer', 'Support'],
    image: 'https://static.wikia.nocookie.net/eternal-lunia/images/1/16/PvPLadderCharacter10.png'
    // Adicione mais personagens conforme necessário
  }
];

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="mb-8">
      <div className="h-32 w-full flex space-x-4 items-center justify-center text-slate-300 mb-4">
        <Image
          src={character.image}
          alt={character.name}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xl">{character.name}</p>
          <p className="text-sm">Best Map</p>
          <p className='w-24 h-8 text-center flex gap-2 items-center justify-start rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
            <span className='bg-red-600 rounded-full w-2 h-2 ml-2'></span>{character.bestMap}
          </p>
        </div>
      </div>
      <div className="h-32 w-full flex space-x-4 items-center justify-center text-slate-300">
        <div className="flex flex-col gap-1">
          <h2 className="text-center text-xl">Role:</h2>
          <div className="font-bold flex justify-center items-center text-sm gap-2">
            {character.roles.map((role, roleIndex) => (
              <p key={roleIndex} className={`rounded-md p-1 font-thin ${role === 'Healer' ? 'bg-custom-green' : role === 'Damage Dealer' ? 'bg-red-600' : 'bg-blue-600'}`}>
                {role}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoBoxProps {
  title: string;
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, children }) => {
  return (
    <div className="bg-boxtrack-color w-full h-full p-6 rounded-md flex flex-col items-center justify-center text-center text-white">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm">{children}</p>
    </div>
  );
}

const BoxCharacters: React.FC = () => {
  return (
    <div className="bg-main-color w-full p-12 flex justify-center space-x-4">
      <div className="bg-boxtrack-color flex flex-col justify-center items-center rounded-md w-96 h-96 p-4">
        <div className="flex space-x-4 text-slate-300 font-bold mb-4">
          <p className="rounded-md p-2 text-sm bg-boxtrackbackground-color">Overall</p>
          <p className="rounded-md p-2 text-sm bg-boxtrackbackground-color">Season -1 Emphasis</p>
        </div>
        <div className="overflow-hidden w-full">
          {characters.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
      </div>

      <div className="flex-col w-[40%] rounded-md flex space-y-2">
        <InfoBox title="Latest Updates">
          Stay up-to-date with the latest news and updates from Lunia Realm. From game patches to new events, we&apos;ve got you covered. Check back often to never miss out on the action!
        </InfoBox>
        <InfoBox title="Join Our Community">
          Connect with fellow players, participate in community events, and share your adventures. Join our Discord server and follow us on social media to stay connected!
          <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white font-semibold py-2 px-4 rounded-md mt-4">
            Join Discord
          </button>
        </InfoBox>
      </div>
    </div>
  );
}

export default BoxCharacters;
