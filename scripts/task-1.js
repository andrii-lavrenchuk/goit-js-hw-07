const allCategoriesEl = document.querySelector('#categories');

console.log(`В списке ${allCategoriesEl.children.length} категории`);

const allItemEl = allCategoriesEl.querySelectorAll('.item');

allItemEl.forEach(element => {
  const titleEl = element.firstElementChild.textContent;
  const ulEl = element.lastElementChild;
  const amounOfEl = ulEl.children.length;

  console.log(`
  Категория: ${titleEl}
  Kоличество элементов: ${amounOfEl}`);
});
