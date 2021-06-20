import React from 'react';

import './FirstPage.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import twitterImg from '../resource/twitter.svg';
import SearchButton from './SearchButton';
import InfoButton from './InfoButton';


class FirstPage extends React.Component {
  render(){
    return (
    <>
      <header>
        <InfoButton className="info-button"/>
      </header>

      <main>
        <div className="h1-and-icon">
          <h1>Mini Twitter</h1>
          <img className="twitter" src={twitterImg}/>
        </div>

        <div className="search-div">
          <TextField
            className="search-text-field"
            label="Поиск"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <SearchButton/>
        </div>

      </main>
    </>
    )
  }
}

export default FirstPage;
