# MERN Stack Project: A Real Time Chat App (Web Version)

`Visit the Website by following link:` [ChatApp](https://chatapp-web-version.onrender.com)

`This is a desktop web-version app so do not try to open it on mobiles.`


## ![Login](image.png)

## ![Signup](image-2.png)

## ![Logged In](image-3.png)

## ![Chat Section](image-4.png)

### Some Features:

- 🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
- 🎃 Authentication && Authorization with JWT
- 👾 Real-time messaging with Socket.io
- 🚀 Online user status (Socket.io and React Context)
- 👌 Global state management with Zustand
- 🐞 Error handling both on the server and on the client
- ⏳ And much more!
- 🔗 [Avatar_Placeholder](https://avatar-placeholder.iran.liara.run/)

### Dependencies

- bcrypt.js
- cookie-parser
- dotenv
- express
- jsonwebtoken
- mongoose
- socket.io
- nodemon
- react-hot-toast
- react-icons
- react-router-dom
- zustand
- socket.io-client

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
