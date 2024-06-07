const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const isDev = process.env.NODE_ENV !== "production";
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

let basePath = '';
let assetPrefix = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;

  console.log(`Running in GitHub Actions. Repo: ${repo}, Asset Prefix: ${assetPrefix}, Base Path: ${basePath}`);
} else {
  console.log(`Running locally. Asset Prefix: ${assetPrefix}, Base Path: ${basePath}`);
}

module.exports = withPlugins([
  [withImages, {
    assetPrefix: isDev ? "" : assetPrefix
  }],
  {
    trailingSlash: true,
    basePath: isDev ? "" : basePath,
    assetPrefix: isDev ? "" : assetPrefix,
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      path: '/',
    },
    output: 'export'
  }
]);
