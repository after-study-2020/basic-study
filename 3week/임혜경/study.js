
//1번의 출력 : 5,4,3,2,1
function reverseCount(num, fnc) {
  // for
  for (let i = num; i > 0; i--) {
    fnc(i)  // return으로 반환하면 한번 돌리고 끝남
  }

  // while
  // let i = num;
  // while (i > 0) {
  //   fnc(i)
  //   i--;
  // }
}

reverseCount(5, function (i) {
  console.log(i);
});

// 2번
function convertToNumber(textNum) {
  switch (textNum) {
    case 'one':
      return 1;
    case 'two':
      return 2;
    case 'three':
      return 3;
    case 'four':
      return 4;
    case 'five':
      return 5;
    case 'six':
      return 6;
    case 'seven':
      return 7;
    case 'eight':
      return 8;
    case 'nine':
      return 9;
    case 'ten':
      return 10;
  }
}

console.log(convertToNumber('one'));

// 3번
function carBrand(carName) {
  switch (carName) {
    case '쏘나타':
      return '현대자동차';
    case 'K5':
      return '기아자동차';
    case '말리브':
      return '쉐보레';
    case 'sm3':
      return '르노삼성';
    case '320D':
      return 'BMW';
    case 'A4':
      return '아우디';
    default:
      return '에러처리!';
  }
}
console.log(carBrand('A4'));

// 4번
function sum(n) {
  // for문
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum)

  // while문
  // let i = 1
  // while (i <= n) {
  //   sum += i;
  //   i++
  // }
  // console.log(sum)
}

sum(5);

// 3주차 복습

// var : 변수 재선언 가능 ,function-scoped
// let : 재선언 X, 재할당 가능 , 선언하고 나중에 값을 할당이 가능 ,block-scoped
// const : 재선언 X, 재할당 X , 선언과 동시에 값을 할당 해야한다 ,block-scoped

// 기본적으로 const를 사용하고, 재할당이 필요한 경우에 한정해 let 을 사용하는 것이 좋다.

const FIRST_CONDITION = 5;
const SECOND_CONDITON = 3;
const SET_NUMBER = 10;

function foo(a, b) {
  if (a > FIRST_CONDITION) {
    if (a < SET_NUMBER) {
      a = SET_NUMBER;
      return a + b;
    }
    return a + b;
  } else if (b > SECOND_CONDITON) {
    return a + b;
  } else {
    return '조건에 맞지 않는 입력값입니다.';
  }
}

console.log(foo(5, 3)); //  조건에 맞지 않는 입력값입니다
console.log(foo(5, 5)); // 5 + 5 = 10
console.log(foo(6, 3)); // 10 + 3 = 13
console.log(foo(3, 5)); // 3 + 5 = 8
console.log(foo(11, 3)); // 11 + 3 = 14

// 우선 순차적으로 앞에서부터 조건이 true 이면 그 이후에 조건은 참고하지 않습니다. 


