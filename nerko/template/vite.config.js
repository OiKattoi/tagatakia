
const { defineConfig } = require('vite');
const fs = require('fs');
const compression = require('compression');

/**
 * 
 * @returns {import('vite').PluginOption}
 */
const uniPlugin = () => ({
  name: 'uni-server-plugin',
  configureServer(server) {
    const app = server.middlewares;
    // add gzip
    app.use(compression());
  }
});

// https://vitejs.dev/config/
exports.default = defineConfig({
  root: './src',
  plugins: [
    uniPlugin(),
  ],
  server: {
    // auto open this page
    open: '/index.html',
  }
});