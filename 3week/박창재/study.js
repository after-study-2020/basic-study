// 1번 문제
function reverseCount(cnt, output){
    for(let i=cnt; i>0; i--){
      output(i);
    }
  }
  reverseCount(5, function(i){
    console.log(i); // 1,2,3,4,5
  })
  
  // 2번 문제
  function convertToNumber(text){
    const numArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten'];
  
    for( let i=0; i<numArray.length; i++ ){
      return numArray.indexOf(text) + 1;  
    }
  }
  convertToNumber('one');   //1
  convertToNumber('two');   //2
  convertToNumber('three'); //3
  convertToNumber('four');  //4 
  convertToNumber('five');  //5
  convertToNumber('six');   //6
  convertToNumber('seven'); //7
  convertToNumber('eight'); //8
  convertToNumber('nine');  //9
  convertToNumber('ten');   //10
  
  
  // 3번 문제
  function carBrand(carName){
    const carArray = ['쏘나타','K5','말리부','SM3','320D','A4','스터디'];
    const brandArray = ['현대자동차','기아자동차','쉐보레','르노삼성','BMW','아우디','에러처리'];
  
    for( let i=0; i<carArray.length; i++ ){
      return brandArray[ carArray.indexOf(carName) ];
    }
  }
  carBrand('320D'); // BMW
  
  // 4번 문제
  function sum(total){
    let a = 0;
    for( let i=1; i<=total; i++ ){
      a+=i;
    }
    return a;
  }
  sum(100); //5050

  // 주은님 피드백은 잘 받았습니다! 피드백 내용대로 다시 생각해보고 구현해보겠습니다!