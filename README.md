# '현재 상태-' 

사용자 입력 기능 제작 완료(240722)
문단 끝내기 / 문장 별 감정표현 작업 시작

## '만들고자 하는 서비스' 

Socket.io 을 통하여 끝말잇기를 통한 소설 쓰기!
단어불문,문장불문 마지막 3개의 글자와 다음 첫 글자만 맞으면 되는 끝말로 소설 쓰기!
센스 문장으로 소설을 재밌게 이끌어 가는 사람에게 남길 수 있는
감정표현 기능 (카카오톡 감정표현 기능 처럼)

## '사용하고자 하는 기능'

ts에서의 redux-toolkit 사용, Socket.io을 사용하여 채팅방과 같은 실시간 데이터 변동 적용
늘 사용하던 fetch에서 벗어나 ajax, react-query로 간단하고 쉽게, 그리고 코드 직관성도 확보

## `이 프로젝트를 통해 보여주고 싶은 모습`

GitHub 를 통한 git 관리 모습, 나아지고 있는 TS 사용
한번도 사용 안해본 기능인 Socket.io 와 ajax, react-query 등 사용

## `시작일 24-07-19`


### '파일 구조'

📦src
 ┣ 📂app  - redux-toolkit 관련 
 ┃ ┣ 📂action1 - 기능 1
 ┃ ┃ ┣ 📜InputSentence.txt
 ┃ ┃ ┣ 📜sentenceCounterSlice.ts
 ┃ ┃ ┗ 📜sentenceStoreSlice.ts
 ┃ ┗ 📜store.ts
 ┣ 📂component - 각각의 component
 ┃ ┣ 📜Input.tsx
 ┃ ┣ 📜Keyword.tsx
 ┃ ┣ 📜Main.tsx
 ┃ ┣ 📜Nav.tsx
 ┃ ┗ 📜Story.tsx
 ┣ 📂css  - 각각의 css
 ┃ ┣ 📜App.css
 ┃ ┣ 📜Input.css
 ┃ ┣ 📜Keyword.css
 ┃ ┣ 📜Nav.css
 ┃ ┗ 📜Story.css
 ┣ 📂function - 기능 함수 모음집
 ┃ ┗ 📜validation.ts  - Joi를 통한 사용자 입력 validation 작업용
 ┣ 📂type - type 모음
 ┃ ┗ 📜Type.d.ts 
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
