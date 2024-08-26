import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
const base = process.env.GITHUB_ACTIONS === 'true'
   ? '/blog/'
   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: 'zh-cn',
  title: 'ByteDy',
  description: '分享技术知识、阅读思考、生活心得等内容',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/IMG_2146.JPG',
    lastUpdated: {
      text: '最近更新于',
    },
    editLink: {
       pattern:
         'https://github.com/bytedy/blog/tree/main/docs/:path',
       text: '去 GitHub 上编辑内容'
    },
    // 导航
    nav: [
      { text: '首页', link: '/' },
      { text: 'Sop', link: '/posts/sop/'},
      { text: 'Golang', link: '/posts/golang/', /*activeMatch: '^/posts/golang/' */},
//      { text: 'About', link: 'https://bytedy.github.io/posts/about/' }
      { text: '关于我', link: '/posts/about/' },
//      {
//        text: '备战春秋',
//        items: [
//          { text: '心得总结', link: '/offer/experience/' },
//          { text: '校招考点汇总', link: '/offer/campus/' },
//          { text: '面经汇总', link: '/offer/sum-interview/' },
//          { text: '复习自查', link: '/offer/review/' }
//        ]
//      },

    ],
    //侧标栏
    sidebar: {
      '/posts/golang/': { text: 'Golang', items: [
     
        {
          text: '新特性',
          collapsed: false,
          items: [
            { text: 'Go 1.16 新特性', link: '/posts/golang/release_note/go_1_16.md' },
            { text: 'Go 1.22 新特性', link: '/posts/golang/release_note/go_1_22.md' },
            { text: 'Go 1.23 新特性', link: '/posts/golang/release_note/go_1_23.md' },
          ],
        },
        {
          text: '知识点',
          collapsed: false,
          items: [
            // { text: 'JavaScript 优化技巧', link: '/posts/growth-record/base/javascript/javascript-optimization-tips' },
            {
              items: [{text: "Index", link: "/posts/golang/index.md"}]
            },
          ],
        }
        
      ]},
      '/posts/sop/': { text: "Sop", items: [
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: 'More', link: '/posts/sop/more.md' }, 
          ],
        },
      ]}

    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bytedy/bytedy.github.io',
      }
    ]
  }
})
