import './upload-form.js';
import {isEscapeKey} from './util.js';

const uploadImage = document.querySelector('#upload-file');
const uploadForms = document.querySelector('.img-upload__overlay');
const uploadCloseForms = document.querySelector('#upload-cancel');

function openFormEdit () {
  uploadImage.addEventListener('input', () => {
    uploadForms.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      uploadForms.classList.add('hidden');
      document.querySelector('body').classList.remove('modal-open');
    }
  });
}

function closeFormEdit () {
  uploadCloseForms.addEventListener('click', () => {
    uploadForms.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });
}

export {closeFormEdit, openFormEdit};


