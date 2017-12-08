import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueEvents from 'vue-events'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueEvents);
Vue.config.productionTip = false;
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})