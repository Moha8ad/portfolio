import React from "react";
import { withRouter } from 'react-router-dom';

import {AppMenu, BackgroundImage, Content, Title, Subtitle} from './menu-item.styles.jsx'

const MenuItem = ({ title, subtitle, imageUrl, props, status, history, linkUrl, match}) => (
    <AppMenu {...status ? status : null}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage
            style={{
              backgroundImage: `url(${imageUrl})`
            }} 
        />
        <Content>
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Content>
    </AppMenu>
);

export default withRouter(MenuItem);