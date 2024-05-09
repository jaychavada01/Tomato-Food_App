# MERN Stack Project: Tomato - Food App

`Backend is Running on Port: 5000 & Frontend is Running on Port: 3000 & Admin Panel is running on Port: 3001`

### Overview of WebSite:

![Screenshot 2024-05-09 223002](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/e0e7f6f5-60c5-40dd-9792-d2ba691ab5e5)

---

![Screenshot 2024-05-09 222938](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/c4076711-fede-4ac3-8403-be949a222336)

---

![Screenshot 2024-05-09 223043](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/67c962bd-0cf8-4ce1-b1e1-cb20a1405033)

---

![Screenshot 2024-05-09 223130](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/a2b6a8da-1106-424c-84ff-4d4912f19837)

---

![Screenshot 2024-05-09 223159](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/c5596417-5079-4c74-8c58-3cf3050cf858)

---

![Screenshot 2024-05-09 223238](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/da1193f6-f622-415b-a496-bc393f032aeb)

---

![Screenshot 2024-05-09 223308](https://github.com/jaychavada01/Tomato-Food_App/assets/165980640/e572ad19-f79e-4233-8191-b18fc45481ab)


### Some Features:

- 🌟 Tech stack: MERN
- 🎃 Authentication && Authorization with JWT
- 🐞 Error handling both on the server and on the client
- 🔗 Admin Panel For Food delivery updating.

### Technology stack
- bcrypt
- body-parser
- cors
- dotenv
- jsonwebtoken
- multer
- nodemon
- stripe
- validator
- axios
- react-toastify

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
STRIPE_SECRET_KEY=...
```

```js

backend: npm run server
frontend/admin: npm run dev

```
