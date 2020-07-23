/* 
    var 변수
    - function 단위의 scope를 가진다. 
    - 유연하게 변수를 지정할 수 있다. 같은 변수를 두 번 사용해도 오류가 나지 않는다.
    - 이러한 특징은 코드량이 많아지만 어디에서 어떻게 사용되고 있는지 확인하기가 쉽지않다.

    그래서 나온게 ES6의 const,let
    const
    - 재할당이 불가능하다.
    - 재선언이 안된다.

    let
    - 재할당이 가능하다.
    - 재선언이 가능하다.
    - 선언된 변수를 선언문 이전에 참조하면 에러가 난다.

    변수 선언은 기본적으로 const를 사용하고, 재할당이 필요한 경우에만 let을 사용한다.

*/


console.log(foo(5, 3)); //'조건에 맞지 않는 입력값입니다.'

const FIRST_CONDITION = 5; 
const SECOND_CONDITION = 3; 
const SET_NUMBER = 10;

function foo(a, b) { // a = 5, b = 3
    if (a > FIRST_CONDITION) {  // 5 > 5 false
        if (a < SET_NUMBER) { //조건이 false라서 실행 안 함.
            a = SET_NUMBER; 
            return a + b; 
        }
        return a + b; // 실행 X
    } else if (b > SECOND_CONDITION) { // 3 > 3 false
        return a + b; // 실행 X
    } else {
        return '조건에 맞지 않는 입력값입니다.'; // 위 조건이 아무것도 맞지 않아서 실행 됨.
    }
}

console.log(foo(5, 5)); // 10

function foo(a, b) { // a = 5, b = 5
    if (a > FIRST_CONDITION) {  // 5 > 5 false
        if (a < SET_NUMBER) { //조건이 false라서 실행 안 함.
            a = SET_NUMBER; 
            return a + b; 
        }
        return a + b; // 실행 X
    } else if (b > SECOND_CONDITION) { // 5 > 3 ㅅtrue
        return a + b; // 실행 ! 5 + 5 = 10
    } else {
        return '조건에 맞지 않는 입력값입니다.'; 
    }
}

console.log(foo(6, 3)); // 13

function foo(a, b) { // a = 6 , b = 3
    if (a > FIRST_CONDITION) {  // 6 > 5 true
        if (a < SET_NUMBER) { //6 < 10
            a = SET_NUMBER; // a = 10
            return a + b; // 10 + 3 = 13
        }
        return a + b; // 실행 X 이미 내부 if에서 return 했기 때문에!?
    } else if (b > SECOND_CONDITION) { 
        return a + b; 
    } else {
        return '조건에 맞지 않는 입력값입니다.'; 
    }
}
console.log(foo(3, 5)); // 8

function foo(a, b) { // a = 3 , b = 5
    if (a > FIRST_CONDITION) {  // 3 > 5 false
        if (a < SET_NUMBER) { 
            a = SET_NUMBER; 
            return a + b; 
        }
        return a + b; // 실행X
    } else if (b > SECOND_CONDITION) {  // 5 > 3 true
        return a + b; // 3 + 5 = 8
    } else {
        return '조건에 맞지 않는 입력값입니다.'; 
    }
}

console.log(foo(11, 3)); // 14

function foo(a, b) { // a = 11 , b = 3
    if (a > FIRST_CONDITION) {  // 11 > 5 true
        if (a < SET_NUMBER) { // 11 < 5 false
            a = SET_NUMBER; // 실행 X
            return a + b; // 실행 X
        }
        return a + b; // 11 + 3 = 14
    } else if (b > SECOND_CONDITION) {  
        return a + b; 
    } else {
        return '조건에 맞지 않는 입력값입니다.'; 
    }
}

/* 리팩토링..이 이게 맞나요..ㅎㅎ 코드를 간편하게..?
읽기 쉽게..? 만드는것이라고 생활코딩 강의로 살짝 알았는데 맞게 했는지 모르겠네요ㅎㅎ*/
function foo(a, b) {
    if (a > FIRST_CONDITION && a < SET_NUMBER){
        a = SET_NUMBER;
        return a + b;
    }else if (a > FIRST_CONDITION) {
        return a + b;
    }else if (b > SECOND_CONDITION) {  
        return a + b; 
    } else {
        return '조건에 맞지 않는 입력값입니다.'; 
    }
}