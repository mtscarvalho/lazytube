import React from 'react';
import SnippetBox from '../SnippetBox';
import YoutubeEmbed from '../YoutubeEmbed';
import Form from '../Form';

const Generator = ({
  videoSettings,
  setVideoSettings,
  isSubmitted,
  setIsSubmitted,
}) => {
  return (
    <section>
      <div className="container">
        <div className="content">
          <h1>Youtube Lazy Load Embedded Generator</h1>
          {/* prettier-ignore */}
          <p>Easily embed Youtube videos without affecting your website's page speed and <strong>without using any Javascript code!</strong> 🚀</p>
          <Form
            setVideoSettings={setVideoSettings}
            setIsSubmitted={setIsSubmitted}
          />
        </div>
        <div>
          <YoutubeEmbed videoSettings={videoSettings} />
          <SnippetBox
            videoSettings={videoSettings}
            isSubmitted={isSubmitted}
          />
        </div>
      </div>
    </section>
  );
};

export default Generator;
