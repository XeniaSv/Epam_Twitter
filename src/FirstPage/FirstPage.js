import React from 'react';

import './FirstPage.css';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import twitterImg from '../resource/twitter.svg';
import SearchButton from './SearchButton';
import InfoButton from './InfoButton';



class FirstPage extends React.Component {
  keyPress(e) {
    if (e.keyCode == 13) {
      let value = document.querySelector(".search-text-field").querySelector("input").value;
      localStorage.setItem("searchValue", value);
      window.open("/search", "_self")
    }
  }

  render(){
    return (
    <>
      <header>
        <InfoButton className="info-button"/>
      </header>

      <main className="first-page-main">
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
            onKeyDown={this.keyPress}
          />
          <SearchButton/>
        </div>

      </main>
    </>
    )
  }
}

export default FirstPage;
