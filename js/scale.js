const scale = document.querySelector('.scale');

const controlSmaller = scale.querySelector('.scale__control--smaller');
const controlBigger = scale.querySelector('.scale__control--bigger');
const field = scale.querySelector('.scale__control--value');
const stepValue = 25;
controlBigger.addEventListener ('click', () => {
  field.value = field + stepValue;
});
controlSmaller.addEventListener ('click', () => {
  if(field > stepValue) {
    field.value = field - stepValue;
  }
});
