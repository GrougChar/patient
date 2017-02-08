// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRoute from 'vue-router';
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage';
import VueValidator from 'vue-validator';

import Login from './components/login/login';
import MainPage from './components/mainPage/page';

Vue.use(VueRoute);
Vue.use(VueResource);
Vue.use(VueLocalStorage);
Vue.use(VueValidator);

let APP = Vue.extend(App);

// define router
// Login => login template
// MainPage => main template
const routes = [{
    name: 'first',
    path: '/Login',
    component: Login
  },
  {
    name: 'second',
    path: '/MainPage',
    component: MainPage
  }
];

const router = new VueRoute({
  routes
});

// Hook Refresh
router.beforeEach((to, from, next) => {
  if (to.name === 'second' && from.name === null) {
    window.console.log('Current page');
    next();
  }
  if (to.name === null && from.name === null) {
    window.console.log('Login page');
    router.push('/Login');
    next();
  } else {
    next();
  }
});
new Vue({
  // el: '#app',
  router,
  render: h => h(APP)
}).$mount('#app');

// Linten to the request and response with interceptors.
// response.ok = false => errorPage
Vue.http.interceptors.push((request, next) => {
  window.console.log('interceptors');
  window.console.log('******', request);
  request.method = 'POST';
  next((response) => {
    window.console.log(response);
    if (response.ok && response.status === 200) {
      let token = response.data.token_type + ' ' + response.data.access_token;
      let localStorage = window.localStorage;
      localStorage.setItem('localStorageToken', token);
      Vue.http.headers.common['Authorization'] = localStorage.getItem('localStorageToken');
      Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
      window.console.log('###', Vue.http.headers);
      window.console.log('localToken: ', localStorage.getItem('localStorageToken'));
    } else {
      window.alert('errorPage');
    }
  });
});
