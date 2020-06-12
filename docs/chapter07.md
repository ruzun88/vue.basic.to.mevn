# 7장 라우팅을 활용한 웹사이트 탐색

## 0. 학습내용
- vue router를 활용한 라우팅 프로젝트 생성
- router-view, router-link, redirect의 개념 이해
- nested routes 개념
named routes, named views로 다수의 뷰를 하나의 페이지에서 관리
navigation guard를 이용한 페이지 접근 제어
<br><br>

## 1. vue-router
- Vue.use(Router) 를 통해 Router 설정
- mode 속성
    - hash: 가장 광범위 하지만, URL 중간에 # 문자가 포함됨
    - history: HTML5 History 기능 지원 (익스플로러는 지원 안됨)
- base 속성
    - 기본 URL, Default는 '/'
- routes 속성
    - path, name, component 속성으로 구성된 집합
    - path는 url 주소
    - name은 component 이름
    - component는 path에 설정된 URL과 연결된 컴포넌트
- views 폴더
    - 라우팅과 관련된 컴포넌트 사용 목적
<br><br>

## 2. 라우터 뷰, 라우터 링크, 리다이렉트
- 지정된 경로에 일치하는 컴포넌트를 렌더링
- html의 \<a\> 태그로 렌더링 됨
- 라우터 링크는 this.$router.push(location) 형태로 접근함
- routes에 없는 URL로 접근할 경우, 404 page를 타나내는 방법
    ```json
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }
    ```
- rountes에 없는 URL로 접근할 경우, '/' page로 redirect 하는 방법
    ```json
    {
        path: '*',
        redirect: '/'
    }
    ```
<br><br>

## 3. 중첩 라우트
- 하위 경로를 렌더링 하는 목적 (eg. admin/products/list)
- routes 속성에 경로 추가 및 children 옵션 활용

## 4. Named Routes와 Named Views
#### 4.1 Named Routes
- 경로 위치의 단순화
- 데이터 전달이 쉬움

#### 4.2 Named View
- 여러개의 뷰를 하나의 뷰에서 보여줄 때 사용
- N개의 뷰를 한 페이지에 나타낸다면, N개의 router-view를 사용하여 구성함

## 5. 네비게이션 가드
- 권한 밖의 부적합한 방법으로 접근하는 것을 막음
- Per-route Guard, In-component Guard가 있음
#### 5.1 컴포넌트 수준의 Guard
- beforeRouteEnter : 페이지 전환시, 페이지를 떠나고, 컴포넌트에 접근 하기 전에 동작
- beforeRouteLeave : 페이지 전환시, 페이지를 떠나기 전에 동작
- beforeRouteUpdate : 현재 컴포넌트 라우트에 변경이 발생 시 호출
#### 5.2 per-route guard
- 특정 라우트를 설정함.
- router 객체 내에서 beforeEnter를 직접 정의해서 사용 가능
#### 5.3 전역 Navigation Guard
- beforeEach: 새로운 경로를 바꾸기 전에 발생함
- beforeResolve: beforeEach와 비슷하나, 모든 컴포넌트 및 경로별 가드가 호출 된 후, 호출됨