function Library(arr) {
    this.arr = arr;
    this.find = (target) => {
        if (arr.indexOf(target) > -1) {
            return target
        } else {
            return new Error(`cannot find your target`);
        }
    }
    this.add = (target) => {
        return this.arr.push(target);
    }
    this.list = () => {
        return this.arr;
    }
    this.delete = (target) => {
        if (arr.indexOf(target) > -1) {
            let myArr = this.arr;
            let removed = this.arr.splice(arr.indexOf(target), 1)
            return myArr;
        }
    }
}

const bookList = ['자바스크립트완전정복','파이썬','java의 정석']
const bookStore = new Library(bookList);

console.log(bookStore.find(`파이썬`))
console.log(bookStore.find(`파이썬쓰~~`))
console.log(bookStore.add(`HTML정복`)); 
console.log(bookStore.list());
console.log(bookStore.delete(`자바스크립트완전정복`))