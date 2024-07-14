import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './PlayerCard.module.css';

const cardSizes = {
  1: 'h-[350px]',
  2: 'h-[350px]', // 5% menor que o primeiro card
  3: 'h-[350px]',  // 10% menor que o primeiro card
};

export default function PlayerCard({ player }) {
  return (
    <div
      className={`relative ${styles.card} flex flex-col justify-between w-64 ${cardSizes[player.rank]} p-4 rounded-lg shadow-lg bg-card-background fade-in`}
    >
      <div className={`${styles.rank} absolute -top-6 left-1/2 transform -translate-x-1/2 bounce-in`}>
        <p className="bg-card-leaderboard-secundary flex items-center justify-center w-16 h-12 rounded-md text-white shadow-md">
          #{player.rank}
        </p>
      </div>
      <div className="mt-6 mb-4 font-medium text-xl text-center">
        {player.name}
      </div>
      <div className="flex items-center justify-center align-middle mb-4 slide-in-up ">
        <Image
          src={player.image}
          className="object-cover rounded-full"
          alt={`Player ${player.rank}`}
          width={90}
          height={90}
        />
      </div>
      <div className="text-center mb-12">
        <p className="mb-2 text-gray-300 text-lg">{player.character}</p>
        <p className="mb-2 text-gray-500">RB: {player.rb}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-12 bg-card-leaderboard text-white rounded-b-lg">
        <p>Leaderboard</p>
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  player: PropTypes.shape({
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    rb: PropTypes.number.isRequired,
  }).isRequired,
};
