import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'

// @ts-ignore
export default defineConfig({
  base: '/docs-cn/',
  title: 'Laravel-Admin文档',
  description: '一个可以快速构建后台管理的工具',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: '/' },
  },

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      pattern: 'https://github.com/elegant-admin/docs-cn/edit/main/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z-song/laravel-admin' },
    ],

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      },
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存到搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索供应商'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为这个查询应该有结果？',
            reportMissingResultsLinkText: '向我们反馈'
          }
        }
      },
    },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev',
    // },

    footer: {
      copyright:
        '本文档内容版权为 laravel-admin 所有，保留所有权利'
    },

    nav: [
      { text: '文档', link: '/guide/', activeMatch: '/guide/' },
      { text: '插件', link: 'https://github.com/laravel-admin-extensions' },
      { text: '团队', link: '/team/', activeMatch: '/team/' },
      { text: '开发日志', link: 'https://github.com/z-song/laravel-admin/releases' },
      {
        text: 'Version',
        items: [
          {
            text: 'v1 文档',
            link: '/'
          },
          {
            text: 'v2 文档',
            link: '/'
          },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '概述',
              link: '/guide/'
            },
          ]
        },
        {
          text: '入门',
          collapsed: true,
          items: [
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '快速开始',
              link: '/guide/quick-start',
            },
            {
              text: '配置文件',
              link: '/guide/configuration',
            },
            {
              text: '版本升级',
              link: '/guide/upgrading'
            },
            {
              text: '页面内容和布局',
              link: '/guide/content-layout'
            },
            {
              text: '统一回复',
              link: '/guide/questions'
            }
          ]
        },
        {
          text: '模型表格',
          collapsed: true,
          items: [
            {
              text: '基本使用',
              link: '/guide/model-grid'
            },
            {
              text: '列的使用',
              link: '/guide/model-grid-column'
            },
            {
              text: '列的显示',
              link: '/guide/model-grid-column-display'
            },
            {
              text: '查询过滤',
              link: '/guide/model-grid-filters'
            },
            {
              text: '列过滤器',
              link: '/guide/model-grid-column-filter'
            },
            {
              text: '行内编辑',
              link: '/guide/model-grid-inline-edit'
            },
            {
              text: '数据操作',
              link: '/guide/model-grid-actions'
            },
            {
              text: '自定义行&批量操作',
              link: '/guide/model-grid-custom-actions'
            },
            {
              text: '数据导出',
              link: '/guide/model-grid-export'
            },
            {
              text: '头部和脚部',
              link: '/guide/model-grid-header-footer'
            },
            {
              text: '表格初始化',
              link: '/guide/model-grid-init'
            },
            {
              text: '表格统计行',
              link: '/guide/model-grid-total-row'
            },
            {
              text: '快捷搜索',
              link: '/guide/model-grid-quick-search'
            },
            {
              text: '规格选择器',
              link: '/guide/model-grid-spec-selector'
            },
            {
              text: '快捷创建',
              link: '/guide/model-grid-quick-create'
            },
            {
              text: '自定义工具',
              link: '/guide/model-grid-custom-tools'
            },
            {
              text: '外部数据源',
              link: '/guide/model-grid-data'
            },
            {
              text: '快捷键',
              link: '/guide/model-grid-hotkeys'
            },
            {
              text: '软删除',
              link: '/guide/model-grid-soft-deletes'
            }
          ]
        },
        {
          text: '模型表单',
          collapsed: true,
          items: [
            {
              text: '基本使用',
              link: '/guide/model-form'
            },
            {
              text: '基础组件',
              link: '/guide/model-form-fields',
            },
            {
              text: '图片文件上传',
              link: '/guide/model-form-upload',
            },
            {
              text: 'JSON组件',
              link: '/guide/model-form-json-fields'
            },
            {
              text: '关系处理',
              link: '/guide/model-form-relationships'
            },
            {
              text: '表单联动',
              link: '/guide/model-form-linkage'
            },
            {
              text: '组件管理',
              link: '/guide/model-form-field-management'
            },
            {
              text: '表单验证',
              link: '/guide/model-form-validation'
            },
            {
              text: '表单回调',
              link: '/guide/model-form-callback'
            },
            {
              text: '表单初始化',
              link: '/guide/model-form-init'
            },
            {
              text: '表单布局',
              link: '/guide/model-form-layout'
            }
          ]
        },
        {
          text: '模型详情',
          collapsed: true,
          items: [
            {
              text: '基本使用',
              link: '/guide/model-show'
            },
            {
              text: '字段显示',
              link: '/guide/model-show-fields',
            },
            {
              text: '关联关系',
              link: '/guide/model-show-relationship',
            },
            {
              text: '显示扩展',
              link: '/guide/model-show-extension'
            }
          ]
        },
        {
          text: '数据模型数',
          link: '/guide/model-tree'
        },
        {
          text: '数据表单',
          link: '/guide/data-form'
        },
        {
          text: '语言本地化',
          link: '/guide/localization'
        },
        {
          text: 'CSS/JavaScript',
          link: '/guide/frontend'
        },
        {
          text: '扩展开发',
          link: '/guide/extension-development'
        },
        {
          text: '控制台命令',
          link: '/guide/commands'
        },
        {
          text: '页面消息',
          link: '/guide/content-message'
        },
        {
          text: '前端组件',
          link: '/guide/widgets'
        },
        {
          text: '用户，角色，权限',
          link: '/guide/permission'
        },
        {
          text: '自定义登录认证',
          link: '/guide/custom-authentication'
        },
        {
          text: '自定义头部导航',
          link: '/guide/custom-navbar'
        },
        {
          text: '常见问题',
          link: '/guide/qa'
        }
      ],
    }
  },

  markdown: {
    anchor: {
      permalink: renderPermaLink
    },
    config: (md) => {
      md.use(MarkDownItCustomAnchor)
    }
  }
})
