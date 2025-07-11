import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawsome/fontawsome-free/js/all'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './assets/css/main.css';


library.add(faXmark)
app.component('font-awesome-icon', FontAwesomeIcon)



createApp(App).use(router).mount('#app')



