const webpack = require('webpack')

/* Enables accesability of .env variables */
const { parsed: myEnv } = require('dotenv').config({
  path:'/Users/alvarocastrocid/Desktop/git_playground/nextjs-practice/next-pract/.env'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
    return config
  }
}
