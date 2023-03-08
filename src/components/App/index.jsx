import React, { useState } from 'react';
import Header from '../Header';
import Main from '../Main';
import Generator from '../Generator';
import Footer from '../Footer';

const App = () => {
  const [videoUrl, setVideoUrl] = useState(
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  );
  const [videoTitle, setVideoTitle] = useState(
    'Rick Astley - Never Gonna Give You Up (Official Music Video)'
  );
  const [videoId, setVideoId] = useState('dQw4w9WgXcQ');
  const [customThumbnail, setcustomThumbnail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16/9');
  const [disallowFullscreen, setDisallowFullscreen] = useState(false);
  const [showRelatedVideos, setShowRelatedVideos] = useState(false);
  const [playerControls, setPlayerControls] = useState(false);
  const [keyboardControls, setKeyboardControls] = useState(false);

  return (
    <>
      <Header />
      <Main>
        <Generator
          videoId={videoId}
          videoTitle={videoTitle}
          videoUrl={videoUrl}
          customThumbnail={customThumbnail}
          startTime={startTime}
          endTime={endTime}
          aspectRatio={aspectRatio}
          disallowFullscreen={disallowFullscreen}
          showRelatedVideos={showRelatedVideos}
          playerControls={playerControls}
          keyboardControls={keyboardControls}
          setVideoUrl={setVideoUrl}
          setVideoId={setVideoId}
          setVideoTitle={setVideoTitle}
          setcustomThumbnail={setcustomThumbnail}
          setIsSubmitted={setIsSubmitted}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          setAspectRatio={setAspectRatio}
          setDisallowFullscreen={setDisallowFullscreen}
          setShowRelatedVideos={setShowRelatedVideos}
          setPlayerControls={setPlayerControls}
          setKeyboardControls={setKeyboardControls}
        />
      </Main>
      <Footer />
    </>
  );
};

export default App;
