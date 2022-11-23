const image = document.querySelector('.img-upload__preview img');
const effectList = document.querySelector('.effects__list');

effectList.onchange = function(evt) {
  if(evt.target.classList.contains('effects__radio')) {
    const checked = document.querySelector('input[type="radio"]:checked');
    if (checked) {
      image.className = `effects__preview--${evt.target.value}`;
    }
  }
};
