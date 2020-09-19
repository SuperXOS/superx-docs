const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'SuperX Documentation',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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
        text: 'Documentation',
        link: '/superx/overview.md',
      },
      {
        text: 'Forums',
        link: '#'
      },
      { 
        text: 'Discord',
        link: '#'
      },
      {
        text: 'Telegram',
        link: '#'
      },
      {
        text: 'IRC',
        link: '#'
      },
      {
        text: 'Download SuperX',
        link: '#'
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',
          collapsable: true,
          children: [
           '/superx/overview.md',
           '/superx/community.md',
           '/superx/download.md',
           '/superx/installation.md',
          ]
        },
        {
          title: 'Software',
          collapsable: true,
          children: [
            ['/lorem/page.md','link1'],
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
    ['@vuepress/google-analytics', {
        ga: 'UA-123456789-0'
    },],
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-container', {
        type: 'warning',
    }],
    ['vuepress-plugin-container', {
         type: 'tip',
    }],
    ['vuepress-plugin-container', {
        type: 'danger',
    }],

  ]
}
