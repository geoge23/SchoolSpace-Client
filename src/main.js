import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import "firebase/auth";
import VueFormulate from '@braid/vue-formulate'
import VTooltip from 'v-tooltip'
import Notification from 'vue-notification'

var firebaseConfig = {
  apiKey: "AIzaSyADOXEJKE-hLr3D_S1mwjYngdw_0jOeu6k",
  authDomain: "schoolspace-e023a.firebaseapp.com",
  databaseURL: "https://schoolspace-e023a.firebaseio.com",
  projectId: "schoolspace-e023a",
  storageBucket: "schoolspace-e023a.appspot.com",
  messagingSenderId: "846787890058",
  appId: "1:846787890058:web:6636dbb1f0eb870746d673"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

Vue.prototype.$ui = new firebaseui.auth.AuthUI(firebase.auth())
Vue.prototype.$auth = new firebase.auth()
Vue.config.productionTip = false

Vue.use(VueFormulate)
Vue.use(VTooltip)
Vue.use(Notification)

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})