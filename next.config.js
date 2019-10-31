const fs = require('fs');
const { resolve, join } = require('path');
const { promisify } = require('util');

const webpack = require('webpack');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const { WebpackBundleSizeAnalyzerPlugin } = require('webpack-bundle-size-analyzer');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images');


const copyFile = promisify(fs.copyFile);
const lessToJS = require('less-vars-to-js');


const themeVariables = lessToJS(fs.readFileSync(resolve(__dirname, './src/assets/theme-variables.less'), 'utf8'));
const HOMEPAGE_URL = require('./package.json').homepage;


const { ANALYZE, NODE_ENV } = process.env;
const isProd = NODE_ENV === 'production';
const assetPrefix = isProd ? `${HOMEPAGE_URL}` : '';
const backendUrl = isProd ? `${HOMEPAGE_URL}` : '';

module.exports = withPlugins([
  [withImages,
    {
      assetPrefix: assetPrefix,
    },
  ],
  [withOptimizedImages, {
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'static/images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withLess, {
    lessLoaderOptions: {
      javascriptEnabled: true,
      importLoaders: 3,
      modifyVars: themeVariables,
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[folder]__[local]--[hash:base64:5]',
    },
  }],
  [withCSS, {
    cssModules: false,
  }],
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },
    },
  ],
],
{
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      },
    );

    if (ANALYZE) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'));
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.HOMEPAGE_URL': JSON.stringify(process.env.npm_package_homepage),
        // 'process.env.HOMEPAGE_URL': HOMEPAGE_URL,
      }),
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.BACKEND_URL': JSON.stringify(backendUrl),
      }),
    );

    return config;
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap;
    }

    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, '/static/.nojekyll'), join(outDir, '/.nojekyll'));
    return defaultPathMap;
  },
  assetPrefix: assetPrefix,
});
