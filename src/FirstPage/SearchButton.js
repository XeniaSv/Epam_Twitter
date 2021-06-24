import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';


const blueTheme = createMuiTheme({ 
    palette: {
        primary: {
            light: '#757ce8',
            main: blue[400],
            dark: '#002884',
            contrastText: '#fff'
        }
    }
})

class SearchButton extends React.Component {
    handlerOnClick() {
        let value = document.querySelector(".search-text-field").querySelector("input").value;
        localStorage.setItem("searchValue", value);
    }

    render(){
        return (
            <MuiThemeProvider theme={blueTheme}>
                <Button className="search-button" variant="contained" color="primary" href="/search" onClick={this.handlerOnClick}>Найти</Button>
            </MuiThemeProvider>
        )
    }
}
export default SearchButton;
