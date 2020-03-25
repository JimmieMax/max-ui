const fs = require('fs')
const path = require('path')

const getComponents = (lang) => {
    const officalComponents = fs
        .readdirSync(path.resolve(__dirname, `../${lang}/components`))
        .filter(fileName => {
            return fileName !== 'README.md'
        })
        .map(fileName => {
            if (fileName === 'README.md') {
                return ''
            } else {
                return fileName + '/'
            }
        })

    return [
        {
            title: '组件',
            collapsable: false,
            children: officalComponents
        }
    ]
}

module.exports = {
    // 基础路径
    base: '/',
    title: 'Max UI',
    // 别名
    alias: {
      '@': process.cwd(),
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        // 假定 GitHub。也可以是一个完整的 GitLab 网址
        repo: 'JimmieMax/max-ui',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: true,
        // 多语言
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},
                nav: [{
                        text: 'Home',
                        link: '/'
                    },
                    {
                        text: 'Start',
                        link: '/guide/install'
                    }
                ],
                //为以下路由添加侧边栏
                sidebar: [{
                        collapsable: false,
                        children: [
                            '/changelog'
                        ]
                    },
                    {
                        title: 'Guide',
                        collapsable: false,
                        children: [
                            ['/guide/install', 'Install'],
                            ['/guide/start', 'Start'],
                            ['/guide/styleguide', 'Develop Standard'],
                            ['/guide/versionguide', 'Version Standard']
                        ]
                    },
                    {
                        title: 'Components',
                        collapsable: false,
                        children: [
                            '/components/button',
                            '/components/icon',
                            '/components/svg',
                            '/components/text',
                            // '/components/drag-box',
                        ]
                    }
                ]
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},
                // 添加导航栏
                nav: [{
                        text: '主页',
                        link: '/zh/'
                    },
                    {
                        text: '快速开始',
                        link: '/zh/guide/install'
                    }
                ],
                //为以下路由添加侧边栏
                sidebar: [{
                        collapsable: false,
                        children: [
                            ['/changelog', '更新日志']
                        ]
                    },
                    {
                        title: '开发指南',
                        collapsable: false,
                        children: [
                            ['/zh/guide/install', '安装'],
                            ['/zh/guide/start', '快速上手'],
                            ['/zh/guide/styleguide', '组件开发规范'],
                            ['/zh/guide/versionguide', '版本管理规范']
                        ]
                    },
                    {
                        title: '组件',
                        collapsable: false,
                        children: [
                            ['/zh/components/button', 'Button 按钮'],
                            ['/zh/components/icon', 'Icon 图标'],
                            ['/zh/components/svg', 'Svg 彩色图标'],
                            ['/zh/components/text', 'Text 文本'],
                            // ['/zh/components/drag-box', 'Drag Box 拖拽组件'],
                        ]
                    }
                ]
            }
        },
        lastUpdated: 'Last Updated', // string | boolean
    },
    head: [
        ['script', {
            src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
        }],
        ['script', {
            src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
        }],
        ['link', { rel: 'icon', href: './favicon.ico' }]
    ],
    plugins: [
        // 回到顶部
        ['@vuepress/back-to-top', true],
        'vuepress-plugin-demo-block', {
            settings: {
                vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: true, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        },
    ],
    markdown: {
        // 显示行号
        lineNumbers: true,
        extendMarkdown: (md) => {
            md.use(require('markdown-it-vuese'), {
                vueseRe: /<\[vuese-h3\]\((.+)\)/i,
                ruleName: 'vuese-h3',
                useRender: (vueseRender) => {
                    const renderRes = vueseRender.render()
                    const genMd = key => `### ${key}\n${renderRes[key]}\n`
                    return Object.keys(renderRes).map(genMd).join('')
                },
            })
        }
    },
}