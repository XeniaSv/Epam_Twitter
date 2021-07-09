import firebase from 'firebase';
import 'firebase/firestore';

export default async function GetCommentsId(userId, tweetId) {
    const db = firebase.firestore();
    const snapshot = await db.collection(`${userId}Tweets`)
    .doc(tweetId)
    .collection('Comments')
    .get();

    return snapshot.docs.map((doc) => doc.id);
}
