const baseConfig = require('../webpack.base');
const merge = require('webpack-merge');

const config = {
  entry: './app.ts',
  output: {
    filename: 'dist/app.js',
  }
}

const merged = merge(baseConfig, config);

module.exports = merged;
