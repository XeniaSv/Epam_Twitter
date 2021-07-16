import CompareObjects from './CompareObjects';

import firebase from 'firebase';
import 'firebase/firestore';

export default async function GetTweetsId(id) {
    const db = firebase.firestore();
    const snapshot = await db
    .collection(`${id}Tweets`)
    .get();

    return {
        TweetsId: snapshot.docs.sort(CompareObjects).reverse().map((doc) => doc.id),
    };
}
