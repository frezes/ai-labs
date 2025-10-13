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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/frezes/ai-labs/tree/main/website',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/frezes/ai-labs/tree/main/website',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

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
      image: 'img/ai-labs.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AI Labs',
        logo: {
          alt: 'AI Labs',
          src: 'img/ai-labs.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'extensionsSidebar', // 对应 sidebars.js 中的键名
            docsPluginId: 'extensions', // 指向 plugins 中注册的 id
            position: 'left',
            label: '扩展组件',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/frezes/ai-labs',
            label: 'GitHub',
            position: 'right',
          },
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
                to: '/extensions/holmesgpt/intro',
              },
              {
                label: 'Open WebUI',
                to: '/extensions/open-webui/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Github Discussions',
                href: 'https://github.com/frezes/ai-labs/discussions',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '微信公众号',
                to: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=替换biz的值&scene=124#wechat_redirect',
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
