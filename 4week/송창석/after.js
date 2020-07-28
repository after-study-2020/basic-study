function Library(list) {
    // return으로 객체반환
    return {
        find(name) {
            const result = list.find(element => element === name);
            return result === undefined ? 'Error' : result;
        },
        add(name) {
            list.push(name);
            return list;
        },
        list() {
            return list;
        },
        delete(name) {
            list.splice(list.indexOf(name),1);
            return list;
        }
    }
}
const bookList = ['자바스크립트완전정복','파이썬','java의 정석']
const bookStore = new Library(bookList);
// console.log(bookStore.find('파이썬')) // 파이썬 (없다면 에러처리~)
// console.log(bookStore.add('HTML정복'))
// console.log(bookStore.list()) // bookList을 출력
// console.log(bookStore.delete('파이썬')) // 파이썬 제거


const person = {
    name : '홍길동',
    age : 25,
    weight : 80,
    run : function(exercise){
      // TODO :: 운동을 하는것, 나의 2키로씩 살이 빠진다.
      if(exercise === '농구') return this.weight = this.weight - 8;
      if(exercise === '마라톤') return this.weight = this.weight - 12;
      if(exercise === '숨쉬기') return this.weight = this.weight - 80;
      return this.weight = this.weight - 2;
    },
    eat : function(eating){
      // TODO :: 먹는것, 나의 5키로씩 살이 찐다.
      if(eating === '맛있는거') return this.weight;
      if(eating === '물') return this.weight = this.weight + 50;
      return this.weight = this.weight + 5;
    }
}
  
console.log(person.name)
console.log(person.weight)
console.log(person.run('숨쉬기'))
console.log(person.eat('맛있는거'))

// 운동에 대한 종류를 받고, 그종류에 따른 살이 빠지는 키로수를 추가해보세요.
// 마찬가지로 먹는것도 먹는것에 따라 살이찌는 것을 구현해보세요.
