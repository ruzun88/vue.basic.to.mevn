new Vue({
    el: '#app',
    data() {
        return {
            navlinks: [
                {text: '홈', href:'#home'},
                {text: '검색', href:'#search'},
                {text: '관광명소', href:'#attractions'},
                {text: '문의', href:'#contact'}
            ],
            slides : [          
                {imgsrc:'../assets/imgs/amsterdam.jpg', title:'암스테르담(Amsterdam)', description:'Hello World'},
                {imgsrc:'../assets/imgs/paris.jpg', title:'파리(Paris)', description:'어쩌고 저쩌고'},
                {imgsrc:'../assets/imgs/vienna.jpg', title:'비엔나(Vienna)', description: '어쩌고저쩌고'},
                {imgsrc:'../assets/imgs/praha.jpg', title:'프라하(Praha)', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
            ],
            attractions: [
                {imgsrc:'../assets/imgs/amsterdam.jpg', title:'암스테르담(Amsterdam)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
                {imgsrc:'../assets/imgs/vienna.jpg', title:'비엔나(Vienna)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
                {imgsrc:'../assets/imgs/paris.jpg', title:'파리(Paris)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
                {imgsrc:'../assets/imgs/praha.jpg', title:'프라하(Praha)', details:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fugiat laudantium doloribus vero, perferendis pariatur accusantium minus quidem consequuntur nobis recusandae?'},
            ]
        }
    },
})