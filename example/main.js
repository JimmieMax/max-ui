import Vue from "vue";
import App from "./App.vue";
import DragBox from "../src/components/DragBox";

Vue.config.productionTip = false;
Vue.use(DragBox)

new Vue({
  render: h => h(App)
}).$mount("#app");
