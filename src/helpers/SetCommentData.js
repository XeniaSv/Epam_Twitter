import firebase from 'firebase';
import 'firebase/firestore';

function convertBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}

export default async function SetCommentData(userId, tweetId, name, image, text) {
    const db = firebase.firestore();
    const newCommentRef = await db.collection(`${userId}Tweets`)
    .doc(tweetId)
    .collection('Comments')
    .doc();

    const date = firebase.firestore.Timestamp.fromMillis(Date.now());
    const base64 = await convertBase64(image);

    newCommentRef.set({
        Name: name,
        Image: base64,
        Date: date,
        Text: text,
    });

    return newCommentRef.id;
}
