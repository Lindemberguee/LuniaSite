import Image from 'next/image';

export default function SectionTableRight() {
  return (
    <div className="w-full bg-tablecolor rounded-lg">
      <div className='border solid border-slate-800 rounded-xl flex flex-col justify-between h-full'>
        <div className='bg-tablaHead-color border-t-4 border-red-600 rounded-lg p-2 mb-2 flex flex-col'>
          <h1 className="text-2xl font-bold text-gray-200">Training Videos</h1>
          <p className="text-gray-600">Unlock your Valorant potential with our lineups guide. Understand optimal character!</p>
        </div>
        <div className='p-2 flex space-y-4 h-32 border-b border-slate-800'>
          <Image src="https://static.wikia.nocookie.net/lunia/images/7/7b/Profile_DarkEir.jpg" alt="" width={112} height={112} className='w-28 h-28'/>
          <div className='m-4 flex flex-col text-slate-300'>
            <p className='mb-2'>Aggressive Early Round Two Player Dash Setup for A Lobby</p>
            <div className='flex space-x-2'>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Dark Eir</p>
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
        <div className='p-2 flex space-y-4 h-32 border-b border-slate-800'>
          <Image src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMMvQ24UUnOUxVkdy45MJrzWNP7VEShgSvl_cWqJ8vCf2gcWMicWcx0PgpP5woATxR5bg_nrQLlA8sgSixC1KQehJQuvBxZuqGeQQTODiM1fZg76QRkN-aXPoQjp0zo9fSjrQjq4Zx4xI/s1600/Lunia-Online-Art-Works-006-Free-MMO-Games.jpg" alt="" width={112} height={112} className='w-28 h-28'/>
          <div className='m-4 flex flex-col text-slate-300'>
            <p className='mb-2'>Aggressive Early Round Two Player Dash Setup for A Lobby</p>
            <div className='flex space-x-2'>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Ryan</p>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Meta</p>
              <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-red-600 rounded-full w-2 h-2'></span>DDZ
              </p>
              <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-blue-600 rounded-full w-2 h-2'></span>DDM
              </p>
              <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-green-600 rounded-full w-2 h-2'></span>DDX
              </p>
            </div>
          </div>
        </div>
        <div className='p-2 flex space-y-4 h-32 border-b border-slate-800'>
          <Image src="https://static.wikia.nocookie.net/lunia/images/d/d1/Profile_Iris.jpg" alt="" width={112} height={112} className='w-28 h-28'/>
          <div className='m-4 flex flex-col text-slate-300'>
            <p className='mb-2'>Aggressive Early Round Two Player Dash Setup for A Lobby</p>
            <div className='flex space-x-2'>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Iris</p>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>Meta</p>
              <p className='w-24 h-8 text-center flex gap-2 items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-red-600 rounded-full w-2 h-2'></span>DDZ
              </p>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-yellow-600 rounded-full w-2 h-2'></span>Cave
              </p>
              <p className='w-24 h-8 text-center flex items-center justify-center rounded-sm text-slate-600 bg-card-leaderboard font-bold'>
                <span className='bg-purple-600 rounded-full w-2 h-2'></span>Stage
              </p>
            </div>
          </div>
        </div>
        <div className='bg-tablaHead-color rounded-lg p-2 mb-2 flex flex-col'>
          <p className="text-gray-300 text-center">View Gameplays</p>
        </div>
      </div>
    </div>
  )
}
