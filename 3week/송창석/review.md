## ✏️ 3주차 복습

#### 1. var, const, let 의 차이를 설명해주세요. 고민해볼만한 것 : 왜 ES2015에서 const와 let 이 생겨났을까?
1. 'var'는 매우 유연한 방식으로 변수를 선언할 수 있는 방법입니다.

    ```javascript
    // var는 함수단위의 스코프를 가집니다.
    var hello = 'hello!';
    function sayHello() {
        var hello = 'hellon in func!';
        console.log(hello);
    }

    sayHello(); // hello in func!
    console.log(hello); // hello!
    ```


    ```javascript
    // 함수단위 스코프를 가질때 아래와 같은 문제점을 야기합니다.
    var hello = 'hello!';
    if(true) {
        var hello = 'in if';
    }
    console.log(hello); // in if
    // var의 스코프가 블록{}이 아닌 함수이기 때문에 hello 변수가 변경됩니다.
    // 코드량이 많아질 경우 파악이 힘들어집니다.
    ```

2. 'const'는 상수(변하지 않는 값)을 설정합니다.

    ```javascript
    // 재선언, 재할당 모두 불가능합니다.
    const hello = 'hello';
    hello = 'hello one more'; // Uncaught TypeError: Assignment to constant variable.
    ```

    ```javascript
    // 블록{} 단위 스코프를 갖습니다.
    const hello='hello!';
    {
    const hello='inner hello!'; 
    console.log(hello); // inner hello!
    }
    console.log(hello); // hello!
    ```

    ```javascript
    // 그러나 const 변수 안에 배열이나 객체값을 변경하는 것은 가능하다.
    // array
    const arr = [1,2,3];
    arr[0] = 0;
    console.log(arr[0]); // 0

    // object
    const user = {
        id: 'songcs0329',
        name: '송창석'
    }
    user.name = '송';
    console.log(user.name); // 송
    ```

3. 'let'은 변수를 설정합니다.

    ```javascript
    // 변수에 재할당이 가능합니다.
    let hello = 'hello';
    hello = 'hello let';
    console.log(hello); // hello let
    ```

#### 참고링크)
<https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90>

<https://hyunseob.github.io/2016/11/21/misunderstanding-about-const/>

<https://hianna.tistory.com/314>



#### 2. if 문. 다음 결과 값을 작성하시고 왜 그렇게 생각하시는지 설명해주세요.

``` javascript
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

console.log(foo(5, 3));
console.log(foo(5, 5));
console.log(foo(6, 3));
console.log(foo(3, 5));
console.log(foo(11, 3));
```

1. console.log(foo(5, 3)); // 조건에 맞지 않는 입력값입니다.
- 첫번째 if에서 a = 5 이므로 조건을 충족 못하고 마찬가지로 다음 else if에서 b = 3 이므로 충족 못해서 마지막 else의 값이 return 됩니다.
2. console.log(foo(5, 5)); // 10
- 첫번째 if에서 a = 5 이므로 조건을 충족 못하고 다음 else if에서 조건충족해서 a + b = 5 + 5 = 10이 됩니다.
3. console.log(foo(6, 3)); // 13
- 첫번째 if 조건 충족하고 안에 a < SET_NUMBER 조건을 충족해서 a값이 6에서 10으로 바뀐다. 고로 a + b = 10 + 3 = 13이 됩니다.
4. console.log(foo(3, 5)); // 8
- 첫번째 if 조건충족 못하고 else if 조건 충족함으로 a + b = 3 + 5 = 8이 됩니다.
5. console.log(foo(11, 3)); // 14
- 첫번째 if 조건 충족하고 안에 a < SET_NUMBER 조건을 충족 못해서 a + b = 11 + 3 = 14가 됩니다.

### 3. if문 리팩토링
``` javascript
function foo(a, b) {
  // a 값은 무조건 조건을 따져야 할거 같아서 if문 사용했습니다.
  if (a > FIRST_CONDITION) {
      a = a < SET_NUMBER ? SET_NUMBER : a;
      // 위에서 a값과 SET_NUMBER의 조건에 따라 a값을 재할당 했습니다.
      return a + b;
  }
  // 위 if 조건이 거짓일 경우 b값과 SECOND_CONDITION을 비교하고 그에 따른 조건에 따라 값을 return했습니다.
  return b > SECOND_CONDITION ? a + b : '조건에 맞지 않는 입력값입니다.';
}
```
