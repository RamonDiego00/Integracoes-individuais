const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(withLess(withImages(withSass({
  env: {
    ANY_ENV_KEY: "ANY_ENV_VARIABLE"
  }
}))));
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
module.exports = {
  reactStrictMode: true,
}
