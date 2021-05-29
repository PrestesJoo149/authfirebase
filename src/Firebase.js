import firebase from "firebase/app"
import "firebase/auth"

let app=  firebase.initializeApp ({
    apiKey: "AIzaSyCH5NK9EO4pYnLoLHW3U9oq6G_qBRM8B4M",
    authDomain: "resolucao-allestec.firebaseapp.com",
    projectId: "resolucao-allestec",
    storageBucket: "resolucao-allestec.appspot.com",
    messagingSenderId: "819459189694",
    appId: "1:819459189694:web:37df9abcb7a0ab29b327ef"
  })
  // Initialize Firebase
  

  export const auth = app.auth()
  export default app