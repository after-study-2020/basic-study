# 4주차 방과 후 스터디

> 키워드 : 배열, 객체

### ✏️ 4주차 복습,

**아래의 내용을 정리해보세요.**

1. 배열
   1. **배열의 개요**
   
      연관된 데이터를 하나의 틀에서 관리하기 위한 자료구조.<br>변수가 하나의 데이터를 저장하기 위한 것이라면<br>배열은 여러 개의 데이터를 하나의 변수에 저장하기 위한 것.
   
      출처 https://webruden.tistory.com/69
   
   2. **내장 함수**
   
      자바스크립트에서 자체적으로 제공하는 함수.<br>
   
      이미 시스템에 정의되어 있기 때문에 사용자가 별도로 정의하지 않고 주어진 원칙에 따라 사용하면 되는 함수.
   
      출처 https://jokerkwu.tistory.com/91
   
      예)
   
      ```javascript
      parseInt()
      parseFloat()
      isFinite()
      isNaN()
      Number()
      String()
      ```
   
      
2. 객체 (객체는 너무 딥하게 들어가시지마세요!)

   1. **객체의 개요**

      여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입으로<br>

      Key / Value Pair를 저장할 수 있는 구조

   2. **프로퍼티란?**

      객체의 속성을 나타내는 접근 가능한 이름과<br>
      활용 가능한 값을 가지는 특별한 형태. <br>특정객체가 가지고 있는 정보를 품고 있어 <br>그 객체가 가진 정보에 직접적으로 접근할 수 있게 해준다.

   3. **메소드란?**

      객체가 가지고 있는 동작이며 객체 내의 함수

      출처 [https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-7-Object-35k01xmdfp](https://velog.io/@surim014/웹을-움직이는-근육-JavaScript란-무엇인가-part-7-Object-35k01xmdfp)

3. 아래의 객체를 만들어 보세요.

```javascript
const person = {
  name : '홍길동',
  age : 25,
  weight : 80,
  run : function(){
    // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
    this.weight -= 2;
  },
  eat : function(){
    // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
    this.weight += 5;
  }
}

person.name;
person.weight;
person.run();
person.eat();

```

번외 문제 : 위 문제를 풀어보고 재미삼아 풀어보세요. 비슷한 난이도입니다.

- 운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가해보세요.
- 마찬가지로 먹는것도 먹는것에 따라 살이찌는 것을 구현해보세요.

```javascript
const exerciseType = {
    RUN: "RUN",
    JUMPROPE: "JUMPROPE",
    SQUAT: "SQUAT"
};

const foodType = {
    COFFEE: "COFFEE",
    MACAROON: "MACAROON",    
    RICE: "RICE"
};

const person = {
  name : '홍길순',
  age : 25,
  weight : 100,
  exercise : function(type){
    // TODO :: 운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가
    let calorie = 0;
    switch (type) {
        case exerciseType.RUN:
            calorie = 5;
            break;
        case exerciseType.JUMPROPE:
            calorie = 10;
            break;
        case exerciseType.SQUAT:
            calorie = 15;
            break;
        default: throw new Error("올바른 타입이 아닙니다.");
    }
      
    this.weight -= calorie;
  },
  eat : function(type){
    // TODO :: 먹는것에 따라 살이찌는 것.
    let calorie = 0;
    switch (type) {
        case foodType.COFFEE:
            calorie = 5;
            break;
        case foodType.MACAROON:
            calorie = 10;
            break;
        case foodType.RICE:
            calorie = 15;
            break;
        default: throw new Error("올바른 타입이 아닙니다.");  
    }

    this.weight += calorie;
  }
}

person.name; // "홍길순"
person.weight; // 100
person.exercise(exerciseType.RUN); // undefined
person.weight; // 95
person.eat(foodType.MACAROON); // undefined
person.weight; // 105
person.exercise(exerciseType.SQUAT); // undefined
person.weight; // 90
person.eat(foodType.RICE); // undefined
person.weight; // 105
person.eat("아무거나"); //Uncaught Error: 올바른 타입이 아닙니다.
person.exercise("아무거나"); //Uncaught Error: 올바른 타입이 아닙니다.
```

(번외문제는 너무 자세히 써드리지 않는것은 이문제의 의도를 파악하기 위함입니다. 근데 충분히 자세함)

