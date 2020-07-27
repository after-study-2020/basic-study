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
console.log(bookStore.find('파이썬')) // 파이썬 (없다면 에러처리~)
console.log(bookStore.add('HTML정복'))
console.log(bookStore.list()) // bookList을 출력
console.log(bookStore.delete('파이썬')) // 파이썬 제거
