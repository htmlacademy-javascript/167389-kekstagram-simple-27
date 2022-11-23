const scale = document.querySelector('.scale');
const image = document.querySelector('.img-upload__preview img');

const controlSmaller = scale.querySelector('.scale__control--smaller');
const controlBigger = scale.querySelector('.scale__control--bigger');
const field = scale.querySelector('.scale__control--value');
const stepValue = 25;
const minScale = 25;
const maxScale = 100;
const defaultScale = 100;

const scaleImage = (value = defaultScale) => {
  image.style.transform = `scale(${value / 100})`;
  field.value = `${value}%`;
};


controlBigger.addEventListener ('click', () => {
  field.value = parseInt(field.value, 10) + stepValue;
  if (field.value > maxScale) {
    field.value = maxScale;
  }
  image.style.transform = `scale(${field.value / 100})`;
});
controlSmaller.addEventListener ('click', () => {
  field.value = parseInt(field.value, 10) - stepValue;
  if (field.value < minScale) {
    field.value = minScale;
  }
  image.style.transform = `scale(${field.value / 100})`;
});

scaleImage();
