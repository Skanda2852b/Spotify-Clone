import React, { useContext } from 'react';
import SideBar from './Components/SideBar';
import Player from './Components/Player';
import Display from './Components/Display';
import { playerContext } from './Context/playerContext';

const App = () => {
  const { audioRef, track } = useContext(playerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar />
        <Display />
      </div>
      <Player />
      {audioRef && track && track.file && (
        <audio src={track.file} ref={audioRef} preload='auto'></audio>
      )}
    </div>
  );
};

export default App;
