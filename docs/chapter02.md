# 2장 Vue.js 애플리케이션의 시작 - 뷰 인스턴스
<hr>

## 0. 학습내용
- 뷰 인스턴스의 정의 및 사용 방법 이해
- methods 프로퍼티를 활용한 전통적 이벤트 처리방법 학습
- computed, watch 프로퍼티를 이용해 data 객체 내 프로퍼티 변화에 따른 동적 처리
- props 프로퍼티를 이용해 부모 컴포넌트에서 자녀 컴포넌트로 데이터 전달
- 뷰 인스턴스의 생명주기

## 1. 개요
- 뷰 인스턴스는 C의 main() 함수와 같은 역할을 함   
=> 항상 생성해주자
  ```javascript
  var vm = new Vue({ // vm은 ViewModel의 약자, app으로도 자주 씀
      // 옵션들
  })
  ```
- 옵션에 들어갈 수 있는 것 (__vueTest/vueinstance 프로젝트 참고__)
  - 프로퍼티
    - el : HTML 문서에 마운트 될 HTML Element를 나타냄
    - data : 데이터 모델 역할. 객체 내의 값이 변하면 View에 해당하는 값도 변함
    - template
    - methods
    - computed
    - components
    - props 
  - 기타
    - watch
    - created

## 2. 프로퍼티 종류 (상세)
#### 2.1 template 
- Vue 화면에 표시할 HTML Element(h3, button 등) 또는 스타일을 설정   
(vueTest/vueinstance/template.html 참고)
#### 2.2 methods
- 이벤트 처리 등 동적 작업을 처리하는데 사용   
(vueTest/vueinstance/methods.html 참고)
#### 2.3 computed
- Vue Instance의 data 조작에 유용함
- methods 프로퍼티는 명시적인 호출에 따라 호출됨(클릭 등)
- computed는 data 객체 내 프로퍼티가 변할때마다 반응함
- (vueTest/vueinstance/computed.html 참고)
  ```html
    <div id="app">
        <div>
            <h4>{{reversedTitle}}</h4>
            <h4>공급대가: {{price}}</h4>
            <input type="number" v-model="price">
            <h4>공급가액: {{ supplyAmount.toFixed() }}</h4>
            <h4>부가가치세: {{ valueAddedTax.toFixed() }}</h4>
        </div>
    </div>
  ```
  - input number box에, data의 price가 연결되어 있음
  ```javascript
    data: {
        title: '캡틴 마블',
        price: 10000
    },
    computed: {
        reversedTitle: function() {
            return this.title.split('').reverse().join('')
        },
        supplyAmount: function() {
            return (this.price / 11) * 10
        },
        valueAddedTax: function() {
            return (this.price / 11)
        }
    }
  ```
  - price가 변경되는 순간 price와 연결된 supplyAmount, valueAddedTax가 호출됨

#### 2.3.1 computed를 이용한 필터링 : textbox 변경 감지 후 검색어로 filtering
- (vueTest/vueinstance/computedFilter.html 참고)
  > computed 프로퍼티에서 다룬 데이터 바인딩을 양방향 데이터 바인딩이라고 함   
  v-model 디렉티브를 이용해 UI와 뷰 인스턴스의 데이터 변화가 생기면 반응한다.

#### 2.4 props
- 다른 컴포넌트와 데이터를 _직접적으로_ 전달하는데 사용되는 프로퍼티
- 부모 -> 자식 컴포넌트로 데이터를 전달할 때 사용
- 아래의 예제에서, child 내에 변수로 props의 text를 선언하고 부모로 부터 받는 구조이다.
  ```html
    <div id="app">
        <child :text="message"></child>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script type="text/javascript">
        Vue.component('child', {
            props:['text'],
            template: `<div style="background-color:yellow;">{{ text }}</div>`
        });
  ```

#### 2.5 watch
- data 객체 내의 데이터를 모니터링
- 특정 데이터에 변화가 발생하면 후속 처리 수행 => computed랑 다른 점?
- watch는 data가 변하면 data가 주인이 되어 function call
- computed는 data가 변하면 해당 프로퍼티가 연관되어 있는 다른 method 들을 call

#### 2.6 한 페이지 내에서 다수의 뷰 인스턴스
- 한 페이지에는 되도록 하나의 Vue Instance를 두는게 좋음
- 여러개가 있더라도 상호 data에 직접 접근이 가능함.
- 하나의 Vue Instance 안에 여러개의 component로 구성하도록

#### 2.7 뷰 인스턴스의 생명주기
- 시작: Vue Instance가 new 키워드로 초기화 되는 순간
- 이후 beforeCreate hook 발생
- 이후 created hook 발생: data, event, computed, methods 같은 옵션이 설정
- 이후 inline template, el property로 참조된 template을 컴파일, Virtual DOM Update
- Vue Instance에 el property가 없으면 $mount 메서드 실행 후 진행됨

# 73 page까지 봄. (2020/6/4)