import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { sync } from "vuex-router-sync";

sync(store, router); // done. Returns an unsync callback fn
Vue.config.productionTip = false;

// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    // 聚焦元素
    el.focus();
  }
});

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount("#app");
