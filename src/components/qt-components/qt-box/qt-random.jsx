import React from "react";

import { ReactComponent as Author } from '../../../assets/owl.svg'

import './qt-box.styles.scss'

const RandomQuote = ({ randomQuoteId, authorsText, quotesText }) => (
    <div className="qt-border">
        <Author className="qt-author-column left qt-box-author" alt='img' />
        <p className="qt-author-column right qt-box-author"> {authorsText[randomQuoteId]}</p>
        <p className="qt-box-column qt-box-text">{quotesText[randomQuoteId]}</p>
    </div>
)

export default RandomQuote;