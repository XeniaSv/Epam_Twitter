import firebase from 'firebase';
import 'firebase/firestore';

export default async function GetCommentsId(userId, tweetId) {
    const db = firebase.firestore();
    const array = [];
    await db.collection(`${userId}Tweets`)
    .doc(tweetId)
    .collection('Comments')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push(doc.id);
        });
    });

    return array;
}
