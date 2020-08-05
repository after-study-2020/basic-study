### ✏️ 4주차 복습,

**아래의 내용을 정리해보세요.** 

1. 배열
   1. 배열의 개요
   - 리스트와 비슷한 객체, 길이가 고정되어있지않다.
   - 배열은 다수의 데이터를 저장하고 처리하는 경우에 유용하다.
   - index값으로 정수만 허용한다.(index = 객체의 키값이라고도 볼 수 있다.)
   - 배열 선언방법
   ``` javascript
    const arr1 = new Array();
    const arr2 = [function() {},false,2,'값', 5 + 3, 6 === 6]; //배열 리터럴
    // 문자열이나 숫자, 함수도 넣을 수 있고 boolean 값도 넣고 할 수 있다.
    // 이왕이면 타입을 통일하는 게 좋다.
    console.log(arr2[0]); // 특정 index값 읽기(접근), 마침표구문 사용 x
   ```
   2. 내장 함수
   - push() : 배열의 끝에 원하는 값을 추가해주는 함수 ex) arr1.push(1)
   - pop() : 배열의 마지막 index에 있는 값 제거 <--> shift() : 첫번째 index값 제거
   - length : 배열의 길이
   ``` javascript
    const arr3 = [1,2,3];
    console.log(arr3.length); // 3
    console.log(arr3[3]) // undefined
    // length는 배열의 길이지 index값이 아니다.
    console.log(arr3[arr3.length - 1]) // 3
    // length - 1 은 마지막 요소의 index값
   ```
   - concat() : 배열을 합쳐준다.
   ``` javascript
   let ex1 = [1,2,3];
   let ex2 = [4,5,6];

   ex1 = ex1.concat(ex2);
   // [1,2,3,4,5,6]
   ```
   - indexOf() : 배열안 항목의 index 찾기
   ``` javascript
   ex1.indexOf(2) // 1
   ```
   - splice() : index 위치에 있는 항목 제거 splice(startIndex, deleteCount)
   ``` javascript
   ex1.splice(ex1.indexOf(2),1)
   // [1,3,4,5,6]
   // 여러개도 제거가능
   ```
   
   https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
   <br>
   https://coding-factory.tistory.com/194

2. 객체 (객체는 너무 딥하게 들어가시지마세요!)
   1. 객체의 개요
   - 데이터(프로퍼티)와 함수(메소드)의 집합
   - JavaScript에서 원시값을 제외한 모든 JavaScript값은 객체이다.
        - 원시값 : 어떤 특성 또는 방법이 없는 값
        - 기본 데이터 형식 : 원시 값을 갖는 데이터 string, number, null, undefined, boolean
   - 배열과 다르게 순서가 없다. key로 찾아간다.
   ``` javascript
    const person = new Object();
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue";

   // 객체 리터럴 (연속된 구조체나 연관된 데이터를 일정한 방법으로 변환하고자 할 때 많이 쓰이는 방법)
   const user = {
       id: 'songcs', // key(id) : value('songcs' = 값)을 쌍으로 갖는다.
       name: '송창석',
       age: 28,
       full: true,
       family: ['아빠', '엄마', '형'],
       eat: function() {
           return 'full'
       }
   }
   // 배열과 마찬가지로 문자열, 숫자, 함수... 다들어간다.
   ```
   - 객체 값 읽기
   ``` javascript
   user.id; // 'songcs'
   user['age'] === user['a' + 'ge'] // 28
   user[user.eat()] // true user.eat = 'full'이기 때문에 user['full']과 같다.
   // user[값]; 이 들어가는 거라고 보면 될 것같다.
   ```
   2. 프로퍼티란?
   - 객체에서 명명된 값
   - 객체의 정보를 품고 있어 그 정보에 직접 접근할 수 있게 해준다. ex) user.id = 'songcs' // 접근
   - 속성에 접근 가능한 이름과 활용 가능한 값을 갖는다. ex) user.id = 'songchangseok' // 재할당(활용)
   - undefined 나 null 값을 할당한다고 삭제되는게 아니다.
   3. 메소드란?
   - 객체가 가지고 있는 동작, 객체 내 함수
   - 메소드와 함수의 차이 : 메소드는 객체가 갖고있는 함수기 때문에 객체를 통해 동작하며, 그 동작의 주체는 객체다.

   https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics
   <br>
   https://velog.io/@surim014/%EC%9B%B9%EC%9D%84-%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94-%EA%B7%BC%EC%9C%A1-JavaScript%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-part-7-Object-35k01xmdfp

3. 아래의 객체를 만들어 보세요.

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

```

번외 문제 : 위 문제를 풀어보고 재미삼아 풀어보세요. 비슷한 난이도입니다.

- 운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가해보세요.
- 마찬가지로 먹는것도 먹는것에 따라 살이찌는 것을 구현해보세요.

(번외문제는 너무 자세히 써드리지 않는것은 이문제의 의도를 파악하기 위함입니다. 근데 충분히 자세함)





<br>

<br>

*객체 참고 사항*

```javascript
/*
객체에 도움될만한 아주아주 초보적인 내용입니다.
과일의 가격을 모아둔 단순 단일 객체 입니다. 일명 fruitsPrice 객체를 "과일의 가격표"라고 정의하겠습니다.
(과일의 가격표 라고 생각하시면 조금 쉽게 접근하실수있습니다.)
아래와 같이 사과 바나나 키위의 가격들이 있습니다. 
*/
const fruitsPrice = {
  apple : 1000,
  banana : 1200,
  kiwi : 1500
}

// 객체의 조회
// "과일의 가격표"에서 사과의 가격을 알고싶다면? 
fruitsPrice.apple 
fruitsPrice['apple']
/*
	이렇게 가격을 조회 할수 있다.
	(두번째 조회법은 배열과 비슷하죠? ㅎㅎ 배열은 index로 조회, 객체는 키값으로 조회)
*/

// 객체의 수정 
// 과일의 가격표에서 사과의 가격을 수정하고 싶다면?
fruitsPrice.apple = 2000

/*
	사과의 가격이 처음엔 1000원이다가 2000으로 재정의하고 현재의 가격과 과거의 가격은 달라졌어요.
	과일의 가격표의 상태값인 사과의 가격이 달라졌으니, 상태가 달라졌다 라고 할수있을것같습니다.
*/

fruitsPrice.apple // 첫번째로 바뀐 사과의 값 2000
fruitsPrice.apple = 2500
fruitsPrice['apple'] // 두번쨰로 바뀐 사과의 값 2500

// 기존객체에 추가도 가능합니다.
fruitsPrice.strawberry = 800
```