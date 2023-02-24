/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['react-d3-speedometer']);
 
module.exports = nextConfig

module.exports = withTM({});