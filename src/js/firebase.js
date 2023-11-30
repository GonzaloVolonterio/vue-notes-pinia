import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'VUE_APP_API_KEY',
  authDomain: 'VUE_APP_FIREBASE_AUTH_DOMAIN',
  projectId: 'VUE_APP_FIREBASE_PROJECT_ID',
  storageBucket: 'VUE_APP_FIREBASE_STORAGE_BUCKET',
  messagingSenderId: 'VUE_APP_FIREBASE_MESSAGING_SENDER_ID',
  appId: 'VUE_APP_FIREBASE_APP_ID',
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export { db, auth };
