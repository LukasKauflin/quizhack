require('./bootstrap');

import Vue from 'vue'

Vue.component('wstest', require('./components/WSTest.vue').default)

const app = new Vue({
    el : '#app',

})
