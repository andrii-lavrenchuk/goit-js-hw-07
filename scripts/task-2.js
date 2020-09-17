const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

// const elements = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredients[i];
//   elements.push(liEl);
// }
// ingredientsEl.append(...elements);

const elements = ingredients.map(name => {
  const liEl = document.createElement('li');
  liEl.textContent = name;

  return liEl;
});
console.log('elements', elements);

ingredientsEl.append(...elements);
