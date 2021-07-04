import './TwittPage.css';

import NavBar from '../containers/NavBar';
import Tweet from '../containers/Tweet';
import GetTweetsId from '../helpers/GetTweetsId';
import GetUserData from '../helpers/GetUserData';
import CalImg from '../resource/calendar.svg';

import Avatar from '@material-ui/core/Avatar';

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

  async componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('searchValue');
    this.setState(await GetUserData(id));
    this.setState(await GetTweetsId(id));
  }

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
