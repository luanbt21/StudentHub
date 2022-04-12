import { createApp } from 'vue'
import { Quasar, Notify, Dialog } from 'quasar'
import { createPinia } from 'pinia'

import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
// import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
// import '@quasar/extras/material-icons-round/material-icons-round.css'
// import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// A few examples for animations from Animate.css:
// import @quasar/extras/animate/fadeIn.css
// import @quasar/extras/animate/fadeOut.css

import './index.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

import { store, key } from './store'

import { __baseURL } from './constant'
import axios from 'axios'
import { auth } from '@/firebase/firebaseConfig'
axios.defaults.baseURL = __baseURL

const unsubscribe = auth.onAuthStateChanged(async user => {
  unsubscribe()
  if (user) {
    const token = await user.getIdToken()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  } else {
    if (window.location.pathname === '/') router.push('/welcome')
  }
})

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Notify,
    Dialog
  }
})

myApp.use(createPinia())

myApp.use(router)

myApp.use(store, key)

myApp.mount('#app')
