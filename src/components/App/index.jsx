import React, { useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import Generator from '../Generator';
import Footer from '../Footer';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [videoSettings, setVideoSettings] = useState({
    id: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    customThumbnail: '',
    startTime: '',
    endTime: '',
    aspectRatio: '16/9',
    responsiveDesign: false,
    disallowFullscreen: false,
    showRelatedVideos: false,
    playerControls: false,
    keyboardControls: false,
  });

  return (
    <>
      <Header />
      <Main>
        <Generator
          videoSettings={videoSettings}
          setVideoSettings={setVideoSettings}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      </Main>
      <Footer />
    </>
  );
};

export default App;
