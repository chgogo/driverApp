'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://192.168.1.127:8085/logistics/"', // 本地的端口号
  // API_ROOT: '"http://192.168.1.40:8010/logistics/"', // 线上端口号
  API_ROOT_loction: '"http://192.168.1.127:8085/position/"', // 实时获取经纬度
  // API_ROOT_loction: '"http://192.168.1.40:8010/position/"',
})
