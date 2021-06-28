import './TwittPage.css';

import NavBar from '../containers/NavBar';
import Twitt from '../containers/Twitt';
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
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    const id = localStorage.getItem('searchValue');
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
          Following: this.FollowersAndFollowingFormat(data.Following),
          Followers: this.FollowersAndFollowingFormat(data.Followers),
          Quote: this.QuoteCheck(data.Quote),
          Image: data.Image,
        });
      });
  }

  FollowersAndFollowingFormat = (labelValue) =>
    // Nine Zeroes for Billions
     (Math.abs(Number(labelValue)) >= 1.0e9
      ? `${Math.abs(Number(labelValue)) / 1.0e9}B`
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? `${Math.abs(Number(labelValue)) / 1.0e6}M`
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? `${Math.abs(Number(labelValue)) / 1.0e3}K`
      : Math.abs(Number(labelValue)))
  ;

  QuoteCheck = (quote) => {
    if (quote.length === 0) {
      document.querySelector('blockquote').style.display = 'none';
      return null;
    }
    return quote;
  };

  render() {
    const {
 Name, ID, Joined, Following, Followers, Quote, Image,
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
              <img id="cal-img" alt="User Image" src={CalImg} />
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

          <Twitt hasImage="yes" />
          <Twitt hasImage="no" />
        </main>
      </>
    );
  }
}

export default TwittPage;
