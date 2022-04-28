const path = require("path");
const withSass = require("@zeit/next-sass");
const withPlugins = require("next-compose-plugins");

const env = process.env.ENV || "development";
const withImages = require("next-images");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});

module.exports = withImages();
// Soporte para sass
module.exports = withSass({
  cssModules: true,
});

// Seteo general de la configuración
const nextConfig = {
  reactStrictMode: true,
  compress: env !== "development",
  /*  env: envConfig, */
  trailingSlash: true,
  useFileSystemPublicRoutes: true,
  outDir: "build",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost"],
  },
  swcMinify: true,
  /* i18n: {
    locales: ['cl'],
    defaultLocale: 'cl',
  }, */
};

module.exports = withPlugins([], nextConfig);
