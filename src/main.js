import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import {Icon} from '@iconify/vue'

// slider
import VueSplide from '@splidejs/vue-splide';

// sweet aler
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
app.use(VueSweetalert2);
app.component('Icon',Icon)
app.use( VueSplide )
app.use(router)
app.mount("#app")

