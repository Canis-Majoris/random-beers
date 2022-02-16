const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  webpack: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Queries': path.resolve(__dirname, 'src/queries'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Api': path.resolve(__dirname, 'src/api'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Mocks': path.resolve(__dirname, 'src/mocks'),
      '@Config': path.resolve(__dirname, 'src/config'),
    },
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: 'src/styles/utils/index.scss',
      },
    },
  ],
};
