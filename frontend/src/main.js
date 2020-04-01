import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM3FfGfSrkJ8BKwSc58jPqve0KllM1RKQ",
  authDomain: "vue-firebase-test-37473.firebaseapp.com",
  databaseURL: "https://vue-firebase-test-37473.firebaseio.com",
  projectId: "vue-firebase-test-37473",
  storageBucket: "vue-firebase-test-37473.appspot.com",
  messagingSenderId: "50961667347",
  appId: "1:50961667347:web:9c58d57b670570d65eb6e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

