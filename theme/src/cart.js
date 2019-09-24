import Vue from 'vue'
import App from './vue/cart.vue'

let element = document.querySelector('#cart-app')

if (element) {
    new Vue({
        render: (h) => h(App)
    }).$mount(element)
}
