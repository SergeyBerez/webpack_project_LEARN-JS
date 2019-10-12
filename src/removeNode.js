// Создать модуль, который экспортирует функцию `deleteTextNodes`
// Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
// Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.
function deleteTextNodes(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].nodeType == 3) {
      elem[i].remove();
    }
  }
  return elem;
}
module.exports = deleteTextNodes;


console.log('ddfdfddfdffdf');