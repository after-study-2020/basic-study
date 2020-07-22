//복습1 - 반복을 해야 하기 때문에 while문과 for문이 적합하다고 생각합니다.
//복습1 - while문
function reverseCountWhile(n, func){
    
    while(n > 0) {
        func(n);
        n--;
    };
};

reverseCountWhile(10, function(i){
    console.log(i);
});

//복습1 - for문
function reverseCountFor(n, func){
    
    for(var i = n; i > 0; i--){
        func(i);
    };
};

reverseCountFor(5, function(i){
    console.log(i);
});

/*복습2 - 조건이 아닌 인자의 값을 찾아 출력하는 것이 더 좋을 것 같아서 swhich문을 사용하였습니다.
그리고 값을 찾게되면 break문으로 swicth문을 빠져나오기 때문에 계속 조건을 찾는 if문보다 나을 것(?) 같습니다..*/
function convertToNumber(charNum){
    switch(charNum){
        case 'one' :
            console.log(1);
            break;
        case 'two' :
            console.log(2);
            break;
        case 'three' :
            console.log(3);
            break;
        case 'four' :
            console.log(4);
            break;
        case 'five' :
            console.log(5);
            break;
        case 'six' :
            console.log(6);
            break;
        case 'seven' :
            console.log(7);
            break;
        case 'eight' :
            console.log(8);
            break;
        case 'nine' :
            console.log(9);
            break;
        case 'ten' :
            console.log(10);
            break;
        default : 
            console.log('예외');
    };
};

convertToNumber('one');

/*복습3 - 이 문제도 조건이 아닌 값을 찾아 출력하는 것이므로 swicth문이 적합하다고 생각합니다.
if문으로도 작성해봤습니다 */
function carBrandSwitch(){
    const carType = prompt("차 종류를 입력하세요.");
    switch(carType){
        case '쏘나타' :
            alert('현대자동차');
            break;
        case 'K5' :
            alert('기아자동차');
            break;
        case '말리브' :
            alert('쉐보레');
            break;
        case 'sm3' :
            alert('르노삼성');
            break;
        case '320D' :
            alert('BMW');
            break;
        case 'A4' :
            alert('아우디');
            break;
        default : 
            console.log('스터디');
    };
};

carBrandSwitch();

function carBrandIf(){
    const carName = prompt("차 종류를 입력하세요.");
    if(carName == '쏘나타'){
        alert('현대자동차');
    }else if(carName == 'K5'){
        alert('기아자동차');
    }else if(carName == '말리브'){
        alert('쉐보레');
    }else if(carName == 'sm3'){
        alert('르노삼성');
    }else if(carName == '320D'){
        alert('BMW');
    }else if(carName == 'A4'){
        alert('아우디');
    }else{
        alert('스터디');
    };
};

carBrandIf();

//복습4
function sum(count){
    let total = 0;
    for(i = 0; i <= count; i++){
        total += i;
    };
    console.log(total);
};

/*const total = 0;으로 해봤는데 계속 안 돼서 찾아보니까..재할당이 불가능한 것으로 알았습니다..!!
재할당이 가능한 let으로 변수 선언하였습니당!*/

sum(100);
