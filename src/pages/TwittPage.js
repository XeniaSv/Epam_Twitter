import './TwittPage.css';

import Formater from '../components/Formater';

import NavBar from '../containers/NavBar';
import Tweet from '../containers/Tweet';
import CalImg from '../resource/calendar.svg';

import Avatar from '@material-ui/core/Avatar';

import firebase from 'firebase';
import 'firebase/firestore';

import moment from 'moment';

import React from 'react';

class TwittPage extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: 'Loading...',
      ID: 'Loading...',
      Joined: 'Loading...',
      Following: 'Loading...',
      Followers: 'Loading...',
      Quote: 'Loading...',
      Image: '',
      TweetsId: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('searchValue');
    db.collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        const data = doc.data();
        const date = moment(data.Joined.seconds * 1000).format('MMMM YYYY');

        this.setState({
          Name: data.Name,
          ID: doc.id,
          Joined: date,
          Following: Formater(data.Following),
          Followers: Formater(data.Followers),
          Quote: this.QuoteCheck(data.Quote),
          Image: data.Image,
        });
    });
    db.collection(`${id}Tweets`).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { TweetsId } = this.state;
        const array = TweetsId.slice();
        array.push(doc.id);
        this.setState({ TweetsId: array });
      });
    });
  }

  QuoteCheck = (quote) => {
    if (quote.length === 0) {
      document.querySelector('blockquote').style.display = 'none';
      return null;
    }
    return quote;
  };

  render() {
    const {
      Name,
      ID,
      Joined,
      Following,
      Followers,
      Quote,
      Image,
      TweetsId,
    } = this.state;
    return (
      <>
        <NavBar />
        <main className="twittPage-main">
          <Avatar alt="Remy Sharp" src={Image} id="avatar" />
          <h1>{Name}</h1>
          <h3>{ID}</h3>
          <blockquote>{Quote}</blockquote>
          <div className="account-info">
            <div className="container">
              <img id="cal-img" alt="User" src={CalImg} />
              <p>
                &nbsp; Joined
                {Joined}
              </p>
            </div>
            <div className="container">
              <b>{Following}</b>
              <p>&nbsp; Following</p>
            </div>
            <div className="container">
              <b>{Followers}</b>
              <p>&nbsp; Followers</p>
            </div>
          </div>
          <hr />

          {TweetsId.map((id) => (
            <Tweet name={Name} userId={ID} avatar={Image} docId={id} />
          ))}
        </main>
      </>
    );
  }
}

export default TwittPage;
