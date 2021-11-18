import React from "react";
import { Link } from 'react-router-dom';

import { ReactComponent as AsArLogoLgWt } from '../../../assets/asar-logo-lg-wt.svg';

import './asar-logo-lg-wt.styles.scss'

const Header = () => (
    <div>
        <Link to="/profile/">
            <AsArLogoLgWt class="asar-logo-lg-wt"/>
        </Link>
    </div>
);

export default Header;