// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(Vuex);
Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	template: '<App />',
	components: { App },
});
