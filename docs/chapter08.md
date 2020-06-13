# 8장 VUEX
- Vuex는 Vue app을 위한 상태관리 + 라이브러리
- 중앙에 데이터 저장소를 두어 app 내 모든 컴포넌트가 사용 가능함

## 0. 학습내용
- Vuex 패키지 설치 및 동작 이해
- getters 함수 : 상태에서 데이터를 가져옴
- mutation : 상태를 바꾸는 유일한 방법
- mutation commit을 통한 간접적 상태 변경, 비동기적 동작하는 Action
- vuex의 보조함수
- Mutations와 Actions의 차이점

## 1. Vuex 사용 방법
- vuex 설치
- store.js 파일을 생성하고, vuex 관련 데이터 정의
- main.js의 Vue 객체에 vuex를 등록

## 2. Getters
- state에서 데이터를 가져오는 함수
- store에 있는 computed 프로퍼티로 생각할 수 있음   
getter의 결과도 의존성에 변화가 생겼을 때만 재평가 되기 때문

## 3. Mutations
- 한곳에서 상태를 변경하게 되므로, 일관되게 데이터 관리가 가능함
- 적용 방법
    1. store.js에서 mutation 정의
    2. 컴포넌트의 해당 메서드 부분 커밋 (적용)