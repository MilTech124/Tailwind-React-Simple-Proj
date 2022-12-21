/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "mn-fliz.mil-tech.pl",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
