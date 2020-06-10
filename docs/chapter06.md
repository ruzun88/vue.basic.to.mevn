# 6장 폼을 이용해 사용자가 입력한 데이터를 서버로 전달하기

## 0. 학습내용
- form 관련 HTML element
- form 관련 HTML element와 v-model의 데이터 바인딩
- 유효성 검사 방법 (기본 + vuetify)
<br><br>

## 1. Form Element
- 행 하나 : input element, type을 number로 하면 숫자만 사용 가능
- 여러 행 : textarea
- 다 건의 옵션 선택: checkbox
- select box로 옵션 선택 : select element
<br><br>

## 2. 유효성 검사
- preventDefault 함수로 Form 전송을 막음
- vuetify는 rules prop을 이용해 유효성 검사를 수행함   
데이터 입력 없는 경우, 최소 입력 자릿수, 이메일 입력 체크 등의 룰이 있음
