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

   함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것.<br>

   - 자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 **유효 범위의 최상단**에 선언한다.
     - 자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
     - 함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킨다.
     - 유효 범위: 함수 블록 {} 안에서 유효

   

   - 즉, 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.
     - 실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.
     - 실제 메모리에서는 변화가 없다.

   **단점**

   1. 블록스코프에서 var를 사용할 때 직관적으로 예측하기 어렵다.

   2. 너무 많은 선언문이 남발되어 있는 자바스크립트 코드는<br>실행코드의 해석시점이 뒤로 밀리게 됨으로서<br>자바스크립트 실행코드의 구동시점이 길어진다.<br>글로벌 함수,변수를 너무 많이 정의해놓으면 hoisting에 의해 지연이 발생할 수 있다.

   **TIP**

   호이스팅을 제대로 모르더라도 **함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지** 할 수 있다.

   출처

   - [호이스팅이란](https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html)
   - [var를 사용할 때 발생하는 문제들](https://www.daleseo.com/js-var-issues/)

   - [Hoisting이란?](https://negabaro.github.io/archive/js-Hoisting)



**다음 코드에서 실행 순서와 그이유에 대해서 설명해보세요.**

```javascript
var y = 'Hi'
console.log(z) // 1. undefined
function foo(){
  console.log(y) // 3. Hi
  console.log(z) // 4. undefined
  var z = 'World';
  console.log(z) // 5. World
}
var z = 'Hello'
console.log(z) // 2. Hello
foo()
```

해석형 언어인 자바스크립트는 위에서 아래로 순차적으로 실행되기 때문에<br>

가장 먼저 위에 있는 console.log(z) 실행.<br>

다음 foo 함수 선언을 건너뛰고 console.log(z) 실행.<br>

foo 함수 호출 시 함수 컨텍스트 생성.<br>

컨텍스트 생성 시 컨텍스트 안의  변수객체(arguments, variable), **scope chain**, this가 생성<br>

foo 내부에서 순서대로 <br>

console.log(y) <br>
console.log(z) <br>
console.log(z) <br>
이 실행된다.

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


class Person {
    constructor() {
        this.name = '홍길동';
        this.age = 25;
        this.weight = 80;
    }
    run() {
        // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
        this.weight -= 2;
    }
    eat() {
        // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
        this.weight += 5;
    }
}


var person = new Person();
person.name; // "홍길동"
person.weight; // 80
person.run(); // undefined
person.weight; // 78
person.eat(); // undefined
person.weight; // 83
```



**ES6 클래스를 이용하여 Arr 클래스를 만들어보세요**.

- 기존 자바스크립트 내장 객체인 Array와 동일합니다.
- filter 와 map 정도만 내장 매소드를 가지는 객체를 만들어보세요.

```javascript
class Arr {
  filter(arr, cb) {
      return arr.filter((v) => cb(v));
  }

  map(arr, cb) {
      return arr.map((v) => cb(v));
  }
}

const array01 = [4, 15, 377, 395, 400, 1024, 3000];
const array02 = ['foo', 'hello', 'diamond', 'A'];
const testArr = new Arr();

testArr.filter(array01, (value) => value % 5 === 0);
// [15, 395, 400, 3000]

testArr.map(array02, (value) => value.length);
// [3, 5, 7, 1]
```

