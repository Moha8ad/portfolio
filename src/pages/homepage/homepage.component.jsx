import React from "react";

import ProfileInfo from "../../components/homepage-components/profile-info/profile-info.component";
import Directory from '../../components/homepage-components/directory/directory.component'

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <ProfileInfo />
        <Directory/>
    </div>
)

export default HomePage;