import Button from './components/Button'
import Text from './components/Text'
import Icon from './components/Icon'
import Svg from './components/Svg'

const components = [
    Button,
    Text,
    Icon,
    Svg,
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