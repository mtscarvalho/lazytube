const form = document.querySelector('.form');
const defaultVideoId = 'Y8Wp3dafaMQ';
const defaultVideoTitle = 'The Dark Knight Rises: What Went Wrong?';

const codeBlocks = document.querySelectorAll('[data-snippet]');
const htmlCode = document.querySelector('[data-snippet=html] code');
const cssCode = document.querySelector('[data-snippet=css] code');

const videoPreview = document.querySelector('.video');
const videoUrl = document.getElementById('input-url').value;
const videoTitle = document.getElementById('input-name').value;
const videoImage = document.getElementById('input-image').value;
const videoId = videoUrl.match(
  /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
)[7];

/**
 *
 */

const iframeCode = (id, title, image) => {
  const defaultThumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const thumbnail = image != '' ? image : defaultThumbnail;

  return `<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/${id}"
  srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:20%;text-align:center;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NSA1MyI+CiAgPHBhdGggZD0iTTc0LDExLjYyQTEwLjU5LDEwLjU5LDAsMCwwLDYzLjM5LDEuMDZTNTAuMzQsMCwzNi45MywwQzIzLjcyLDAsMTEuMDksMS4wNiwxMS4wOSwxLjA2QTEwLjU5LDEwLjU5LDAsMCwwLC41MywxMS42MlMwLDE5LjIzLDAsMjcuNDdDMCwzNSwuNTMsNDEuMjEuNTMsNDEuMjFBMTAuNTksMTAuNTksMCwwLDAsMTEuMDksNTEuNzdzMTMuNDcsMS4wNiwyNy4xNiwxLjA2YzEzLDAsMjUuMTQtMS4wNiwyNS4xNC0xLjA2QTEwLjYsMTAuNiwwLDAsMCw3NCw0MS4yMXMuNTMtNi42Ni41My0xNC40OGMwLTgtLjUzLTE1LjExLS41My0xNS4xMVoiIHN0eWxlPSJmaWxsOiAjZjEyYjI0O2ZpbGwtcnVsZTogZXZlbm9kZDtpc29sYXRpb246IGlzb2xhdGUiLz4KICA8cGF0aCBkPSJNMzAsMTYuMTFWMzYuNzJMNTAuMDgsMjYuMTVaIiBzdHlsZT0iZmlsbDogI2ZmZjsgZmlsbC1ydWxlOiBldmVub2RkIi8+Cjwvc3ZnPgo=) no-repeat center / contain}</style><a href=https://www.youtube.com/embed/${id};autoplay=1;><img src=${thumbnail} alt='Video ${title}'><span></span></a>"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  title="${title}">
</iframe>`;
};

/**
 *
 */

const updateVideo = (id, title, image) => {
  videoPreview.innerHTML = iframeCode(id, title, image);
  htmlCode.innerHTML = iframeCode(id, title, image)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 *
 */

const feedbackAnimation = () => {
  const addAnimantion = (el) => el.setAttribute('data-animate', '');
  const removeAnimation = (el) => el.removeAttribute('data-animate', '');

  codeBlocks.forEach((codeBlock) => addAnimantion(codeBlock));
  setTimeout(() => {
    codeBlocks.forEach((codeBlock) => removeAnimation(codeBlock));
  }, 500);
};

/**
 *
 */

const generateEmbed = () => {
  updateVideo(videoId, videoTitle, videoImage);
  feedbackAnimation();
};

/**
 *
 */

const copyClipboard = (snippet) => {
  const codeBlock = document.querySelector(`[data-snippet=${snippet}]`);
  const codeBlockContent = codeBlock.querySelector('code');
  const codeBlockButton = codeBlock.querySelector('button');

  codeBlockButton.addEventListener('click', () => {
    navigator.clipboard
      .writeText(codeBlockContent.textContent)
      .then(() => {
        alert('Code copied!');
      })
      .catch((err) => {
        alert('Something went wrong', err);
      });
  });
};

copyClipboard('html');
copyClipboard('css');

/**
 *
 */

window.onload = () => {
  form.onsubmit = generateEmbed;
  updateVideo(defaultVideoId, defaultVideoTitle, '');
};
