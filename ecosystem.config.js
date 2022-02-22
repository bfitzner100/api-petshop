module.exports = {
    apps : [{
        name   : "apipetshop",
        script : "./index.js",
        instances : 2,
        exec_mode : "cluster",
        watch: true,
        env_production: {
            NODE_ENV: "production"
        },
        env_development: {
            NODE_ENV: "development"
        }
    }]
  }