import React from 'react';
import style from './style.module.css';

const YoutubeEmbed = ({
  id,
  title,
  thumbnail,
  startTime,
  endTime,
  disallowFullscreen,
  showRelatedVideos,
  playerControls,
  keyboardControls,
}) => {
  return (
    <>
      <div className={style.youtubeEmbed}>
        <iframe
          className={style.iframe}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          srcDoc={`
          <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:20%;text-align:center;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA1MyI+CiAgPHBhdGggZD0iTTc0LDExLjYyQTEwLjU5LDEwLjU5LDAsMCwwLDYzLjM5LDEuMDZTNTAuMzQsMCwzNi45MywwQzIzLjcyLDAsMTEuMDksMS4wNiwxMS4wOSwxLjA2QTEwLjU5LDEwLjU5LDAsMCwwLC41MywxMS42MlMwLDE5LjIzLDAsMjcuNDdDMCwzNSwuNTMsNDEuMjEuNTMsNDEuMjFBMTAuNTksMTAuNTksMCwwLDAsMTEuMDksNTEuNzdzMTMuNDcsMS4wNiwyNy4xNiwxLjA2YzEzLDAsMjUuMTQtMS4wNiwyNS4xNC0xLjA2QTEwLjYsMTAuNiwwLDAsMCw3NCw0MS4yMXMuNTMtNi42Ni41My0xNC40OGMwLTgtLjUzLTE1LjExLS41My0xNS4xMVoiIHN0eWxlPSJmaWxsOiAjZjEyYjI0O2ZpbGwtcnVsZTogZXZlbm9kZDtpc29sYXRpb246IGlzb2xhdGUiLz4KICA8cGF0aCBkPSJNMzAsMTYuMTFWMzYuNzJMNTAuMDgsMjYuMTVaIiBzdHlsZT0iZmlsbDogI2ZmZjsgZmlsbC1ydWxlOiBldmVub2RkIi8+Cjwvc3ZnPgo=) no-repeat center / contain}</style>
          <a href=https://www.youtube.com/embed/${id}?autoplay=1${
            startTime ? `&start=${startTime}` : ''
          }${endTime ? `&end=${endTime}` : ''}${
            disallowFullscreen ? '&fs=0' : ''
          }${showRelatedVideos ? '&rel=0' : ''}${
            playerControls ? '&controls=0' : ''
          }${keyboardControls ? '&disablekb=0' : ''}>
          <img src=${
            thumbnail
              ? thumbnail
              : `https://img.youtube.com/vi/${id}/hqdefault.jpg`
          } alt='${title}'><span></span></a>`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
    </>
  );
};

export default YoutubeEmbed;
