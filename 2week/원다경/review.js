1.
const add8 = add3 + add5;

2.
consoleMsg(foo); 
//foo() {
//   return "안녕하세요.";
// }
//함수를 다른 함수의 인자로 전달

3.
consoleMsg(foo());
//'안녕하세요'를 출력
//매개변수 msg에 함수값 대입


//복습1
const add8 = add3 + add5; //add8 = 8

//복습2
function foo(){
  return '안녕하세요.'
}

//복습3
consoleMsg(foo) -> consoleMsg(foo());
//foo 함수를 호출하는 것을 consoleMsg의 매개변수에 넣으면 될 것 같습니다.
/*
 <consoleMsg함수는 리턴이 없는데도 동작하는 이유>
 consoleMsg()함수가 실행될 수 있는 이유는 출력이 가능한 기능을 사용하였기 때문이라고 생각합니다. +_+
 
 <함수의 return>
 일단 return은 일반 함수에서는 리턴값을 지정하지 않을 때 undefined 값이 리턴되고,
 함수의 값을 반환하기도 하고 함수의 종료역할도 합니다.
 return이 없어도 undefined가 리턴되어 꼭 필요하다고 생각되지는 않습니다.
 그치만..일반함수에서는 return값을 적어줘야 할 것 같고,
 검색해보니까 생성자 함수에서는 return을 적지 않아도 생성자 객체로 반환된다고 하는데
 수업을 조금 더 들으면 이해가 가지 않을까 싶습니다..ㅎㅎ
 */