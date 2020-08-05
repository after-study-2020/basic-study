# 4주차 방과 후 스터디

> 키워드 : 배열, 객체

### ✏️ 스터디 예제

**아래를 구성하는 객체를 구현해 보세요.**

```javascript
function Library() {}
const bookList = ['자바스크립트완전정복', '파이썬', 'java의 정석'];
const bookStore = new Library();
bookStore.find('파이썬'); // 파이썬 (없다면 에러처리~)
bookStore.add('HTML정복');
bookStore.list(); // bookList을 출력
bookStore.delete('파이썬'); // 파이썬 제거
```

### ✏️ 4주차 복습,

**아래의 내용을 정리해보세요.**

1. 배열
   1. 배열의 개요
   2. 내장 함수
2. 객체 (객체는 너무 딥하게 들어가시지마세요!)

   1. 객체의 개요
   2. 프로퍼티란?
   3. 메소드란?

3. 아래의 객체를 만들어 보세요.

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

```

번외 문제 : 위 문제를 풀어보고 재미삼아 풀어보세요. 비슷한 난이도입니다.

- 운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가해보세요.
- 마찬가지로 먹는것도 먹는것에 따라 살이찌는 것을 구현해보세요.

(번외문제는 너무 자세히 써드리지 않는것은 이문제의 의도를 파악하기 위함입니다. 근데 충분히 자세함)

<br>

<br>

_객체 참고 사항_

```javascript
/*
객체에 도움될만한 아주아주 초보적인 내용입니다.
과일의 가격을 모아둔 단순 단일 객체 입니다. 일명 fruitsPrice 객체를 "과일의 가격표"라고 정의하겠습니다.
(과일의 가격표 라고 생각하시면 조금 쉽게 접근하실수있습니다.)
아래와 같이 사과 바나나 키위의 가격들이 있습니다. 
*/
const fruitsPrice = {
  apple: 1000,
  banana: 1200,
  kiwi: 1500,
};

// 객체의 조회
// "과일의 가격표"에서 사과의 가격을 알고싶다면?
fruitsPrice.apple;
fruitsPrice['apple'];
/*
	이렇게 가격을 조회 할수 있다.
	(두번째 조회법은 배열과 비슷하죠? ㅎㅎ 배열은 index로 조회, 객체는 키값으로 조회)
*/

// 객체의 수정
// 과일의 가격표에서 사과의 가격을 수정하고 싶다면?
fruitsPrice.apple = 2000;

/*
	사과의 가격이 처음엔 1000원이다가 2000으로 재정의하고 현재의 가격과 과거의 가격은 달라졌어요.
	과일의 가격표의 상태값인 사과의 가격이 달라졌으니, 상태가 달라졌다 라고 할수있을것같습니다.
*/

fruitsPrice.apple; // 첫번째로 바뀐 사과의 값 2000
fruitsPrice.apple = 2500;
fruitsPrice['apple']; // 두번쨰로 바뀐 사과의 값 2500

// 기존객체에 추가도 가능합니다.
fruitsPrice.strawberry = 800;
```
