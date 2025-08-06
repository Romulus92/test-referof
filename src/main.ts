import { createApp } from 'vue'
import '@vuepic/vue-datepicker/dist/main.css';
import './assets/css/style.css';
import App from './App.vue'

import VueDatePicker from '@vuepic/vue-datepicker';

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

app.mount('#app');
