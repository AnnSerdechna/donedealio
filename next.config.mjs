/** @type {import('next').NextConfig} */

function defineNextConfig(config) {
  return config
}

export default defineNextConfig({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  sassOptions: {
    implementation: 'sass-embedded',
    export: true
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  }
});
