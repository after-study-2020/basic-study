/*
1.스코프란?
변수가 인식될 수 있는 범위, 함수 외부에서 안으로 접근할 수는 없다.
 - 전역 스코프 : 어느 곳에서든 전역에 선언한 변수에 접근할 수 있다
 - 지역 스코프 : 해당 지역에서만 접근 가능하며 외부에서 접근 불가능하다.
 - 함수 스코프 : 함수 내에서만 접근 가능
 - 블록 스코프 : 중괄호 내(for,if,while...)에서만 접근이 가능하다. 
   const, let 변수는 TDZ 개념이 있어서 블록 스코프 안에 있으면 외부에서 사용할 수 없다.
   TDZ : 변수를 사용할 수 없는 공간
2.호이스팅이란?
 - 변수의 사용 및 함수의 실행 코드가 선언보다 먼저 일어나도 정상 진행이 되도록 해주는 것
 - var는 밑에서 선언되어도 위로 끌어올려져서 실행된다. 
 - 함수 선언식만 호이스팅이 일어나며 함수 표현식은 호이스팅이 일어나지 않는다.
   [함수 선언식]
   function 함수명(){}
   [함수 표현식]
   const 함수명 = function (){}
 - ** 코드의 가독성과 유지보수를 위해 호이스팅이 일어나게 해서는 안된다.
*/

var y = 'Hi'
console.log(z) //1 > undefined
function foo(){
  console.log(y) //4 > Hi
  console.log(z) //5 > Hello 땡! undefined...
  var z = 'World';
  console.log(z) //6 > World
}
var z = 'Hello'
console.log(z) //2 > Hello
foo() //3 > 함수 실행

/*
1 = 가장 먼저 실행되나 var로 선언된 z 변수는 실행문 이후에 있기 때문에 호이스팅이 일어나 초기화가 되지 않은 undefined로 출력된다.
2 = 실행문 상단에 z변수가 선언되어 Hello 출력
3 = 함수 실행
4 = y 변수는 전역 변수로 선언되어 있어서 접근 가능하므로 Hi 출력
5 = 함수 실행 위에 선언되어서..되는 줄 알았는데 정의된 foo 함수로 올라가서 읽기 때문에 z 변수에 접근할 수 없다. var로 선언된 z이기에 호이스팅으로 undefined
6 = 실행문 전에 호출변수가 선언되어 있고 함수 내에 있기에 접근 가능! World 값으로 출력
*/

const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
    return this.weight-2;
  },
  eat : function(){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
    return this.weight+5;
  }
}

person.name;
person.weight;
person.run()
person.eat()


class Person {
//TODO
  constructor(name,age,weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  run() {
    return this.weight-2;
  }
  eat() {
    return this.weight+5;
  }
}

const st1 = new Person('다경',27,100);
console.log(st1);
console.log(st1.run());
console.log(st1.eat());