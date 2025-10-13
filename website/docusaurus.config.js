// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Labs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://frezes.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-labs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'frezes', // Usually your GitHub org/user name.
  projectName: 'ai-labs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // -------------------------------------------------------------------------
  // 主 preset 配置（默认 docs 模块）
  // -------------------------------------------------------------------------
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // 默认文档目录
          path: 'docs',
          // 文档的 URL 前缀
          routeBasePath: 'docs',
          // 指向侧边栏配置文件（无需 sidebarId）
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/frezes/ai-labs/tree/main/website',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 博客编辑链接
          editUrl: 'https://github.com/frezes/ai-labs/tree/main/website',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // -------------------------------------------------------------------------
  // 新增：第二个文档模块 extensions（独立 sidebar）
  // -------------------------------------------------------------------------
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'extensions', // 唯一 ID，用于区分插件实例
        path: 'extensions', // 对应目录 extensions/
        routeBasePath: 'extensions', // URL 路径前缀
        sidebarPath: require.resolve('./sidebars.js'), // 同一个 sidebars.js 导出多个 sidebar
        editUrl: 'https://github.com/frezes/ai-labs/tree/main/website',
      },
    ],
  ],

  // -------------------------------------------------------------------------
  // 主题配置
  // -------------------------------------------------------------------------
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Labs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ai-labs.png',
        },
        items: [
          // 文档（默认 docs 模块）
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar', // 对应 sidebars.js 中的键名
            position: 'left',
            label: '文档',
            // docsPluginId 可省略，默认指向 preset 的 docs 插件
          },
          // 扩展组件（extensions 模块）
          {
            type: 'docSidebar',
            sidebarId: 'extensionsSidebar', // 对应 sidebars.js 中的键名
            docsPluginId: 'extensions', // 指向 plugins 中注册的 id
            position: 'left',
            label: '扩展组件',
          },
          {to: '/blog', label: '博客', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '扩展组件',
            items: [
              {
                label: 'HolmesGPT',
                to: '/extensions/holmesgpt',
              },
              {
                label: 'Open WebUI',
                to: '/extensions/open-webui',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: '微信公众号',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '更新日志',
                to: '/changelog',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/frezes/ai-labs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Labs.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
