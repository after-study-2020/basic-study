# 5주차 방과 후 스터디

> 키워드 : 스코프  & 호이스팅 & 실행컨텍스트  & 클래스

### ✏️ 5주차 복습,

**아래의 내용을 정리해보세요.**

1. 스코프란? 
2. 호이스팅이란? (호이스팅이 일어나면 단점생각해보기)



**다음 코드에서 실행 순서와 그이유에 대해서 설명해보세요.**

```javascript
var y = 'Hi'
console.log(z)
function foo(){
  console.log(y)
  console.log(z)
  var z = 'World';
  console.log(z)
}
var z = 'Hello'
console.log(z)
foo()
```



**ES6 클래스를 사용하여 기존의 객체를 리팩토링 해보세요.**

```javascript
const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
  }
  eat : function(){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
  }
}

person.name;
person.weight;
person.run()
person.eat()


class Person () {
  //TODO
}

```



**ES6 클래스를 이용하여 Arr 클래스를 만들어보세요**.

- 기존 자바스크립트 내장 객체인 Array와 동일합니다.
- filter 와 map 정도만 내장 매소드를 가지는 객체를 만들어보세요.

```javascript
class Arr () {
	
  filter(){}
  
  map(){}
}
```

