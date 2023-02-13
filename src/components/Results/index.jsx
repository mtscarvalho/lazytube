import React from 'react';
import SnippetBox from '../SnippetBox';
import style from './style.module.css';

const Results = ({ videoId, videoTitle, customThumbnail }) => {
  return (
    <section>
      <div className="container">
        <SnippetBox language="HTML">
          {`<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${videoId}"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:20%;text-align:center;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA1MyI+CiAgPHBhdGggZD0iTTc0LDExLjYyQTEwLjU5LDEwLjU5LDAsMCwwLDYzLjM5LDEuMDZTNTAuMzQsMCwzNi45MywwQzIzLjcyLDAsMTEuMDksMS4wNiwxMS4wOSwxLjA2QTEwLjU5LDEwLjU5LDAsMCwwLC41MywxMS42MlMwLDE5LjIzLDAsMjcuNDdDMCwzNSwuNTMsNDEuMjEuNTMsNDEuMjFBMTAuNTksMTAuNTksMCwwLDAsMTEuMDksNTEuNzdzMTMuNDcsMS4wNiwyNy4xNiwxLjA2YzEzLDAsMjUuMTQtMS4wNiwyNS4xNC0xLjA2QTEwLjYsMTAuNiwwLDAsMCw3NCw0MS4yMXMuNTMtNi42Ni41My0xNC40OGMwLTgtLjUzLTE1LjExLS41My0xNS4xMVoiIHN0eWxlPSJmaWxsOiAjZjEyYjI0O2ZpbGwtcnVsZTogZXZlbm9kZDtpc29sYXRpb246IGlzb2xhdGUiLz4KICA8cGF0aCBkPSJNMzAsMTYuMTFWMzYuNzJMNTAuMDgsMjYuMTVaIiBzdHlsZT0iZmlsbDogI2ZmZjsgZmlsbC1ydWxlOiBldmVub2RkIi8+Cjwvc3ZnPgo=) no-repeat center / contain}</style><a href=https://www.youtube.com/embed/${videoId};autoplay=1;><img src=${
            customThumbnail
              ? customThumbnail
              : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
          } alt='${videoTitle}'><span></span></a>"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="The Dark Knight Rises: What Went Wrong?"
></iframe>`}
        </SnippetBox>
        <SnippetBox language="HTML">
          {`/**
 * It'll make your video responsive.
 * To make it work, you need to add a div with the 
 * class "video" around your iframe.
 */

.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}

.video > * {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
}`}
        </SnippetBox>
      </div>
    </section>
  );
};

export default Results;
