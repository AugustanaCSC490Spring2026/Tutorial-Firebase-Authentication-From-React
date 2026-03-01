import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyA6p9UmIKqTdy0gvHuOSX8_BVn7_zu8C4k",
  authDomain: "auth-development-2d942.firebaseapp.com",
  databaseURL: "https://auth-development-2d942-default-rtdb.firebaseio.com/",
  projectId: "auth-development-2d942",
  storageBucket: "auth-development-2d942.firebasestorage.app",
  messagingSenderId: "1041770278291",
  appId: "1:1041770278291:web:31ff7f8bd2edad03d34c66"
})

const auth = getAuth(app)

export { auth }
export default app