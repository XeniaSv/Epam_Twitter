import './FirstPage.css';

import InfoButton from '../components/InfoButton';
import SearchButton from '../components/SearchButton';
import SearchField from '../components/SearchField';

import twitterImg from '../resource/twitter.svg';

import React from 'react';

export default function FirstPage() {
  return (
    <>
      <header>
        <InfoButton className="info-button" />
      </header>

      <main className="first-page-main">
        <div className="h1-and-icon">
          <h1>Mini Twitter</h1>
          <img alt="Twitter icon" className="twitter" src={twitterImg} />
        </div>

        <div className="search-div">
          <SearchField className="search-text-field" />
          <SearchButton />
        </div>
      </main>
    </>
  );
}
