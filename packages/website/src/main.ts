import { createApp } from "vue";
import App from "./App.vue";
// import SportsBoy from 'sports_boy'
// import "sports_boy/theme/index.css"
import {
  ZCol,
  ZRow,
  ZContainer,
  ZAside,
  ZMain,
  ZFooter,
  ZHeader,
  ZIcon,
  ZButton,
  ZButtonGroup,
  ZTable,
  ZTableColumn,
} from "sports_boy";
import router from "@/route/index";

const app = createApp(App);
// app.use(SportsBoy)
app
  .use(ZRow)
  .use(ZCol)
  .use(ZContainer)
  .use(ZAside)
  .use(ZMain)
  .use(ZFooter)
  .use(ZIcon)
  .use(ZButton)
  .use(ZButtonGroup)
  .use(ZTable)
  .use(ZTableColumn)
  .use(ZHeader);

app.use(router);
app.mount("#app");
