import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB3Jk4b_SiLZL2mDDB9rjmX2lwDBiGyJ9w',
    authDomain: 'homework-base-iu.firebaseapp.com',
    projectId: 'homework-base-iu',
    storageBucket: 'homework-base-iu.appspot.com',
    messagingSenderId: '558816548711',
    appId: '1:558816548711:web:6eca7a783d82e3cbd741c2',
    measurementId: 'G-HVHYRSBL27',
};

const App = initializeApp(firebaseConfig);

const Firestore = getFirestore(App);

export { App, Firestore };
