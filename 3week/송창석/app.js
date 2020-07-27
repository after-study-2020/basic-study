// 3주차 숙제파일입니다.

// num값의 나머지에 따라 return되는 함수
function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    // 3으로도 5로도 나누어 떨어지기 때문에 가장 먼저 작성
    // 함수가 끝나버리기 때문에
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}

// count가 limit까지 fizzBuzz 실행
function fizzBuzzGame(limit) {
    let count = 1;
    while (count <= limit) {
        console.log(fizzBuzz(count));
        count++;
    }
}

// 숫자에 따른 요일 출력
function getDayofWeek(dayNum) {
    switch (dayNum) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return null;
    }
}

// 구구단
function displayGugudan(dan) {
    let count = 1;
    while (count <= 9) {
        // true가 될때까지 실행됨
        console.log(dan + '*' + count + '=' + (dan * count));
        count++;
    }
}



function loop(func, limit) {
    let count = 1;

    while(count <= limit) {
        if(func != displayGugudan) {
            console.log(func(count));
        } else {
            func(count);
        }
        count++;
    }
}

// async loop
function asyncLoop(func, limit, timer) {
    // console.log(func, limit, timer);
    
    // timeout loop
    // for(let count = 1; count <= limit; count++) {
    //     setTimeout(function () {
    //         func(count);
    //     }, timer);
    // }

    // interval loop
    let count = 1;
    let interval = setInterval(function() {
        if(count <= limit) {
            func(count);
            count++;
        } else {
            clearInterval(interval);
        }
    }, timer);
}