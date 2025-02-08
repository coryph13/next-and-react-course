module.exports = {
  apps: [
    {
      name: "next-18",
      script: "node_modules/next/dist/bin/next",
      args: "-p 4000",
      exec_mode: "cluster",
      instances: "max",
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
