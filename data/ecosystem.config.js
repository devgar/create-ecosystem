const { version, scripts = {} } = require('./package.json')

module.exports = {
  apps : [{
    name        : process.env.PM2_APP_NAME || "ultrasons.info",
    script      : scripts.start || 'npm',
    args        : scripts.start ? '' : 'start', 
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
