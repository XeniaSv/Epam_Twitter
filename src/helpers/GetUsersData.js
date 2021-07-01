import firebase from 'firebase';
import 'firebase/firestore';

export default function GetUsersData() {
  const arrayUsers = [];
  const db = firebase.firestore();
  db.collection('users')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        arrayUsers.push({ id: doc.id });
      });
    });
  return arrayUsers;
}
