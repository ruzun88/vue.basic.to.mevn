# 5장 다양한 장치 디자인에 적합한 Materialize, Vuetify

## 0. 학습내용
- Materialize 설치 및 사용방법
- Materialize 제공 Grid 시스템 활용
- 이미지, 텍스트가 포함된 card 콘텐츠 추가방법
- Slider, Navigation bar
- Vuetify 설치 및 기본 컴포넌트 사용법
- PC / Mobile 버전 적용 (반응형?)
- vue 및 Firestore 활용 실시간 채팅 프로그램 제작
<br><br>

## 1. Materialize 이용 스타일링
- CSS, Javascript, HTML로 작성된 UI Library
- 반응형 앱에 용이함

#### 1.1 색, 정렬
- 배경색 : yellow ligten-1 / blue darken-5 등으로 사용
- text : blue-text / color-text 형식 사용   
정렬은 class 속성에 left-align / right-align / center-align 추가

#### 1.2 Image, Icon, Video
- 반응형을 사용하기 위해서는 class 속성에 responsive-img 설정
- 아이콘은 구글의 링크 활용   
(https://fonts.googleapis.com/icon?family=Material+Icons)

#### 1.3 화면 크기에 따른 Hide/Show Content
- 감추기 : class 속성 값 hide-on-small-only 활용
- 보이기 : class 속성 값 show-on-medium-and-up 활용

#### 1.4 Grid
- 12컬럼이 한 행
- container에 넣으면 화면의 70% 정도, 넣지 않으면 100% 차지
- 반응형 레이아웃 구성 가능
  <img src="./assets/chapter05_CreatingResponsiveLayouts.jpg">
- 레이아웃은 좌에서 우로 배치   
비우고 싶을 때는 offset 옵션 활용.   
class="col s3 m4 offset-m4" 등으로 사용
- column 순서를 바꾸고 싶을 때는 push/pull 옵션 사용

#### 1.5 Button
- Materiralize 버튼의 종류
  - Raised : 기본 버튼
  - Floating : 원형 버튼
  - Flat : card / model에서 사용하는 버튼

#### 1.6 Table
- 많은 데이터를 나타내는데 유용
- 화면 크기에 따른 자동조정 가능
- responsive-table class를 통해 반응형 테이블 사용 가능

#### 1.7 Card
- 다양한 컨텐츠를 나타내고자 할 때 유용함
- 이미지를 포함한 형태로 사용
- _이쁨._

#### 1.8 navbar
- 웹 사이트 탐색에 사용
- class="container" 정의 된 div 태그 안에서 사용할 것
- a는 로고/브랜드 링크, ul은 탐색 링크
- hide-on-med-and-down 등 옵션으로 반응형 사용 가능

#### 1.9 Slider
- 이미지나 화면을 전환하는 슬라이더

#### 1.10 Autocomplete
- 자동 완성 드롭다운 메뉴

#### 1.11 Scrollspy
- HTML Tag 추적하여 가운데 위치하게 함
<br><br>