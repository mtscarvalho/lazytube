import React, { useRef } from 'react';
import style from './style.module.css';

const Snippet = ({ children, language, status }) => {
  const codeRef = useRef(null);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeRef.current.innerText)
      .then(() => alert('Code copied to clipboard!'))
      .catch(() => alert('Error copying code to clipboard!'));
  };

  return (
    <div className={style.snippet} data-status={status}>
      <div className={style.snippetHeader}>
        <span className={style.snippetLanguage}>{language}</span>
        <button
          className={style.copyButton}
          type="button"
          onClick={copyToClipboard}
        >
          Copy code
        </button>
      </div>
      <pre className={style.snippetBody}>
        <code
          className={style.snippetCode}
          tabIndex="0"
          ref={codeRef}
        >
          {children}
        </code>
      </pre>
    </div>
  );
};

export default Snippet;
