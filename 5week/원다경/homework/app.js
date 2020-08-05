
const numberGroup = [1,2,3,4,5,6,7,8,9,10];


function filter(list, cb) {
  const result = [];

  for(let i = 0; i < list.length; i++) {
    d = cb(list[i]);
    if(!d){
        continue;
    }else {
        result.push(d);
    }
  }

  return result;
}

const oddNumber = filter(numberGroup, function(v){
  if((v % 2) === 1) {
    return v;
  }
});
const evenNumber = filter(numberGroup, function(v){
  if((v % 2) === 0) {
    return v;
  }
});
console.log(oddNumber);
console.log(evenNumber);