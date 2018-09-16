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



.....



1.10
yarn add typeorm
yarn add pg
/src/entities 생성.
ormConfig.ts 세팅
index.ts에서 connection연결.

yarn add dotenv



1.11 
yarn add dotenv
동영상강의 ./src/.env
windows: ./.env



1.13
yarn add class-validator


## Resolvers

### Public Resolvers:
- [x] Sign in / Sign Up with Facebook
- [x] Sign in with Email
- [x] Start Phone Number Verification
    -- twilio
- [x] Complete Phone Number Verification
- [ ] Sign Up with Email

---

### Authentication:
- [ ] Generate JWT
        yarn add @types/jsonwebtoken --dev
        Strong password generator 에서 51자리 생성 후 .env에서 추가.
- [ ] Verify JWT



### Private Resolvers:

- [ ] Verify Email
- [ ] Get My Profile
- [ ] Update My Profile
- [ ] Toggle Driving Mode
- [ ] Report location / Orientation 
- [ ] Add Place
- [ ] Edit Place
- [ ] Delete Place
- [ ] See Nearby Drivers
- [ ] Subscribe to Nearby Drivers
- [ ] Request a Ride
- [ ] Get Nearby Rides Requests
- [ ] Subscribe to Nearby Ride Requests
- [ ] Subscribe to Ride Status
- [ ] Get Chat Room Message
- [ ] Subscribe to Chat Room Messages
- [ ] Send a Chat Message


## Code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail
- [ ] 
- [ ] 
- [ ] 
- [ ] 
- [ ] 