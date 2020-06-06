const EventBus = new Vue();

Vue.component('result-component', {
    template: ` <div>
                    <h2>저희 은행 방문 ㄳ</h2>
                    <p>현재 대기자수: {{ count }}</p>
                </div>
              `,
    data() {
        return {
            count: 0,
        }
    },
    created() {
        EventBus.$on('subtract', () => {
            if(this.count >=1){
                this.count -= 1;
            }
        }),
        EventBus.$on('add', ()=> {
            this.count += 1;
        })
    }
});

Vue.component('cust-component', {
    template: `<button @click="add">대기표 뽑기</button>`,
    methods: {
        add(){
            EventBus.$emit('add');
        }
    },
});

Vue.component('teller-component', {
    template: `<button @click="subtract">서비스 처리 완료</button>`,
    methods: {
        subtract() {
            EventBus.$emit('subtract')
        }
    },
});

new Vue({
    el: '#app'
})
