import Button from './components/Button'
import Text from './components/Text'

const components = [
    Button,
    Text,
]

const install = function (Vue) {
    if (install.installed) return;
    install.installed = true;
    components.forEach(component => Vue.component(component.name, component));
};

export default {
    install, // 全量引入
    ...components, // 供按需引入使用
};