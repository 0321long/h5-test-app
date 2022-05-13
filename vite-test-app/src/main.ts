/*
 * @Descripttion: 描述信息
 * @version: 1.0.0
 * @Author: 
 * @Date: 2022-05-10 09:07:04
 * @LastEditors: long
 * @LastEditTime: 2022-05-12 17:08:33
 */
import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index'
// import './common/vant-module'
import Card from './components/Card/index.vue'
import { store } from "./store/index"
import {
  Button,
  Icon,
  Image as VanImage,
  Popup,
  Toast,
  Calendar,
  Cascader,
  Checkbox,
  DatetimePicker,
  Field,
  Form,
  Picker,
  Radio,
  Swipe,
  SwipeCell,
  Switch,
  Uploader,
  Dialog,
  DropdownItem,
  DropdownMenu,
  Loading,
  Overlay,
  PullRefresh,
  Badge,
  CountDown,
  Divider,
  Empty,
  ImagePreview,
  Lazyload,
  Skeleton,
  Sticky,
  Tag,
  Grid,
  NavBar,
  Tabbar,
  TabbarItem,
  Pagination,
  Tab,
} from 'vant';
const app = createApp(App);
app
.use(router)
.use(store)
.use(Button)
.use(Icon)
.use(VanImage)
.use(Popup)
.use(Toast)
.use(Calendar)
.use(Cascader)
.use(Checkbox)
.use(DatetimePicker)
.use(Field)
.use(Form)
.use(Picker)
.use(Radio)
.use(Swipe)
.use(SwipeCell)
.use(Switch)
.use(Uploader)
.use(Dialog)
.use(DropdownItem)
.use(DropdownMenu)
.use(Loading)
.use(Overlay)
.use(PullRefresh)
.use(Badge)
.use(CountDown)
.use(Divider)
.use(Empty)
.use(ImagePreview)
.use(Lazyload)
.use(Skeleton)
.use(Sticky)
.use(Tag)
.use(Grid)
.use(NavBar)
.use(Tabbar)
.use(TabbarItem)
.use(Pagination)
.use(Tab)
.component('Card', Card)
.mount('#app');
