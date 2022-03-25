import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";
import Directory from "../directory/directory.component";

import LOGO_URL from './logo-url-address-db';
import { Image, ProfilePage, AboutMeContent, AboutMePage, AboutMeBox, MovingLogo, AsarLogo, JobTitle, AboutMe, SkillDev } from './profile.styles.jsx';

const Profile = () => {
    return (
        <ProfilePage>
            <AboutMePage>
                <MovingLogo />
                <AboutMeBox>
                    <AsarLogo>
                        <Header />
                    </AsarLogo>
                    <AboutMeContent>
                        <JobTitle>
                            <i className="bi bi-terminal fs-6"></i> <i className="bi bi-code-square fs-5" /> Web Developer
                        </JobTitle>
                        <AboutMe>
                            Hi, I'm Mohammad.
                            I invite you to see the react apps I built by using the below tools.
                            I'd be more than happy if you share your comments with <a href="asar.web.development@gmail.com" style={{color:'lightgreen'}}>me</a>.
                        </AboutMe>
                    </AboutMeContent>
                    <SkillDev>
                        {LOGO_URL.map( address =>
                            <Image alt={address.alt} src={address.url} style={{height:"max(6vh, 4vw)", width:"max(6vh, 4vw)", padding: "max(0.8vh, 0.8vw)", animationDelay: `${address.delay}`}}/>
                        )}
                    </SkillDev>
                </AboutMeBox>
            </AboutMePage>
            <Directory />
        </ProfilePage>
    )
}

export default Profile;