const path = require("path");

module.exports = {
  stories: ['../../../packages/patsu-core/src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", '@storybook/addon-a11y'],
  framework: "@storybook/react",
  features: {
    emotionAlias: false
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ['../../../packages/patsu-core/public'],
  async viteFinal(config, { configType }) {
   /*  config.module.rules = config.module.rules.filter((f) => f.test.toString() !== '/\\.css$/')

    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:5]'
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../src')
    }) */

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@patsu/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/patsu-core/"
            ),
          },
        ],
      },
    };
  },
};
