function Library(bookList,cb){ 
    let result = 0;
    for(i = 1; i < bookList.length; i++){
        if(bookList[i] === cb){
            return bootList[i];
        }
    }
}

const bookList = ['자바스크립트완전정복','파이썬','java의 정석']
const bookStore = new Library()