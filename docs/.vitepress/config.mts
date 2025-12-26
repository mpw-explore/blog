import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MPW的技术分享阵地",
  description: "技术分享",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章列表', link: '/articles' }
    ],

    sidebar: [
      {
        text: '技术分享',
        items: [
          { text: '项目信息', link: '/articles' },
          { text: '周报生成器', link: '/weekly_report' },
          {
            text: '小技巧',
            items: [
              { text: 'git使用指南', link: '/git_usage' },
              { text: 'xxx未完成', link: '/404' }
            ]
          }
        ]
      },
      // {
      //   text: '生活分享',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mpw-explore' }
    ]
  }
})
