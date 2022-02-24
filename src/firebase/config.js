import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBwi5GPhCPHH25ZahExKcazQ6UbMTvkPjo',
  authDomain: 'vuex4-auth-d06fe.firebaseapp.com',
  projectId: 'vuex4-auth-d06fe',
  storageBucket: 'vuex4-auth-d06fe.appspot.com',
  messagingSenderId: '7287318357',
  appId: '1:7287318357:web:71f7d396e42627af0271dc',
}

// init firebase

initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }
