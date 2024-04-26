# MERN Stack Project: Food App

`Visit the Website by following link:` [ChatApp](https://chatapp-web-version.onrender.com)

## ![Login](image.png)

## ![Signup](image-2.png)

## ![Logged In](image-3.png)

## ![Chat Section](image-4.png)

### Some Features:

- 🌟 Tech stack: MERN
- 🎃 Authentication && Authorization with JWT
- 🐞 Error handling both on the server and on the client

### Dependencies


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
