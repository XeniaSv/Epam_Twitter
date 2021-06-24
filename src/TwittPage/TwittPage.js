import React from 'react';
import './TwittPage.css';
import NavBar from './NavBar';
import Avatar from '@material-ui/core/Avatar';
import CalImg from '../resource/calendar.svg';
import Twitt from './Twitt';


class TwittPage extends React.Component {
    render() {
        return(
            <>
                <NavBar />
                <main className="twittPage-main">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" id='avatar' />
                    <h1>Литература</h1>
                    <h3>@literabook</h3>
                    <blockquote>Самое интересное, что есть на земле - это человек. По всем вопросам adv.dimaruru@gmail.com</blockquote>
                    <div className='account-info'>
                        <div className='container'>
                            <img id='cal-img' src={CalImg}/>
                            <p>&nbsp; Joined January 2012</p>
                        </div>
                        <div className='container'>
                            <b>20</b>
                            <p>&nbsp; Following</p>
                        </div>
                        <div className='container'>
                            <b>2.1M</b>
                            <p>&nbsp; Followers</p>
                        </div>    
                    </div>
                    <hr />

                <Twitt hasImage="yes" />
                <Twitt hasImage="no" />
                
                </main>
            </>
        )
    }
}

export default TwittPage;