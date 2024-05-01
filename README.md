# MERN Stack Project: Tomato - Food Delivery App

`Visit the Website by following link:` [Tomato]()

### Some Features:

- 🌟 Tech stack: MERN
- 🎃 Authentication && Authorization with JWT
- 🐞 Error handling both on the server and on the client

### Dependencies
- bcrypt
- body-parser
- cors
- dotenv
- jsonwebtoken
- multer
- nodemon
- stripe
- validator

```js
=> To overcome from the CORS security issues... add this code in vite.config.js

server:{
    port: 3000,
    proxy:{
      "/api":{
        target:"http://localhost:5000"
      }
    }
  }

```

### Setup .env file

```js
=> Generate JWT_SECRET : openssl rand -base64 32 : run this command on gitbash terminal

PORT=...
MONGODB_URL=...
JWT_SECRET=...
NODE_ENV=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```

5.28.39