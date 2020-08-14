# 5주차 방과 후 스터디

> 키워드 : 스코프  & 호이스팅 & 실행컨텍스트  & 클래스

### ✏️ 5주차 복습,

**아래의 내용을 정리해보세요.**

1. 스코프란? 
- 스코프: 변수의 유효범위 -> 정의될때 결정
- 실행컨텍스트: 실행되는 코드 덩어리 -> 실행될때 결정

2. 호이스팅이란? (호이스팅이 일어나면 단점생각해보기)
- 자바스크립트가 var로 선언한 변수 or 함수를 끌어 올리는 현상.
- 함수선언문을 사용하면 전체가 끌어올려지므로 표현식을 주로 사용. 

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

- undefined
- Hello
- Hi
- undefined
- World

우선 z가 선언이 안되어있는데 호이스팅으로 모든 변수, 함수를 끌어올려서
var y;
var z;
func foo();
이러한 식으로 자바스크립트가 호이스팅됩니다.
그리고 console.log(z)를 읽게 되면 undefined가 찍히고
foo()가 호출이 되지 않았으니 실행은 foo가 호출이 되면 됩니다. 
var z 에서 Hello를 할당해주면 그때 z는 Hello가 찍히게 되고, foo가 호출이 되었으니 foo로 들어가면 y는 위에 Hi라고 선언한 값이 됩니다. 
z는 아직 선언 되지 않았으므로 undefined. 
z가 선언되고서 World를 넣고 z는 출력하면 World가 찍힙니다.  


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
  constructor (name, age, weight) {
      this.name = name;
      this.age = age;
      this.weight = weight
  }

  run() {
      return this.weight -= 2
  }

  eat() {
      return this.weight += 5
  }
}

const person = new Person(`홍길동`, 25, 80)

```
**ES6 클래스를 이용하여 Arr 클래스를 만들어보세요**.

- 기존 자바스크립트 내장 객체인 Array와 동일합니다.
- filter 와 map 정도만 내장 매소드를 가지는 객체를 만들어보세요.

```javascript
class Arr {
  constructor(list) {
    this.list = list;
  }

  filter(cb){
    let result = [];
    for (let i = 0; i < this.list.length; i++) {
      if (cb(this.list[i])) {
        result.push(this.list[i])
      }
    }

    return result;
  }
  
  map(cb){
    let result = [];
    for (let i = 0; i < this.list.length; i++) {
      result.push(cb(this.list[i]))
    } 

    return result;
  }
}

const list = ['1','2','3','4','5','7','9','13'];
const arr = new Arr(list)

arr.filter((v) => {
  return v > 6;
})

arr.map((v) => {
  return v * v;
}) 

```

