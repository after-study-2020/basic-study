# 2주차 방과 후 스터디

> 키워드 : 값, 식, 문, 변수, 프로그래밍, 함수, 네이밍

### ✏️ 스터디 예제

**아래의 결과 값을 리턴 하는 함수를 구현해 보세요.**

```javascript
function 방앗간기계() {}

방앗간기계(쌀); // 떡
방앗간기계(쌀, 시금치); // 시금치떡
```

### ✏️ 2주차 복습, 변수와 함수

```javascript
// 복습1) add3 과 add5를 활용해 add8을 구현해보세요.
function sum(a,b) {
  return a + b
}

const add3 = sum(1,2);
const add5 = sum(2,3);
const add8 = ?

// 복습2) consoleMsg 함수의 실행 결과 값은 무엇일까요?
function foo(){
  return '안녕하세요.'
}

function consoleMsg(msg) {
  console.log(msg)
}

consoleMsg(foo) // 결과값은?

// 복습3) 위 코드에서 '안녕하세요'를 출력 하려면 어떻게 해야할까요?
// 생각해볼만한이슈  : 함수는 꼭 리턴이 있어야하나? consoleMsg함수는 리턴이없는데도 동작하는 이유는 뭘까?
```
