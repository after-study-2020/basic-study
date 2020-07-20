function 방앗간기계(...item) {
  let material = [];
  item.forEach(function (element) {
    if (element === '쌀') {
      element = '떡';
    }
    material.push(element);
  });
  let first = material.shift();
  material = material.splice(0, material.length).concat(first);

  return material.join('');
}

const result = 방앗간기계('쌀', '시금치', '케잌', '김치', '갈치');
console.log(result);
