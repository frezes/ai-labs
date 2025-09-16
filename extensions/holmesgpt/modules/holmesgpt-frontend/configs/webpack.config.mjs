import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../extensions/holmesgpt-frontend/src/components'),
      '@utils': path.resolve(__dirname, '../extensions/holmesgpt-frontend/src/utils'),
    },
    extensions: ['.js', '.jsx', '.css', '.ts', '.tsx', '.json', '.mdx'],
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: 'append',
                    properties: { className: ['__heading-anchor'] },
                    content: {
                      type: 'text',
                      value: '🔗',
                    },
                  },
                ],
                rehypePrism,
              ],
              // 注册全局组件
              providerImportSource: '@mdx-js/react',
            },
          },
          // 添加自定义 loader 处理 DemoBlock 组件（最先执行）
          path.resolve(__dirname, '../configs/demo-block-loader.js'),
        ],
      },
    ],
  },
};
