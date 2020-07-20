# 방과 후 스터디 팀 Git 작성 방법

### git 

1. 먼저 git clone 을 합니다.

   `git clone https://github.com/after-study-2020/basic-study.git`

2. 개인 브랜치를 만듭니다.

   `git branch 브랜치명(영문)`

   예) git branch study

   라고 한다면 git branch 로 브랜치를 확인하면 master 와 study 브랜치가 있어야 합니다.

3. 만든 개인 브랜치로 이동합니다.

   `git checkout 브랜치명`

4. 개인 브랜치로 이동했으니 해당 주차에서 본인 이름으로 된 폴더를 생성해서 작성해주세요.

5. 작업물을 개인 브랜치에서 개인 브랜치로 올려주세요.

   예) index.js 라는 파일을 생성하고 작업을 했다면 (현재 개인 브랜치로 checkout 된상태)

   `git add index.js` (디렉토리 루트가 같다고 가정) 파일을 git 스테이지에 추가 합니다.

   `git commit -m '커밋내용작성'` 커밋 내용을 작성합니다.

   중요, `git push origin 개인브랜치명` 으로 push 해주세요. 

   **절대 git push origin master 하시면 안됩니다.** 

6. 공부&작성이 완료가 된다면 제가 확인 후 최종 피드백과 함께 master 브랜치로 옮길께요.



#### 새로운 master 브랜치 내용 받기

상황 설명 : 2주차작업을 완료 했으며, 새로운 3주차 내용을 받을때 상황입니다.

master 브랜치에는 새로운 내용이 있지만 클론한 로컬에는 반영이 되지 않았을꺼에요.

github 리모트 : 최신 파일 

local : 본인의 상태

github 리모트서버에 있는 최신 파일을 pull 받아서 local 에도 최신 파일로 변경하는 작업을 설명 하겠습니다.





### 주의 사항

- README.md 내용은 수정하지 않습니다.

- master 브랜치 내용을 절대 수정하지 않습니다.

- 개인 브랜치를 별도로 추가 하여 개인 브랜치에 작성을 합니다.

- 개별적으로 master 브랜치를 개인 브랜치를 merge 하지 않습니다.

  