import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCircleChevronRight,
  faHouse,
  faHillRockslide,
  faTruckRampBox,
  faLocationDot,
  faEnvelope,
  faCircleXmark,
  faFileLines
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([faCheckCircle, faBars, faCircleChevronRight, faHouse, faHillRockslide, faTruckRampBox, faLocationDot, faEnvelope, faCircleXmark, faFileLines]);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
