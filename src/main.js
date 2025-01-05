import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);

// Use the Vuex store
app.use(store);

// Mount the Vue app
app.mount("#app");

