import firebase from 'firebase/app';
import'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(
{
    apiKey: "AIzaSyB1Dr0W4O9eaunyJf7pk47DkEKo8L9v674",
    authDomain: "fir-demo-12c95.firebaseapp.com",
    projectId: "fir-demo-12c95",
    storageBucket: "fir-demo-12c95.appspot.com",
    messagingSenderId: "214066238660",
    appId: "1:214066238660:web:87d839a32dbf52e15be591"
  })

  export default firebase;