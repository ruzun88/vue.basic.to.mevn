<template>
  <div id="app">
    <OurHeader/>
    <our-body/>
    <our-footer/>

    <child-component/>
    <comp-article/>
    <hr>
    {{name}}
    <props-child-component v-bind:childmessage="message"></props-child-component>
    <hr>
    {{nameEmit}}
    <EmitChildComponent v-on:sendmessage="receivemessage"></EmitChildComponent>
    <hr>
    <label> Event BUS TEST </label>
    <products></products>
    <product-detail></product-detail>
    <hr>
    <label> Unnamed Slot TEST </label>
    <child-com>
      <p>파리에 이른 저녁에 에펠탑 구경 추천</p>
    </child-com>
    <hr>
    <label> Named Slot TEST </label>
    <child-comp :ran_city="randomCity">
      <div slot="best">
        <figure>
          <img src="@/assets/imgs/vienna.jpg"/>
          <figcaption>비엔나</figcaption>
        </figure>
      </div>
      <div slot="footer">
        <p>&copy; All right reserved</p>
      </div>
    </child-comp>
    <hr>
    <label> Scoped Slot TEST </label>
    <TravelList :items="cities">
      <template slot-scope="{items}">
        <p v-for="item in items" :key="item.cityname">{{ item.cityname }}</p>
      </template>
    </TravelList>
    <hr>
    <label> v-slot TEST </label>
    <TravelList v-slot="{items}" :items="cities">
      <p v-for="item in items" :key="item.cityname">{{ item.cityname }}</p>
    </TravelList>
    
  </div>
</template>

<script>
import OurHeader from './components/OurHeader'
import OurBody from './components/OurBody'
import OurFooter from './components/OurFooter'

import ChildComponent from './components/ChildComponent'
import CompArticle from './components/CompArticle'

import PropsChildComponent from './components/PropsChildComponent'

import EmitChildComponent from './components/EmitChildComponent'

import Products from './components/EventBus/Products'
import ProductDetail from './components/EventBus/ProductDetail'

import ChildCom from './components/UnnamedSlot/Child'

import ChildComp from './components/NamedSlot/ChildComp'

import TravelList from './components/ScopedSlot/TravelList'

export default {
  name: 'App',
  components: {
    OurFooter, OurBody, OurHeader,
    'child-component': ChildComponent, 'comp-article': CompArticle,
    PropsChildComponent, EmitChildComponent,
    Products, ProductDetail,
    ChildCom, ChildComp, TravelList
  },
  data: function (){
    return {
      name: 'props 이용 데이터 전달',
      message: '부모 컴포넌트로부터 전달 됨',
      nameEmit: 'emit을 이용한 데이터 전달',
      cities: [
        {cityname:'paris', pic:require('@/assets/imgs/paris.jpg')},
        {cityname:'amsterdam', pic:require('@/assets/imgs/amsterdam.jpg')},
        {cityname:'praha', pic:require('@/assets/imgs/praha.jpg')}
      ],
      korCities: ['서울', '수원', '용인']
    }
  },
  methods: {
    receivemessage(msg) {
      this.nameEmit = msg;
    }
  },
  computed: {
    randomCity() {
      return this.cities[Math.floor(Math.random() * this.cities.length)]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  background: yellowgreen;
  color: whitesmoke;
  margin-top: 10px;
}
</style>
