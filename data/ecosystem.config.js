const { version } = require('./package.json')

module.exports = {
  apps : [{
    name        : process.env.PM2_APP_NAME || "ultrasons.info",
    script      : "./__sapper__/build/index.js",
    watch       : false,
    version
    /* 
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    } */
  }]
}
