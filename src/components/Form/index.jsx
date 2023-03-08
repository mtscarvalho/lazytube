import React from 'react';
import Input from '../Input';
import Select from '../Select';
import Checkbox from '../Checkbox';
import Button from '../Button';
import style from './style.module.css';

const Form = ({ setVideoSettings, setIsSubmitted }) => {
  const getVideoId = (url) => {
    return url.match(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    )[7];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    setIsSubmitted(true);
    setVideoSettings({
      id: getVideoId(formData.get('url')),
      title: formData.get('title'),
      url: formData.get('url'),
      customThumbnail: formData.get('customThumbnail'),
      startTime: formData.get('startTime'),
      endTime: formData.get('endTime'),
      aspectRatio: formData.get('aspectRatio'),
      disallowFullscreen: formData.get('disallowFullscreen'),
      showRelatedVideos: formData.get('showRelatedVideos'),
      playerControls: formData.get('playerControls'),
      keyboardControls: formData.get('keyboardControls'),
      responsiveDesign: formData.get('responsiveDesign'),
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <fieldset className={style.formFieldset}>
        <Input
          label="Video URL"
          placeholder="https://www.youtube.com/watch?v=..."
          type="url"
          name="url"
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
          name="title"
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
  );
};

export default Form;
