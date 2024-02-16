import { createApp } from "vue";
import App from "./App.vue";
import * as bootstrap from "bootstrap";

/* import the fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
// import { all } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faStarSolid, faStarRegular);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
