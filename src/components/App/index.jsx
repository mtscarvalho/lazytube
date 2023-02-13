import React from 'react';
import Header from '../Header';
import Generator from '../Generator';
import Results from '../Results';
import Footer from '../Footer';

const App = () => {
  const [videoUrl, setVideoUrl] = React.useState(
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  );
  const [videoTitle, setVideoTitle] = React.useState(
    'Rick Astley - Never Gonna Give You Up (Official Music Video)'
  );
  const [videoId, setVideoId] = React.useState('dQw4w9WgXcQ');
  const [customThumbnail, setcustomThumbnail] = React.useState('');

  return (
    <>
      <Header />
      <main>
        <Generator
          videoId={videoId}
          videoTitle={videoTitle}
          customThumbnail={customThumbnail}
          setVideoUrl={setVideoUrl}
          setVideoId={setVideoId}
          setVideoTitle={setVideoTitle}
          setcustomThumbnail={setcustomThumbnail}
        />
        <Results
          videoUrl={videoUrl}
          videoId={videoId}
          videoTitle={videoTitle}
          customThumbnail={customThumbnail}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
