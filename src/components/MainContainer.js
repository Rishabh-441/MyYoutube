import React from 'react';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import { useSelector } from 'react-redux';


const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`${isMenuOpen ? 'w-10/12' : 'w-full'} flex flex-col`}>
        <ButtonList />
        <VideoContainer />
    </div>
  );
};

export default MainContainer;
