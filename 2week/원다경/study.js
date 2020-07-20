//피드백 부탁드립니다!!
//떡
재료 = String(prompt('쌀을 입력하세요'));
function 방앗간기계(재료) {
  if (재료 == '쌀') {
    return '떡';
  } else {
    재료 = String(prompt('쌀이 아닙니다. 쌀을 입력하세요'));
  }
}

document.write(방앗간기계(재료));

//시금치떡
재료 = String(prompt('쌀을 입력하세요'));
부재료 = String(prompt('부재료을 입력하세요'));
function 방앗간기계(재료, 부재료) {
  if (재료 == '쌀') {
    return 부재료 + '떡';
  } else {
    재료 = String(prompt('쌀이 아닙니다. 쌀을 입력하세요'));
  }
}

document.write(방앗간기계(재료, 부재료));
