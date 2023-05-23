import { App } from "vue";
import SvgIcon from './SvgIcon/index.vue';

const allGloablComponent: { [key: string]: object } = {
  SvgIcon
}

export default {
  install(app: App) {
    Object.keys(allGloablComponent).forEach(key => {
      console.log(allGloablComponent[key], '@@@', allGloablComponent)
      app.component(key, allGloablComponent[key]);
    })
  }
}