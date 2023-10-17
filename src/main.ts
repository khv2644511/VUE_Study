/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./router";
import pinia from "./store";

const app = createApp(App).use(router).use(pinia);

registerPlugins(app);

app.mount("#app");
