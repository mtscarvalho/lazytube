import React from 'react';
import Input from '../Input';
import Select from '../Select';
import Checkbox from '../Checkbox';
import SnippetBox from '../SnippetBox';
import Button from '../Button';
import YoutubeEmbed from '../YoutubeEmbed';
import style from './style.module.css';

const Generator = ({
  videoId,
  videoTitle,
  videoUrl,
  startTime,
  endTime,
  aspectRatio,
  disallowFullscreen,
  showRelatedVideos,
  playerControls,
  keyboardControls,
  isSubmitted,
  customThumbnail,
  setVideoUrl,
  setVideoId,
  setVideoTitle,
  setStartTime,
  setEndTime,
  setAspectRatio,
  setDisallowFullscreen,
  setShowRelatedVideos,
  setPlayerControls,
  setKeyboardControls,
  setIsSubmitted,
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
    const videoId = getVideoId(videoUrl);
    const videoTitle = formData.get('videoTitle');
    const startTime = formData.get('startTime');
    const endTime = formData.get('endTime');
    const aspectRatio = formData.get('aspectRatio');
    const disallowFullscreen = formData.get('disallowFullscreen');
    const showRelatedVideos = formData.get('showRelatedVideos');
    const playerControls = formData.get('playerControls');
    const keyboardControls = formData.get('keyboardControls');
    const customThumbnail = formData.get('customThumbnail');

    setVideoId(videoId);
    setVideoUrl(videoUrl);
    setVideoTitle(videoTitle);
    setcustomThumbnail(customThumbnail);
    setStartTime(startTime);
    setEndTime(endTime);
    setAspectRatio(aspectRatio);
    setDisallowFullscreen(disallowFullscreen);
    setShowRelatedVideos(showRelatedVideos);
    setPlayerControls(playerControls);
    setKeyboardControls(keyboardControls);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
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
                placeholder="Rick Astley - Never Gonna Give You..."
                type="text"
                name="videoTitle"
              />
              <Input
                label="Custom thumbnail URL (not required)"
                placeholder="https://domain.com/images/thumbnail.jpg"
                type="url"
                name="customThumbnail"
              />
              <Input
                label="Start time"
                placeholder="0"
                type="number"
                name="startTime"
                caption="in seconds"
              />
              <Input
                label="End time"
                placeholder="0"
                type="number"
                name="endTime"
                caption="in seconds"
              />
              <Select
                label="Aspect ratio"
                name="aspectRatio"
                options={[
                  { value: '16/9', label: '16:9' },
                  { value: '4/3', label: '4:3' },
                ]}
              />
              <Checkbox
                label="Disallow fullscreen"
                name="disallowFullscreen"
              />
              <Checkbox
                label="Show related videos"
                name="showRelatedVideos"
              />
              <Checkbox
                label="Disable player controls"
                name="playerControls"
              />
              <Checkbox
                label="Disable keyboard controls"
                name="keyboardControls"
              />
            </fieldset>
            <footer className={style.formFooter}>
              <Button type="submit">Generate</Button>
            </footer>
          </form>
        </div>
        <div>
          <YoutubeEmbed
            id={videoId}
            title={videoTitle}
            startTime={startTime}
            endTime={endTime}
            aspectRatio={aspectRatio}
            disallowFullscreen={disallowFullscreen}
            showRelatedVideos={showRelatedVideos}
            playerControls={playerControls}
            keyboardControls={keyboardControls}
            customThumbnail={customThumbnail}
          />
          {/* prettier-ignore */}
          <SnippetBox status={isSubmitted ? 'generated' : 'idle'} language="HTML">{`<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${videoId}"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:20%;text-align:center;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA1MyI+CiAgPHBhdGggZD0iTTc0LDExLjYyQTEwLjU5LDEwLjU5LDAsMCwwLDYzLjM5LDEuMDZTNTAuMzQsMCwzNi45MywwQzIzLjcyLDAsMTEuMDksMS4wNiwxMS4wOSwxLjA2QTEwLjU5LDEwLjU5LDAsMCwwLC41MywxMS42MlMwLDE5LjIzLDAsMjcuNDdDMCwzNSwuNTMsNDEuMjEuNTMsNDEuMjFBMTAuNTksMTAuNTksMCwwLDAsMTEuMDksNTEuNzdzMTMuNDcsMS4wNiwyNy4xNiwxLjA2YzEzLDAsMjUuMTQtMS4wNiwyNS4xNC0xLjA2QTEwLjYsMTAuNiwwLDAsMCw3NCw0MS4yMXMuNTMtNi42Ni41My0xNC40OGMwLTgtLjUzLTE1LjExLS41My0xNS4xMVoiIHN0eWxlPSJmaWxsOiAjZjEyYjI0O2ZpbGwtcnVsZTogZXZlbm9kZDtpc29sYXRpb246IGlzb2xhdGUiLz4KICA8cGF0aCBkPSJNMzAsMTYuMTFWMzYuNzJMNTAuMDgsMjYuMTVaIiBzdHlsZT0iZmlsbDogI2ZmZjsgZmlsbC1ydWxlOiBldmVub2RkIi8+Cjwvc3ZnPgo=) no-repeat center / contain}</style><a href=https://www.youtube.com/embed/${videoId};autoplay=1;><img src=${customThumbnail ? customThumbnail : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt='${videoTitle}'><span></span></a>"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="The Dark Knight Rises: What Went Wrong?"
></iframe>`}
        </SnippetBox>
        </div>
      </div>
    </section>
  );
};

export default Generator;
