Vue.component('child-component', {
    template: `
    <div class="container">
        <p>Child Component 입니다.</p>
    </div>
    `
});

Vue.component('comp-article', {
    template:`
        <div class="article">기사내용. 어쩌고 저쩌고.......
            <child-component></child-component>
        </div>
    `
})

new Vue({
    el: '#app'
})