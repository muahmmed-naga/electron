import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBzVFG81UfLkZcyZFM_NuFcBmABNMNP7TQ',
  authDomain: 'electron-57204.firebaseapp.com',
  databaseURL: 'https://electron-57204-default-rtdb.firebaseio.com',
  projectId: 'electron-57204',
  storageBucket: 'electron-57204.appspot.com',
  messagingSenderId: '287300577068',
  appId: '1:287300577068:web:a16b82c115d2eaf85f6e89',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase
