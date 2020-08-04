# 5주차 방과 후 스터디

> 키워드 : 스코프  & 호이스팅 & 실행컨텍스트  & 클래스

### ✏️ 5주차 복습,

**아래의 내용을 정리해보세요.**

1. 스코프란? <br>

   '변수가 영향을 미치는 범위' 혹은 '변수의 유효 범위'<br>

   즉,  **'코드가 유효한 범위'**<br>

   스코프엔 두 가지 종류가 있다.<br>

   - **전역 스코프(global scope)**

     변수가 함수 바깥이나 중괄호 (`{}`) 바깥에 선언되었다면, **전역 스코프**에 정의된다

   - **지역 스코프(local scope)**

     특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있다.<br>이런 변수들은 지역 변수라고 불린다.

     자바스크립트에서는 두 가지의 지역 변수가 존재한다.

     * **블록 스코프(block scope)**

       블록 스코프는 중괄호{}로 감싸진 범위<br>

       if의 블록 {}, for의 블록 {}, function의 블록 {}. 이들 모두 블록 스코프라고 할 수 있다.

     * **함수 스코프(function scope)**

       블록 스코프 중 function의 블록 {} 범위를 갖는 스코프

   자바스크립트의 선언문 var는 함수 스코프 내에서 유효.

   ES6에서 추가된 선언문 let, const는 블록 스코프 내에서 유효.

   출처

   - [자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)
   - [자바스크립트 스코프](https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B3%80%EC%88%98%EC%99%80-%EC%8A%A4%EC%BD%94%ED%94%84%EC%9C%A0%ED%9A%A8%EB%B2%94%EC%9C%84)

   

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



**ES6 클래스를 사용하여 4주차 복습으로 낸 객체를 리팩토링 해보세요.**

```javascript
const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
  },
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

