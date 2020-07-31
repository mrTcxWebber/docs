const moment = require('moment')
moment.locale('zh-CN')

module.exports = {
    base: '/docs/',
    repo: 'https://github.com/su37josephxia/frontend-basic',
    title: 'va管理后台文档',
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => moment(timestamp).fromNow()
        },
        // "vuepress-plugin-auto-sidebar": {
        //     titleMode: "uppercase",
        //     titleMap: {
        //         javascript: "JS 基础2",
        //     },
        //     collapseList: [
        //         "/frontend/javascript/"
        //     ]
        // }
        // '@vuepress/back-to-top': true
    },
    themeConfig: {
        displayAllHeaders: true,
        logo: '/assets/img/0qejd7.jpg',
        lastUpdated: '更新时间',
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            // { text: '前端', link: '/frontend/javascript/' },
            { text: 'api', link: '/api/' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'instruction',
                'base/vue',
                'base/element',
                'base/vuex',
                'base/vue-element-admin',
                // {
                //     title: 'Vue进阶',
                //     path: '/guide/base/vue',
                //     collapsable: false,
                //     sidebarDepth: 2,
                //     children: [
                //         '/guide/base/vue',
                //         '/guide/base/element'
                //     ]
                // }
            ],

            // fallback
            '/': [
                '',
            ]
        }
    },
    markdown: {
        lineNumbers: true
    }
}