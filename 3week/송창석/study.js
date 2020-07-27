// 1. 받은 숫자를 역순으로 출력하는 함수
const reverseCount = (count, func) => {
    while(count > 0) {
        func(count);
        count--;
    }
}
// for문 case
// const reverseCount = (count, func) => {
//     for(let i = count; i > 0; i--) {
//         func(i);
//     }
// }

reverseCount(5, function(i) {
    console.log(i);
});


// 2. 영어로 된 숫자를 숫자로 변환 하기 (1~10까지만...one two three four ... ten)
const convertToNumber = (numStr) => {
    // console.log(numStr);
    switch(numStr) {
        case 'one' :
            return 1;
        case 'two' :
            return 2;
        case 'five' :
            return 5;
        case 'six' :
            return 6;
        case 'seven' :
            return 7
        case 'eight' :
            return 8
        case 'nine' :
            return 9
        case 'ten' :
            return 10
        default :
            return NaN;
    }
}

convertToNumber('one') // 1
convertToNumber('two') // 2
convertToNumber('five') // 5
convertToNumber('ten') // 10
convertToNumber('asdasd') // NaN

// 3. 입력에 아래와 같이 각각 쏘나타,K5,말리브,sm3,320D,A4, 에러처리, 되었을때 자동차 브랜드명을 출력
const carBrand = (brandName) => {
    switch(brandName) {
        case '쏘나타':
            return '현대자동차';
        case 'K5':
            return '기아자동차';
        case '말리브':
            return '쉐보레';
        case 'sm3':
            return '르노삼성';
        case '320D':
            return 'BMW';
        case 'A4':
            return '아우디';
        default:
            return '자동차 브랜드명이 아닙니다.'
    }
}

carBrand('쏘나타') // 현대자동차
carBrand('K5') // 기아자동차
carBrand('말리브') //  쉐보레
carBrand('sm3') // ?
carBrand('320D') // ?
carBrand('A4') // ?
carBrand('스터디') // 에러처리!

// 4. 1~ n까지의 합을 구하는 함수
const sum = (endNum) => {
    let count, sum;
    count = 1;
    sum = 0;
    while(count <= endNum) {
        sum = sum + count;
        count++;
    }
    return sum;
}

console.log(sum(100));