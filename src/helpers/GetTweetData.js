import Formater from '../components/Formater';

import firebase from 'firebase';
import 'firebase/firestore';

import moment from 'moment';

export default async function GetTweetData(userId, docId) {
    const db = firebase.firestore();
    let data;
    let twittDate;
    await db.collection(`${userId}Tweets`).doc(docId).get().then((doc) => {
      data = doc.data();
      twittDate = moment(data.Date.seconds * 1000).format('hh:mm, MMMM DD, YYYY');
    });

    return {
        date: twittDate,
        image: data.Image,
        likes: Formater(data.Likes),
        retweet: Formater(data.Retweet),
        text: data.Text,
    };
}
