import routes from './routes';
import locales from './locales';

const menu = {
  parent: 'global',
  name: 'holmesgpt',
  title: 'HolmesGPT',
  icon: 'ai',
  order: 0,
  desc: 'AI Agent for Troubleshooting Cloud-Native Environments.',
  skipAuth: true,
};

const extensionConfig = {
  routes,
  menus: [menu],
  locales,
};

globals.context.registerExtension(extensionConfig);
