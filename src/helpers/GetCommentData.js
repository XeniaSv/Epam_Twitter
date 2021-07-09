import firebase from 'firebase';
import 'firebase/firestore';

import moment from 'moment';

export default async function GetCommentData(userId, tweetId, commentId) {
    const db = firebase.firestore();

    const doc = await db.collection(`${userId}Tweets`)
    .doc(tweetId)
    .collection('Comments')
    .doc(commentId)
    .get();

    const data = doc.data();
    const commentDate = moment(data.Date.seconds * 1000).format('MMMM DD, YYYY');

    return {
        date: commentDate,
        image: data.Image,
        text: data.Text,
        name: data.Name,
    };
}
