# Quick Start

## 引入 MaxUI

### 全量引入
在 main.js 中写入以下内容：
```vue
import Vue from 'vue';
import MaxUI from '@jimmiemax/max-ui';
import App from './App.vue';

Vue.use(MaxUI)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入
借助 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-imports)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import：
```
npm install babel-plugin-import -D
```
然后，将 .babelrc 修改为：
```
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@jimmiemax/max-ui",
        "libraryDirectory": "src/components"
      }
    ]
  ]
}
```
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
```vue
import Vue from 'vue';
import { Button, Text } from '@seg/seg-business';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### CDN 引入
暂时不支持，可以后期支持，将 `dist` 中上传到CDN上支持
