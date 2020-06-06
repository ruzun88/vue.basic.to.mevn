# 3장 재사용할 수 있는 컴포넌트

## 0. 학습내용
- 컴포넌트의 정의
- 컴포넌트의 사용범위
- 독립적 컴포넌트간 데이터 전달
- 슬롯의 개념
<br><br>

## 1. 컴포넌트의 정의, 등록
- 컴포넌트는 Vue instance와 비슷하나, el 속성 없음   
=> 사용하기 위해 따로 정의/등록 해야 함

#### 1.1 CDN 이용
- 컴포넌트는 최소 하나의 \<template\>이 있어야 함
- Vue instance를 정의 하기 전에 __먼저__ 정의되어야 함.

#### 1.2 VUE/CLI 이용
1. 컴포넌트 생성: vue file 추가
1. 컴포넌트 구성: template, script, style 추가
1. 컴포넌트 등록: app.vue 또는 main.js에 등록
<br><br>

## 2. 컴포넌트 적용 범위
- CDN을 이용하여 전역/지역 선언 및 사용
  - 전역으로 사용할 경우, Vue Instance 정의 전 컴포넌트를 정의해야 함
  - 지역으로 사용할 경우, Vue Instance 안에 components를 선언해 주면 됨
- VUE/CLI 이용 전역/지역 선언 및 사용
  - 전역으로 사용할 경우, Vue Instance 정의 전, main.js에 미리 선언한 후 사용
  - 지역으로 사용할 경우, 사용하는 export 하여 사용한다.
<br><br>

## 3. Component 간 데이터 전달
- 컴포넌트는 독립적으로 동작하여 상호 영향 받지 않음
- 다른 컴포넌트로 데이터 전달 해야 하는 경우, 다음을 활용
  - props : parent component -> child component
  - 이벤트 ($emit, $on) : child component -> parent component
  - 이벤트 버스 : parent - child 관계가 성립하지 않는 경우

#### 3.1 props
- Parent 에서 Child로 데이터 전달
- Vue Instance 생성 전, Child component로 등록 필요
- 전달시 v-bind 활용
  ``` html
  <child-component v-bind:props_name="데이터"></child-component>
  ```

#### 3.2 $emit
- Child 에서 Parent로 데이터 전달
- $emit 이외에도, $parent에 직접 접근하여 전달할 수도 있음

#### 3.3 이벤트 버스
- Pub/Sub 패턴 : 한 component에서 이벤트 발행 -> 다른 component가 구독
- Event bus 초기화
  - Vue instance로 정의하고, 다른 곳에서 사용가능하도록 export 함
- Event bus 사용
  - Event 발행 : EventBus.$emit('이벤트이름', ['payload']) 사용
  - Event 구독 : on() 활용 (event 이니까 on 활용. 일관성 甲)
<br><br>

## 4 슬롯
- 슬롯은 컴포넌트를 재사용할 수 있게 함
- vuetify에서 슬롯은 UI 컴포넌트에서 사용됨

#### 4.1 Unnamed slot (i.e default slot)
- 기본 슬롯
- 부모 컴포넌트 일부를 자녀 컴포넌트에 injection 가능

#### 4.2 Named slot
- 원하는 위치에 다양한 유형을 삽입할 때 사용
- slot name을 지정해서 사용

#### 4.3 Scoped Slot
- Vue.js 2.1 이후 버전에서 사용 가능
- template 자체를 재사용할 수 있는 slot
- 필요시 child component에서 parent component로 데이터 전달 가능

#### 4.4 v-slot
- Vue.js 2.6 이후 버전에서 사용 가능
- 모든 슬롯을 v-slot으로 통일
- HTML 태그에 직접 이용 불가, component, template 태그에서만 사용 가능
- 단축형태를 제공한다.
  ``` html
  <template #header="{msg}"> </template>
  <ComponentFoo #default="{msg}"> </ComponentFoo>
  ```