new Vue({
    el: '#app',
    data() {
        return {
            orders: [
                {order_num:'O_1', item:'아메리카노', quantity: 1, price: 3000},
                {order_num:'O_2', item:'카푸치노', quantity: 2, price: 10600},
                {order_num:'O_3', item:'카라멜 마키아또, 아메리카노', quantity: 2, price: 8900},
                {order_num:'O_4', item:'허니브레드', quantity: 1, price: 2000},
                {order_num:'O_5', item:'에스프레소, 허니브레드', quantity: 2, price: 6500}
            ]
        }
    },
    methods: {
        showMessage($event) {
            ($event.target.children.length == 2) ? alert($event.target.children[0].innerText) : alert($event.target.innerText);
        }
    },
})