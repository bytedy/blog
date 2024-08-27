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
//    editLink: {
//       pattern:
//         'https://github.com/bytedy/blog/tree/main/docs/:path',
//       text: '去 GitHub 上编辑内容'
//    },
    // 导航
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Programming',
        items: [
          { text: 'OpenJDK', link: '/posts/programming/openjdk/', /*activeMatch: '^/posts/golang/' */},
          { text: 'GO', link: '/posts/programming/golang/', /*activeMatch: '^/posts/golang/' */},
          { text: 'Python', link: '/posts/programming/python/', /*activeMatch: '^/posts/golang/' */},
        ]
      },
      {
        text: 'DevOps',
        items: [
          { text: 'CICD', link: '/posts/opsdev/cicd/' },
          { text: 'Kube', link: '/posts/opsdev/kube/' },
          { text: 'Aws', link: '/posts/opsdev/aws/' },
        ]
      },
      { text: 'Arch', link: '/posts/arch/'},
      { text: 'About', link: '/posts/about/' },
    ],
    //侧标栏
    sidebar: {
      '/posts/programming/golang/': { text: 'Golang', items: [
     
        {
          text: '新特性',
          collapsed: false,
          items: [
            { text: 'Go 1.16 新特性', link: '/posts/programming/golang/release_note/go_1_16.md' },
            { text: 'Go 1.22 新特性', link: '/posts/programming/golang/release_note/go_1_22.md' },
            { text: 'Go 1.23 新特性', link: '/posts/programming/golang/release_note/go_1_23.md' },
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
      '/posts/programming/python/': { text: "Python", items: [
        { text: '配置', link: '/posts/programming/python/config.md' },
        { text: '时区', link: '/posts/programming/python/timezone.md' },

      ]}

    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1724735996844" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16942" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="#515151" p-id="16943"></path></svg>',
        },
        link: 'https://gitee.com/bytedy',
      },
      {
        icon: 'github',
        link: 'https://github.com/bytedy',
      }
    ]
  }
})
