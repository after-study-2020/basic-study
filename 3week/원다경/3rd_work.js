function fizzBuzz(num){
    if(num % 15 === 0){
        return "fizzBuzz";
    }else if(num % 3 === 0){
        return "Fizz";
    }else if(num % 5 === 0){
        return "Buzz";
    }else{
        return num;
    };
};


//loop함수
function loop(func, count){
    let i = 1;
    while(count >= i){
        func(i);
        i++;
    };
};

loop(function(i) {
    console.log(fizzBuzz(i));
 }, 6);

//asyncLoop 함수
// function asyncLoop(func, count, setTime){
//     let i = 1;
//     while(count >= i){
//         setInterval(func(i),setTime);
//         i++;
//     }
// };

// asyncLoop(function(i) {
//     console.log(fizzBuzz(i));
//  }, 6, 1000);