import {allPhotoInfo} from './data.js';
import {photoInfo} from './data.js';

const picturesAll = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureList = allPhotoInfo();

pictureList.forEach((url, description, likes, comments) => {
  const pictureInfo = pictureTemplate.cloneNode(true);
  pictureInfo.querySelector('.picture__img').src = url;
  pictureInfo.querySelector('.picture__img').alt = description;
  pictureInfo.querySelector('.picture__likes').textContent = likes;
  pictureInfo.querySelector('.picture__comments').textContent = comments;
  picturesAll.appendChild(pictureInfo);
});

