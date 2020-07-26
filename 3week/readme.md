# 3주차 방과 후 스터디

> 키워드 : 조건문, 반복문, if, switch, for, while

### ✏️ 스터디 예제

**아래의 결과 값을 리턴 하는 함수를 구현해 보세요.**

if, switch, for, while 문을 활용하여 적합한 함수를 작성해보세요.

(왜 적합하다고 생각하는지도 설명해보세요. 저는 정답을 떠나 본인이 작성한 코드를 설명할 수 있다면 적합한 코드라고 생각합니다.)

```javascript
// 1. 받은 숫자를 역순으로 출력하는 함수
reverseCount(5,function(i){
    console.log(i)
})
// 1번의 출력 : 5,4,3,2,1


// 2. 영어로 된 숫자를 숫자로 변환 하기 (1~10까지만...one two three four ... ten)
// 예외 처리는 없이 정해진 one ~ ten 이 입력이 정확히 들어온다고 가정하고 구현할것
convertToNumber('one') // 1
convertToNumber('two') // 2
...
convertToNumber('five') // 5
...
convertToNumber('ten') // 10


// 3. 입력에 아래와 같이 각각 쏘나타,K5,말리브,sm3,320D,A4, 에러처리, 되었을때 자동차 브랜드명을 출력
// sm3,320D,c200 의 브랜드는 직접 찾아보세요!
// (찾아보라는 이유는 예를들어 전혀 모르는 차브랜드를 알아야 하는 회사에 입사했을때,
// 차브랜드에 대해서 조금이라도 이해하고 있어야 하기때문, 그리고 검색을 습관화!!)
carBrand('쏘나타') // 현대자동차
carBrand('K5') // 기아자동차
carBrand('말리브') //  쉐보레
carBrand('sm3') // ?
carBrand('320D') // ?
carBrand('A4') // ?
carBrand('스터디') // 에러처리!

// 4. 1~ n까지의 합을 구하는 함수
sum(100) // 1~100의 합 : 5050

```

### ✏️ 3주차 복습,

1. var, const, let 의 차이를 설명해주세요.
   고민해볼만한 것 : 왜 ES2015에서 const와 let 이 생겨났을까?

2. if 문. 다음 결과 값을 작성하시고 왜 그렇게 생각하시는지 설명해주세요.

```javascript
const FIRST_CONDITION = 5;
const SECOND_CONDITION = 3;
const SET_NUMBER = 10;

function foo(a, b) {
  if (a > FIRST_CONDITION) {
    if (a < SET_NUMBER) {
      a = SET_NUMBER;
      return a + b;
    }
    return a + b;
  } else if (b > SECOND_CONDITION) {
    return a + b;
  } else {
    return '조건에 맞지 않는 입력값입니다.';
  }
}

console.log(foo(5, 3));
console.log(foo(5, 5));
console.log(foo(6, 3));
console.log(foo(3, 5));
console.log(foo(11, 3));
```

3. 위 if 문이 읽기 쉬우셨나요? if 문의 뎁스가 많아지면 읽는것도 힘들고.. 그리고 else, else if를 사용하면서 미로찾기 같지않던가요?? 이것을 한번 리팩토링 해보세요! ㅎㅎ
