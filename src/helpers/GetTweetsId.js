import firebase from 'firebase';
import 'firebase/firestore';

export default async function GetTweetsId(id) {
    const db = firebase.firestore();
    const array = [];
    await db.collection(`${id}Tweets`).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          array.push(doc.id);
        });
    });
    return {
        TweetsId: array,
    };
}
