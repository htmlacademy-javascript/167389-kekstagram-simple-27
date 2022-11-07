function randomNumber(min, max) {
  if (min < 0 || max < 0 ) {
    return NaN;
  }
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
}

const DESCRIPTIONS = [
  'пляж с шезлонгами', 'указатель к пляжу', 'океан', 'девушка на пляже', 'рис с карри, блюдо', 'черная машина', 'клубника на тарелке', 'освежающий напиток в кружке', 'самолет над пляжем', 'обувница', 'дорога к пляжу', 'белая машина', 'обед', 'которолл', 'домашние тапки-луноходы', 'самолет в облаках', 'концерт', 'ретроавтомобиль', 'тапочки с подсветкой', 'пальмы ночью', 'салат', 'океан на закате', 'краб', 'атмосфера на концерте', 'сафари джип рядом с бегемотом'
];

const photoInfo = (index) => (
  {
    id: index,
    description: DESCRIPTIONS[index - 1],
    url: `photos/${index}.jpg`,
    likes: randomNumber(15, 200),
    comments: randomNumber(0, 200)
  }
);

const allPhotoInfo = () =>
  Array.from({length: 25}, (_, index) =>
    photoInfo(index + 1)
  );


photoInfo();
allPhotoInfo();


