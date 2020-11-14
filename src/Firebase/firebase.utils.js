import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyC_-G7m3j__jShlrNxOYvSEkcS1OGdwH9s',
	authDomain: 'neighbourhood-db.firebaseapp.com',
	databaseURL: 'https://neighbourhood-db.firebaseio.com',
	projectId: 'neighbourhood-db',
	storageBucket: 'neighbourhood-db.appspot.com',
	messagingSenderId: '993703264605',
	appId: '1:993703264605:web:efe4db68ccd2d79c5ca8b4',
	measurementId: 'G-Y80PS0483F',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
