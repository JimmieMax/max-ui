# max-ui

### Max UI install

```shell
yarn add @jimmiemax/max-ui -S
```

### Import into your project

```js
import Vue from 'vue';
import MaxUI from '@jimmiemax/max-ui';

Vue.use({
    install(Vue) {
        Vue.component('MText', MaxUI.MText)
        Vue.component('MButton', MaxUI.MButton)
    }
})
```
