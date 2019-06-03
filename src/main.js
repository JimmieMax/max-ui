import Vue from 'vue'
import App from './App.vue'
import Components from "./components/index"

const MaxUI = {
  install(Vue) {
    Object.keys(Components).forEach(name => {
      Vue.component(name, Components[name])
    })
  }
}
Vue.use(MaxUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')