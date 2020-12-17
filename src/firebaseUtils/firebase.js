import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDUC0weflYKRurmDn5K4J9yQ6mzomxvPdU',
	authDomain: 'clone-4c2ad.firebaseapp.com',
	projectId: 'clone-4c2ad',
	storageBucket: 'clone-4c2ad.appspot.com',
	messagingSenderId: '273327553318',
	appId: '1:273327553318:web:02c15131f547d6bd1b1fe7',
	measurementId: 'G-1HGMZYXM5X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
console.log(process.env)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
