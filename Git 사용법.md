# Git 사용법

* git init 로 .git을 만들어서 깃으 버전 관리를 할 수 있다.
* git status 로 깃이 commit 한 건지 확인
* git commit으로 vim창에 버전을 적을 수 있음
* git renote add origin https://github.com/본인 아이디/깃에 있는 Repositories 입력 (Ex. test.git)
* 만약 fatal: remote origin already exists. 가 뜨면 git remote rm origin 을 입력하면 된다.
* origin에 올라가 있는 상태, 아직 github.com 에는 정보가 안올라 가있음
* git push -u origin master 입력하면  깃에 데이터가 올라간다.
* 깃에서 데이터를 받을려면 git clone https://github.com/아이디/받을려고 하는 Repositories

* 전 버전 불러오기 git reset 버전주소 --hard (공유전 내 컴퓨터에 있을 때에만 reset 작업)

* git add (파일명) 대신에 git commit -a 로 하면 자동으로 commit 해준다.
* vim 까지 안키고 버전명을 바꿀 때 git commit -am "바꿀 버전명"

## branch 사용법

* 브런치 확인 git branch
* 브런치 생성 git branch 이름
* 브런치 이동 git checkout 브런치이름