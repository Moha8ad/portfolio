import React from "react";
import { withRouter } from 'react-router-dom';

import {AppMenu, BackgroundImage} from './menu-item.styles.jsx'

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match}) => (
    <AppMenu
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage
            style={{
              backgroundImage: `url(${imageUrl})`
            }} 
        />
    </AppMenu>
);

export default withRouter(MenuItem);