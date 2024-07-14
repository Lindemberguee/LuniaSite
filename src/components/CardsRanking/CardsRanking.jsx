import styles from './CardsRanking.module.css';
import PlayerCard from './PlayerCard';
import '../../components/styles.css';

const players = [
  {
    rank: 1,
    name: 'Takt',
    image: 'https://file.valofe.com/Valofe_file/web/luniaz-revival/images/event/open_event/main/cha4-min.png',
    character: 'DacyBeta',
    rb: 32,
  },
  {
    rank: 2,
    name: 'Takt2',
    image: 'https://file.valofe.com/Valofe_file/web/luniaz-revival/images/event/open_event/main/cha2-min.png',
    character: 'DainnBeta',
    rb: 20,
  },
  {
    rank: 3,
    name: 'Takt3',
    image: 'https://file.valofe.com/Valofe_file/web/luniaz-revival/images/event/open_event/sec2/cha-intro-cha6-min.png',
    character: 'GaonBeta',
    rb: 12,
  },
];

export default function CardsRanking() {
  return (
    <div className="p-8 flex flex-wrap justify-center space-x-4 space-y-4 sm:space-y-0 sm:flex-nowrap rounded-md shadow-lg">
      {players.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
}
