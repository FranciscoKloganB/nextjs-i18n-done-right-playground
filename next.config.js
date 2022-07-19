/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true,
  swcMinify: true,
  //i18next config -- https://nextjs.org/docs/advanced-features/i18n-routing#disabling-automatic-locale-detection
  i18n: {
    localeDetection: false,
    locales: ["ar", "en"],
    defaultLocale: "en"
  }
}

module.exports = nextConfig
