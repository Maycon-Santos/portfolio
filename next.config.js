/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  reactStrictMode: true,
})
