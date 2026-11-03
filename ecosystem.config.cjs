module.exports = {
  apps: [
    {
      name: "supertech-website",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      interpreter: "node",
      args: "start -H 127.0.0.1",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_TELEMETRY_DISABLED: "1",
      },
    },
  ],
};
