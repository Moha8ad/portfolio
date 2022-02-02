import React from "react";
import { withRouter } from 'react-router-dom';

import {AppMenu, BackgroundImage, Image, Content, Title, Subtitle} from './menu-item.styles.jsx'

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match}) => (
    <AppMenu
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >   
        <BackgroundImage>
            <Image alt="Logo" src={imageUrl} style={{width:"100%"}}/>
        </BackgroundImage>
        <Content>
            <Title>{title.toUpperCase()}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Content>
    </AppMenu>
);

export default withRouter(MenuItem);