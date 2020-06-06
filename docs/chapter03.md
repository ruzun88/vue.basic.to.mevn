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
- v-bind:src는 이미지 연결 목적
- v-bind:href는 링크 연결 목적

## 3. v-model로 데이터 바인딩
- v-model은 양방향 데이터 바인딩 목적   
사용자 데이터 변경 <-> 바인딩 된 데이터 변경

## 4. v-on으로 이벤트 처리
- v-on은 이벤트 처리를 위해 사용함 
   ```html
  <element v-on:eventName = "expression"> // method 없이 직접 접근
  <element v-on:eventName = "method">
  <element v-on:eventName = "method(parameter)"> // parameter 활용
  <element @eventName = "method"> // v-on 단축
  <element @eventName = "method(parameter)">
   ```

#### 4.1 이벤트 획득 방법
1. bubble
    - 이벤트 발생한 element -> 부모 element
1. capture
    - 부모 element -> 점점더 하위로
    - addEventListener로 capture  옵션을 주어야 함
1. target
    - 이벤트가 발생하는 대상만 이벤트에 반응

#### 4.2 이벤트 수식어
1. stop: 이벤트 버블링 중지
1. prevent
    - 이벤트 발생 후, 브라우저가 하는 기본 동작을 중지시킴.
    - form 태그 submit 클릭시 데이터 전송 제한
    - link 클릭시 redirect 제한
1. capture: 이벤트 캡쳐링
1. self: 이벤트를 자기만 발생시킴
1. once: 한번만 발생
1. passive: 수동적 이벤트 리스닝 성능 향상에 사용...(?)