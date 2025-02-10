import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";
import router from "./router";

import "@/assets/styles/main.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
