# 3장 엘리먼트에 기능을 덧붙이는 디렉티브

## 0. 학습내용
- v-if / v-for 를 활용한 흐름 제어
- v-bind를 이용한 이미지, 링크, 스타일, 키에 대한 데이터 바인딩
- v-model, form 엘리먼트간 양방향 데이터 바인딩
- v-on을 이용한 이벤트 처리
- 이벤트 수식어를 이용한 event bubbling, event capturing, event prevent
  > Directive : HTML 엘리먼트의 특별한 속성 형태   
  조건 처리, 반복 처리, 데이터 바인딩, 이벤트 처리에 사용

## 1. v-if, v-for를 이용한 흐름 제어
- 조건에 따라 실행시킬 수 있고, 반복을 할 수 있음
  ``` html
  <html_element v-if="표현식"> // 참이면 나타나고, 거짓이면 버려짐
  // 내용
  </html_element>
  ```
