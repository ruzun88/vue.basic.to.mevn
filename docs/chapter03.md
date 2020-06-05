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
- v-if / v-else-if / v-else 구문을 __연속__ 해서 사용할 수 있음.   
중간에 끊어지면 정상동작하지 않는다.
- v-if는 객체 자체가 생성되거나 생성되지 않음
- v-show는 DOM에는 생성되어 있으나 Display 옵션이 on/off 되는 개념
- v-for을 사용할 때는 key 속성을 설정하여 vue가 검색/정렬할 수 있도록 함

## 2. v-bind로 데이터 바인딩
- v-bind는 HTML eliment에 속성을 연결하는데 사용함
- style 관련 데이터 바인딩은 :class, :style 사용