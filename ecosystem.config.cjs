module.exports = {
    apps: [
       {
          /* 개발 환경용 서버 */
          name: 'mafia-game-dev',
          script: './server.js',
          instances: 1, // 단일 쓰레드
          autorestart: false,
          watch: false,
          env: {
             Server_PORT: 3000,
             NODE_ENV: 'dev',
          },
       },
       {
          /* 배포 환경용 서버 */
          name: 'mafia-game-prod',
          script: './server.js',
          instances: 1, // 클러스터 모드
          autorestart: false,
          watch: false,
          env: {
             Server_PORT: 3000,
             NODE_ENV: 'prod',
          },
       },
    ],
 };