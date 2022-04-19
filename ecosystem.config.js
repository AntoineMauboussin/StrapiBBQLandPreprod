module.exports = {
  apps: [
    {
      name: 'give-your-app-a-name',
      script: 'npm',
      args: 'start',
      watch: true, // automatically restart the server for file changes
      max_memory_restart: '450M',
      env: {
        NODE_ENV: 'production',
      },
    }
  ],
}
