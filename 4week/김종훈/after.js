function Library(){ 
    return{
        find : function(name){
            for(i = 0;i < bookList.length; i++){
                if(bookList[i] == name){
                    return bookList[i];
                } 
            }
            return '에러';
        },
        add : function(name){
            if(bookList.indexOf(name) == -1){
                bookList.push(name);
                return bookList;
            }
        },
        list : function(){
            return bookList;
        },
        delet : function(name){
            for(i = 0;i < bookList.length; i++){
                if(bookList[i] == name){
                    bookList.splice(bookList.indexOf(name),1)
                    return bookList;vi
                }
            }
        }
    }
}

const bookList = ['자바스크립트완전정복','파이썬','java의 정석']
const bookStore = new Library()