# 5주차 방과 후 스터디

> 키워드 : 스코프  & 호이스팅 & 실행컨텍스트  & 클래스

### ✏️ 5주차 복습,

**아래의 내용을 정리해보세요.**

1. 스코프란?
  - 변수에 접근할 수 있는 범위
  - 전역 / 지역 스코프 타입이 있음
    - 전역: 전역에 선언되어있어 어디서든 접근 가능, {} 바깥에 선언
    - 지역: 해당지역에서만 접근가능, {} 안에 선언 ex) 함수스코프, 블록스코프
      - 함수스코프: 함수 내부에서 선언한 변수만 접근 가능
      - 블록스코프: {} 내부에서 const, let으로 변수 선언했을때 그 내부에서만 접근 가능
2. 호이스팅이란? (호이스팅이 일어나면 단점생각해보기)
  - 코드에 선선언된 변수 및 함수를 코드 상단에 끌어올린것
  - 해당 스코프의 최상단으로 호이스팅 됨
  - 함수 선언문(식)에서만 발생

``` javascript
function foo() {
  console.log(a) // undefind
  var a = 1;
} // 우리가 쓸때
function foo() {
  var a;
  console.log(a) // undefind
  a = 1;
} // 실제 동작
foo();
```



**다음 코드에서 실행 순서와 그이유에 대해서 설명해보세요.**

```javascript
var y = 'Hi' // 1. var y 선언과 y = 'Hi' 할당
console.log(z) // 2. undefind, var z; 가 호이스팅됨
function foo(){
  console.log(y) // 6. 스코프체인에 의해 전역으로 설정한 y값 출력, Hi
  console.log(z) // 7. 스코프체인에 의해 함수  내에서 z를 찾았지만 foo함수내의 호이스팅으로 인해 undefind 반환, var z;
  var z = 'World'; // 8. z = 'World' 할당
  console.log(z) // 9. 할당된 z 값 출력, World
}
var z = 'Hello' // 3. z = 'Hello' 할당
console.log(z) //  4. 할당된 z 값 출력, Hello
foo() // 5. foo함수 실행
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


class Person {
    // TODO
    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    run() {
        return this.weight = this.weight - 2;
    }
    eat() {
        return this.weight = this.weight + 5;
    }
}

const person1 = new Person('창석', 28, 70);
console.log(person1);
person1.eat();
console.log(person1);
person1.run();
console.log(person1);

```