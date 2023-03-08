import React, { useRef } from 'react';
import style from './style.module.css';

const Snippet = ({ videoSettings, isSubmitted }) => {
  const codeRef = useRef(null);
  const video = videoSettings;
  const status = isSubmitted ? 'submitted' : 'idle';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeRef.current.innerText)
      .then(() => alert('Code copied to clipboard!'))
      .catch(() => alert('Error copying code to clipboard!'));
  };

  return (
    <div className={style.snippet} data-status={status}>
      <div className={style.snippetHeader}>
        <span className={style.snippetLanguage}>HTML</span>
        <button
          className={style.copyButton}
          type="button"
          onClick={copyToClipboard}
        >
          Copy code
        </button>
      </div>
      <pre className={style.snippetBody}>
        {/* prettier-ignore */}
        <code
          className={style.snippetCode} tabIndex="0" ref={codeRef}>
          {`<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${video.id}"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:20%;text-align:center;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA1MyI+CiAgPHBhdGggZD0iTTc0LDExLjYyQTEwLjU5LDEwLjU5LDAsMCwwLDYzLjM5LDEuMDZTNTAuMzQsMCwzNi45MywwQzIzLjcyLDAsMTEuMDksMS4wNiwxMS4wOSwxLjA2QTEwLjU5LDEwLjU5LDAsMCwwLC41MywxMS42MlMwLDE5LjIzLDAsMjcuNDdDMCwzNSwuNTMsNDEuMjEuNTMsNDEuMjFBMTAuNTksMTAuNTksMCwwLDAsMTEuMDksNTEuNzdzMTMuNDcsMS4wNiwyNy4xNiwxLjA2YzEzLDAsMjUuMTQtMS4wNiwyNS4xNC0xLjA2QTEwLjYsMTAuNiwwLDAsMCw3NCw0MS4yMXMuNTMtNi42Ni41My0xNC40OGMwLTgtLjUzLTE1LjExLS41My0xNS4xMVoiIHN0eWxlPSJmaWxsOiAjZjEyYjI0O2ZpbGwtcnVsZTogZXZlbm9kZDtpc29sYXRpb246IGlzb2xhdGUiLz4KICA8cGF0aCBkPSJNMzAsMTYuMTFWMzYuNzJMNTAuMDgsMjYuMTVaIiBzdHlsZT0iZmlsbDogI2ZmZjsgZmlsbC1ydWxlOiBldmVub2RkIi8+Cjwvc3ZnPgo=) no-repeat center / contain}</style><a href=https://www.youtube.com/embed/${video.id};autoplay=1;><img src=${video.customThumbnail ? video.customThumbnail : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt='${video.title}'><span></span></a>"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="The Dark Knight Rises: What Went Wrong?"
></iframe>`}
        </code>
      </pre>
    </div>
  );
};

export default Snippet;
