import React from 'react';
import Input from '../Input';
import Button from '../Button';
import YoutubeEmbed from '../YoutubeEmbed';
import style from './style.module.css';

const Generator = ({
  videoId,
  videoTitle,
  customThumbnail,
  setVideoUrl,
  setVideoId,
  setVideoTitle,
  setcustomThumbnail,
}) => {
  const getVideoId = (url) => {
    return url.match(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    )[7];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const videoUrl = formData.get('videoUrl');
    const videoTitle = formData.get('videoTitle');
    const customThumbnail = formData.get('customThumbnail');
    const videoId = getVideoId(videoUrl);

    setVideoUrl(videoUrl);
    setVideoId(videoId);
    setVideoTitle(videoTitle);
    setcustomThumbnail(customThumbnail);
  };

  return (
    <section>
      <div className="container">
        <div className="content">
          <h1>Youtube Lazy Load Embedded Generator</h1>
          {/* prettier-ignore */}
          <p>Easily embed Youtube videos without affecting your website's page speed and <strong>without using any Javascript code!</strong> 🚀</p>
          <form className={style.form} onSubmit={handleSubmit}>
            <fieldset className={style.formFieldset}>
              <Input
                label="Video URL"
                placeholder="https://www.youtube.com/watch?v=..."
                type="url"
                name="videoUrl"
                pattern="^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*"
                required
                onInvalid={({ target }) => {
                  target.setCustomValidity(
                    'Please enter a valid Youtube URL'
                  );
                }}
              />
              <Input
                label="Video Title"
                placeholder="The Dark Knight Rises: What Went..."
                type="text"
                name="videoTitle"
                required
              />
              <Input
                label="Custom thumbnail URL (not required)"
                placeholder="https://domain.com/images/thumbnail.jpg"
                type="url"
                name="customThumbnail"
              />
            </fieldset>
            <footer className={style.formFooter}>
              <Button type="submit">Generate</Button>
            </footer>
          </form>
        </div>
        <YoutubeEmbed
          id={videoId}
          title={videoTitle}
          thumbnail={customThumbnail}
        />
      </div>
    </section>
  );
};

export default Generator;
