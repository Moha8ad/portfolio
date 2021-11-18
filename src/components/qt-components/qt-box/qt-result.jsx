import React from "react";

import { ReactComponent as Logo } from '../../../assets/owl.svg'

import './qt-box.styles.scss'

const ResultQuote = ({ result }) => (
    <div>
        <Logo className="qt-author-column left qt-box-author" alt='img' />
        <p className="qt-author-column right qt-box-author"> {result.author}</p>
        <p className="qt-box-column qt-box-text">{result.quote}</p>
    </div>
)

export default ResultQuote;