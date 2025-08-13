import routes from './routes';

const menus = [
  {
    parent: 'global',
    name: 'open-webui-shortcut',
    title: 'Open WebUI',
    icon: 'cluster',
    order: 0,
    desc: 'Open WebUI Shortcut',
    skipAuth: true,
  },
];

const extensionConfig = { routes, menus };

globals.context.registerExtension(extensionConfig);

// export default extensionConfig;
