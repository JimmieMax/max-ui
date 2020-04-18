/*
 * @Desc: main index.js
 * @Author: Jimmie
 * @Date: 2019-10-27 14:23:32
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
import Button from './components/Button'
import Text from './components/Text'
import Icon from './components/Icon'
import Svg from './components/Svg'
import DragBox from './components/DragBox'

const components = [
    Button,
    Text,
    Icon,
    Svg,
    DragBox,
]

const install = function (Vue) {
    if (install.installed) return;
    install.installed = true;
    components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install, // 全量引入
    ...components, // 供按需引入使用
};