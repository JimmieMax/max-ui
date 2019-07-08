module.exports = {
    title: 'Max UI',
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
        repo: 'vuejs/vuepress',
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
                        text: 'Components',
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
                        title: '开发指南',
                        collapsable: false,
                        children: [
                            '/guide/install',
                            '/guide/start',
                            '/guide/styleguide',
                            '/guide/versionguide'
                        ]
                    },
                    {
                        title: '组件',
                        collapsable: false,
                        children: [
                            '/components/button',
                            '/components/text'
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
                        text: '组件文档',
                        link: '/zh/guide/install'
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
                        title: '开发指南',
                        collapsable: false,
                        children: [
                            '/zh/guide/install',
                            '/zh/guide/start',
                            '/zh/guide/styleguide',
                            '/zh/guide/versionguide'
                        ]
                    },
                    {
                        title: '组件',
                        collapsable: false,
                        children: [
                            '/zh/components/button',
                            '/zh/components/text'
                        ]
                    }
                ]
            }
        },
    },
    head: [
        ['script', {
            src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
        }],
        ['script', {
            src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
        }],
    ],
    plugins: [
        'vuepress-plugin-demo-block', {
            settings: {
                vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: true, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }
    ],
    markdown: {
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