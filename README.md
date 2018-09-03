# nuber-server
Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

nuber-server
1강.
1. git repository 생성
    git init 
    git remote add origin https://github.com/tonky0110/nuber-server.git
    git pull origin master

2. package.json생성
{
    "name":"nuber-server",
    "version":"1.0.0",
    "description":"Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS",
    "main":"index.js",
    "repository":"https://github.com/tonky0110/nuber-server.git",
    "author":"tonky0110",
    "license":"MIT"
}

3. package설치
yarn add typescript ts-node nodemon --dev
yarn add tslint-config-prettier --dev
yarn add @types/node --dev


3강
yarn add graphql-yoga
yarn add helmet : 보안을 위한 미들웨어. 요청 때마다 미들웨어가 요청을 잠시 멈추고 검사한 후에, 위험지 않다면 요청을 계속 진행.
yarn add morgan cors : 미들웨어
yarn add @types/cors @types/helmet @types/morgan  --dev