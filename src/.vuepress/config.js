const { description } = require('../../package')

module.exports = {
  base: '/spring-data-mybatis/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Spring Data MyBatis',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Simplifies the development of creating a MyBatis-based data access layer.",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '手册',
        link: '/reference/',
      },
      {
        text: '配置',
        link: '/config/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/easybest/spring-data-mybatis'
      }
    ],
    sidebar: {
      '/reference/': [
        {
          title: '快速开始',
          collapsable: false,
          children: [
            '',
            'quick-start',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
