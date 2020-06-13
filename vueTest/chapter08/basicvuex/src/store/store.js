import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true, // Vuex 상태가 mutaion 밖에서 변할 때의 에러
    state: { // app에서 사용할 데이터를 포함하는 객체
        items: [    
            {country: "France", city: "Paris", attraction: "에펠탑", entrance_fee:10},
            {country: "Italy", city: "Venezia", attraction: "산마르코 대성당", entrance_fee:0},
            {country: "Austria", city: "Salzburg", attraction: "성", entrance_fee:15.2},
            {country: "Getmany", city: "Frankfurt", attraction: "뢰머광장", entrance_fee:0},
            {country: "Nederland", city: "Amsterdam", attraction: "국립미술관", entrance_fee:17.50},
        ],
        selectedCountry: ''
    },
    getters:{
        items: state => {
            return state.items
        },
        filteredItems:state =>{
            return state.items.filter(item => {return item.country == state.selectedCountry})    
        }
    },
    mutations:{
        reducePrice: state => {
            state.items.forEach(item =>{
                item.entrance_fee = (item.entrance_fee -(item.entrance_fee * 0.2))
            })
        },
        goCountry: (state, inCountry) => {
            state.selectedCountry = inCountry;
        }
    
      },
})