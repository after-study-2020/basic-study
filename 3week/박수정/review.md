# 3주차 방과 후 스터디

> 키워드 : 조건문, 반복문, if, switch, for, while

### ✏️ 3주차 복습,

1. var, const, let 의 차이를 설명해주세요.  
   고민해볼만한 것 : 왜 ES2015에서 const와 let 이 생겨났을까?

|       | 재선언 | 재할당 |
| ----- | :----: | :----: |
| var   |  :o:   |  :o:   |
| let   |  :x:   |  :o:   |
| const |  :x:   |  :x:   |

### **var**

변수 선언을 여러번해도 에러없이 각기 다른 값이 출력 가능합니다.

장점 - 필요할 때 마다 변수를 사용할 수 있습니다.(편리함)

단점 - **같은 이름의 변수명을 남용하는 문제를 야기할 가능성이 높**습니다.

**위와 같은 단점을 보완하기 위해 ES6부터 let, const가 추가**되었습니다.

출처: [글쓰는 개발자](https://backstreet-programmer.tistory.com/76 )



------



2. if 문. 다음 결과 값을 작성하시고 왜 그렇게 생각하시는지 설명해주세요.

```javascript
const FIRST_CONDITION = 5;
const SECOND_CONDITION = 3;
const SET_NUMBER = 10;

function foo(a, b) {
  if (a > FIRST_CONDITION) {
    if (a < SET_NUMBER) {
      a = SET_NUMBER;
      return a + b;
    }
    return a + b;
  } else if (b > SECOND_CONDITION) {
    return a + b;
  } else {
    return '조건에 맞지 않는 입력값입니다.';
  }
}

console.log(foo(5, 3)); // 1. 조건에 맞지 않는 입력값입니다.
console.log(foo(5, 5)); // 2. 10
console.log(foo(6, 3)); // 3. 13
console.log(foo(3, 5)); // 4. 8
console.log(foo(11, 3)); // 5. 14
```

1. 첫 번째 인자 5는 FIRST_CONDITION인 5보다 크지 않다. :no_good:  
   두 번째 인자 3은 SECOND_CONDITION인 3보다 크지 않다.:no_good:  

   :point_right: **어느 조건에도 맞지 않는 '조건에 맞지 않는 입력값입니다.'를 반환합니다.**  

   

2. 첫 번째 인자 5는 FIRST_CONDITION인 5보다 크지 않다.:no_good:  
   두 번째 인자 5는 SECOND_CONDITION인 3보다 크다.:ok_woman:  

   :point_right: ​**첫 번째 인자 5와 두 번째 인자 5를 더한 10을 반환합니다.** 

   

3. 첫 번째 인자 6은 FIRST_CONDITION인 5보다 크다.:ok_woman:  
   첫 번째 인자 6은 SET_NUMBER인 10보다 작다.:ok_woman:  
   매개변수 a에 SET_NUMBER인 10을 재할당한다.  

   :point_right: **재할당된 매개변수 a 10과 매개변수 두 번째인자 3의 합 13을 반환합니다.**  

   

4. 첫 번째 인자 3는 FIRST_CONDITION인 5보다 크지 않다.:no_good:  
   두 번째 인자 5는 SECOND_CONDITION인 3보다 크다.:ok_woman:  

   :point_right: **첫 번째 인자 5와 두 번째 인자 3의 합 8을 반환합니다.**  

   

5. 첫 번째 인자 11은 FIRST_CONDITION인 5보다 크다.:ok_woman:  
   첫 번째 인자 11은 SET_NUMBER인 10보다 작지 않다.:no_good:  

   :point_right: **첫 번째 인자 11과 두 번째 인자 3의 합 14를 반환합니다.** 
   
   
------


3. 위 if 문이 읽기 쉬우셨나요? if 문의 뎁스가 많아지면 읽는것도 힘들고.. 그리고 else, else if를 사용하면서 미로찾기 같지않던가요?? 이것을 한번 리팩토링 해보세요! ㅎㅎ

```javascript
const FIRST_CONDITION = 5;
const SECOND_CONDITION = 3;
const SET_NUMBER = 10;

function foo(a, b) {
  if (a <= FIRST_CONDITION && b <= SECOND_CONDITION) {
    return '조건에 맞지 않는 입력값입니다.';
  }

  if (a > FIRST_CONDITION && a < SET_NUMBER) {
    a = SET_NUMBER;
  }

  return a + b;
};

console.log(foo(5, 3)); // 조건에 맞지 않는 입력값입니다.
console.log(foo(5, 5)); // 10
console.log(foo(6, 3)); // 13
console.log(foo(3, 5)); // 8
console.log(foo(11, 3)); // 14
```
