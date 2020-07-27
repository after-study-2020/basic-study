# 4주차 방과 후 스터디

> 키워드 : 배열, 객체

### ✏️ 스터디 예제

**아래를 구성하는 객체를 구현해 보세요.**

```javascript

function Library() {
    let totalBookLength = bookList.length;

    return {
        find: function(bookName) {
            let counter = 0;

            for (let i = 0; i < totalBookLength; i++) {
                if (bookList[i] === bookName) return bookList[i];

                counter += i;

                if (counter === totalBookLength) return "에러";
            }
        },
        add: function(bookName) {
            bookList[totalBookLength] = bookName;
            totalBookLength = bookList.length;

            return bookList;
        },
        list: function() {
            return bookList;
        },
        delete: function(bookName) {
            let newBookList = [];

            for (let i = 0; i < totalBookLength; i++) {
                if (bookList[i] !== bookName) {
                    newBookList[newBookList.length] = bookList[i];
                } 
            }

            return newBookList;
        }
    } 
};

const bookList = ["자바스크립트완전정복", "파이썬", "java의 정석"];
const bookStore = new Library();

console.log(bookStore.find("파이썬")) // 파이썬
console.log(bookStore.find("파이썬썬")) // 에러
console.log(bookStore.add("HTML정복")) // ["자바스크립트완전정복", "파이썬", "java의 정석", "HTML정복"]
console.log(bookStore.list()) // ["자바스크립트완전정복", "파이썬", "java의 정석", "HTML정복"]
console.log(bookStore.delete("파이썬")) // ["자바스크립트완전정복", "java의 정석", "HTML정복"]
```

배열 메소드를 사용하지 않고  

지금까지 배운 내용만으로 구현하려고 노력해봤습니다.  

대신 좀 지저분하긴 한 것 같아요 ㅋㅋ  

피드백 부탁드립니다!