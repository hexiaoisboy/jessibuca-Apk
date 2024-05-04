import Vue from 'vue';  
import Router from 'vue-router';  
import index from '../views/index.vue'; 

Vue.use(Router);
const createRouter = () => {
	return new Router({
		mode: 'hash',
		routes: [
			{
				path: '/',
				name: 'index',
				component: index
			}, 
		]
	});
};

const router = createRouter();
router.beforeEach((to, from, next) => {
	  next(); 
});

export default router;
