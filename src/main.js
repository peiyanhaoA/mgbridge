import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false;
import VueEvents from 'vue-events'
Vue.use(VueEvents);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})