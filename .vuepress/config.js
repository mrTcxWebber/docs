const moment = require('moment')
moment.locale('zh-CN')

module.exports = {
    base: '/docs/',
    repo: 'https://github.com/su37josephxia/frontend-basic',
    title: 'va管理后台文档',
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return moment(timestamp).fromNow()
                }
            }
        ]
    ],
    themeConfig: {
        logo: '/assets/img/0qejd7.jpg',
        lastUpdated: '更新时间',
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide.html' },
            { text: 'api', link: '/api.html' },
            // {
            //     text: 'github',
            //     items: [
            //         { text: '下拉', link: '/' },
            //         { text: '下拉2', link: '/' },
            //     ]
            // }
        ],
        // sidebar: {
        //     '/指南/': [
        //         'one',
        //         'two'
        //     ],
        //     '/api/': [
        //         'three',
        //         'four'
        //     ]
        // }
    }
}