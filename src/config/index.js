import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyChANB4C_S3R9mzNmHKKVgxpOvu5JVt45A",
    authDomain: "covid-codi-stats.firebaseapp.com",
    databaseURL: "https://covid-codi-stats.firebaseio.com",
    projectId: "covid-codi-stats",
    storageBucket: "covid-codi-stats.appspot.com",
    messagingSenderId: "736975339730",
    appId: "1:736975339730:web:a4ea2f7bd664654a882d0b"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore();

  export { db }
  export default db