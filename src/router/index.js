import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Table from '@/components/Table';
import HelloWorld from '@/components/Helloworld';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/table',
			name: 'Table',
			component: Table
		},
		{
			path: '/helloworld',
			name: 'HelloWorld',
			component: HelloWorld
		}
	]
});
