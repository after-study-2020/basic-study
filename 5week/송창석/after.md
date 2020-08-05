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



**ES6 클래스를 이용하여 Arr 클래스를 만들어보세요**.

- 기존 자바스크립트 내장 객체인 Array와 동일합니다.
- filter 와 map 정도만 내장 매소드를 가지는 객체를 만들어보세요.

```javascript
class Arr {
    // 요소를 걸러서 true, false 반환
    filter(list, cb) {
        let result = [];
        for(let i = 0; i < list.length; i++) {
            const number = cb(list[i]);
            if(number) result.push(number);
        }
        return result;
    }
    // 요소를 일괄적으로 변경
    map(list, cb) {
        let result = [];
        for (let i = 0; i < list.length; i++) {
            const strLength = cb(list[i]);
            result.push(strLength);
        }
        return result;
    }
}

const arr1 = [1,2,3,4,5,6];
const arr2 = ['test', 'carousel', 'longer', 'A']
const test = new Arr();
console.log(test.filter(arr1, (item) => { return item % 2 === 0 ? item : false })); // [2, 4, 6]
console.log(test.map(arr2, (str) => { return str.length })); // [4, 8, 6, 1]