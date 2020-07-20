// 1. 받은 숫자를 역순으로 출력하는 함수
// while 활용
// 이유: 고정된 초기값이 필요없고 조건에 초점이 맞추어진 내용이라 for보다는 while이 어울린다고 생각합니다.
const reverseCount = function (num, func) {
    while (num > 0) {
        func(num);
        num--;
    }
};

reverseCount(5, function (i) {
    console.log(i);
});

// 2. 영어로 된 숫자를 숫자로 변환 하기 (1~10까지만...one two three four ... ten)
// switch 활용
// 이유: 필요한 조건에 만족하는 경우마다 각각의 조건을 매칭할 수 있기 때문입니다.
const convertToNumber = function (string) {
    switch (string) {
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "ten":
            return 10;
    }
};

// 3. 입력에 아래와 같이 각각 쏘나타,K5,말리브,sm3,320D,A4, 에러처리, 되었을때 자동차 브랜드명을 출력
// switch 활용
// 이유: 위와 같이 필요한 조건에 만족하는 경우마다 각각의 조건을 매칭할 수 있기 때문입니다.
// 2번 문제와 다르게 예외처리가 필요하여 default를 추가하였습니다.
const carBrand = function (모델명) {
    switch (모델명) {
        case "쏘나타":
            return "현대자동차";
        case "K5":
            return "기아자동차";
        case "말리브":
            return "쉐보레";
        case "sm3":
            return "르노삼성";
        case "320D":
            return "BMW";
        case "A4":
            return "아우디";
        default:
            return "에러: 해당하는 모델명이 없습니다.";
    }
};

carBrand("쏘나타"); // 현대자동차
carBrand("K5"); // 기아자동차
carBrand("말리브"); //  쉐보레
carBrand("sm3"); // 르노삼성
carBrand("320D"); // BMW
carBrand("A4"); // 아우디
carBrand("스터디"); // 에러: 해당하는 모델명이 없습니다.


// 4. 1~ n까지의 합을 구하는 함수
// while 활용
// 이유: 1번과 마찬가지로 고정된 초기값이 필요없고 조건에 초점이 맞추어진 내용이라 for보다는 while이 어울린다고 생각합니다.
const sum = function (maxNumber) {
    let total = 0;
    let count = 0;

    while (count <= maxNumber) {
        total += count;
        count++;
    }

    return total;
};

sum(100); // 5050