function Library(list) {
    this.booklist = list;
    this.find = function(bookTitle){
        for(let i = 0; i< this.booklist.length; i++){
            if(this.booklist[i] === bookTitle){
                    return this.booklist[i];
            }
        };
    }
    this.add = function(addBook){
        this.booklist.push(addBook);
        return this.booklist;
    };
    this.list = function(){
        return this.booklist;
    };
    this.delete = function(deleteBook){
        //indexOf 함수란 배열 내 원하는 값을 찾는 함수이다. 존재 여부도 확인할 수 있다!
        const search = this.booklist.indexOf(deleteBook);
        this.booklist.splice(search, 1);
        return this.booklist;
    }
  }
  const bookList = ['자바스크립트완전정복','파이썬','java의 정석'];
  const bookStore = new Library(bookList);
  console.log(bookStore.find('파이썬')); // 파이썬 (없다면 에러처리~)
  console.log(bookStore.add('HTML정복'));
  console.log(bookStore.list());
  console.log(bookStore.delete('파이썬')); // 파이썬 제거


/*
1.배열

1-1.배열의 개요
배열이란 관련 있는 데이터를 하나의 변수에 할당하여 관리하기 위해 사용되는 데이터 타입이다.
1-2.내장 함수
자바스크립트에서 자체적으로 제공하는 함수!
eval() , parseInt() ...

2.객체

2-1.객체의 개요
객체란 키와 값으로 구성된 프로퍼티의 집합이다. 
2-2. 프로퍼티란
키와 값으로 구성된 것! 키 값으로 유일하게 식별할 수 있다.
프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 이전 프로퍼티를 덮어씌운다!
2-3. 메소드란
함수가 값으로 쓰이는 경우에는 일반 함수와 구분하기 위해 메소드라고 부른다.
*/

const person = {
    name : '홍길동',
    age : 25,
    weight : 80,
    run : function(){
      // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
        return this.weight - 2;
    },
    eat : function(){
      // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
      return this.weight + 5;
    }
  }

  console.log(person.name);
  console.log(person.weight);
  console.log(person.run());
  console.log(person.eat());
