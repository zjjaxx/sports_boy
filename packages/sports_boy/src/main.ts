import { ZRow } from "@/components/layout/z-row/index";
import { ZCol } from "@/components/layout/z-col/index";
import { ZContainer } from "@/components/layout/z-container/index";
import { ZHeader } from "@/components/layout/z-header";
import { ZAside } from "@/components/layout/z-aside";
import { ZMain } from "@/components/layout/z-main";
import { ZFooter } from "@/components/layout/z-footer";
import { ZIcon } from "@/components/z-icon";
import { ZButton } from "@/components/z-button";
import { ZButtonGroup } from "@/components/z-button-group";
import { App } from "vue";
const elementList = {
  ZRow,
  ZCol,
  ZContainer,
  ZHeader,
  ZAside,
  ZMain,
  ZFooter,
  ZIcon,
  ZButton,
  ZButtonGroup,
};
const SportsBoy = {
  install: (Vue: App) => {
    for (const key in elementList) {
      Vue.component(key, elementList[key]);
    }
  },
};
export default SportsBoy;

export {
  ZRow,
  ZCol,
  ZContainer,
  ZHeader,
  ZAside,
  ZMain,
  ZFooter,
  ZIcon,
  ZButton,
  ZButtonGroup,
};
