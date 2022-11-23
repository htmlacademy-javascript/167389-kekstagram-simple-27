const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error__title',
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
pristine.validate();
