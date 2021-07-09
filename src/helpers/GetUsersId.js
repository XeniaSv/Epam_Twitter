import firebase from 'firebase';
import 'firebase/firestore';

export default async function GetUsersData() {
  const db = firebase.firestore();
  const snapshot = await db.collection('users')
  .get();

  return snapshot.docs.map((doc) => ({ id: doc.id }));
}
