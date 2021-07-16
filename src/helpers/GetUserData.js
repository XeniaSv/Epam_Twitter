import Formater from '../components/Formater';

import firebase from 'firebase';
import 'firebase/firestore';

import moment from 'moment';

function QuoteCheck(quote) {
    if (quote.length === 0) {
      document.querySelector('blockquote').style.display = 'none';
      return null;
    }
    return quote;
}

export default async function GetUserData(id) {
    const db = firebase.firestore();
    const doc = await db
    .collection('users')
    .doc(id)
    .get();

    const data = doc.data();
    const date = moment(data.Joined.seconds * 1000).format('MMMM YYYY');

    return {
        Name: data.Name,
        ID: id,
        Joined: date,
        Following: Formater(data.Following),
        Followers: Formater(data.Followers),
        Quote: QuoteCheck(data.Quote),
        Image: data.Image,
    };
}
