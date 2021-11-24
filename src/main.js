import Vue from "vue";
import App from "./App.vue";
import VueMaterialTabs from "vue-material-tabs";

Vue.config.productionTip = false;

Vue.use(VueMaterialTabs);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
