import React from 'react';


import QuotifyNavbar from '../qt-navbar/qt-navbar.component';
import QuotifyMain from '../qt-main/qt-main.component';
import QuotifyFooter from '../qt-footer/qt-footer.component';

import QUOTES_DATA from './qt.data'

import './qt-directory.styles.scss'

class QuotifyDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesDB: []
        };
    }

    componentDidMount() {
        this.setState({
            quotesDB: QUOTES_DATA
        })
    }
    render() {
        return(
                <div class="row quotify-container">
                    <QuotifyNavbar />
                    <QuotifyMain />
                    <QuotifyFooter />
                </div>
        )
    }
}

export default QuotifyDirectory