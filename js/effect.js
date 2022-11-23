const image = document.querySelector('.img-upload__preview img');
const effect = document.querySelector('input[type="radio"]');

effect.onchange = function() {
  const checked = document.querySelector('input[type="radio"]:checked');
  if (checked)  {
    image.classList.add('effects__preview');
  }
};
