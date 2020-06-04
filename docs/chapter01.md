# 1장 Vue.js 소개
<hr>

## 1. 개요
- UI / 단일 페이지 어플리케이션에 유용한 Open Source js F/W
- Angular의 양방향 데이터 바인딩, React의 가상 Dom을 반영
- Prototyping에 최적화
<br><br>

## 2. 특징
#### 2.1 양방향 데이터 바인딩
- v-model 디렉티브를 사용하면 데이터 변수와 UI와 양방향 데이터 바인딩이 가능함
- v-model 디렉티브로 바인딩 된 DOM에도 변경사항이 자동적으로 반영됨.   
따라서 별도 이벤트 처리가 불필요함
   
#### 2.2 가상돔
- HTML 페이지를 하나의 트리 형태의 모델로 저장하는데, 이를 DOM이라 함
- DOM 트리에 속한 요소, 속성, 텍스트, Document 등을 노드라고 함
- Virtual DOM은 필요한 경우에만 직접 DOM에 변화를 줌   
Vue Instance와 DOM 사이에 있으면서, 변화가 생기면 실제 DOM에 반영

#### 2.3 장점
1. Learning Curve
1. 유연성: 구조가 단순하여 기존 프로젝트에 vue 적용 가능
1. 양방향 데이터 바인딩을 이용한 UI와 데이터 모델간의 Reactive 기능
1. 점점 사용자들이 많아지고 있음

## 3. Vue 시작하기
- 준비물
  - node.js 설치 및 확인
    ```
    $ node --version
    $ npm --version
    ```
- 프로젝트 정보 및 의존성 정보를 가진 파일 생성: **packgage.json**
  - 명령어
    ```
    $ npm init
    ```
- vue/cli 설치
  - 명령어: -g / -global로 설치하면 다른 Project에서도 사용 가능   
  아래 명령어 수행은 1분가량 걸림.
    ```
    $ npm install --global @vue/cli
    $ vue -V
      @vue/cli 4.4.1
    ```
- vue project 시작
  - 명령어
    ```
    $ vue create 프로젝트명
    -------- 예시 --------
    $ vue create firstapp
    $ cd firstapp
    $ npm run serve
    ```
  - 확인
    - http://localhost:8080 접속
    