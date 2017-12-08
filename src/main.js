import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
<<<<<<< HEAD
import VueEvents from 'vue-events'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueEvents);
Vue.config.productionTip = false;
=======
Vue.config.productionTip = false;
import VueEvents from 'vue-events';

Vue.use(VueEvents);

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

>>>>>>> 4bcf4b1f316ce9397a49e3679219874d961ee840
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})