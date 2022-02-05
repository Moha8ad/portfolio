import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";
import Directory from "../directory/directory.component";

import LOGO_URL from './logo-url-address-db';
import { Image, ProfilePage, AboutMeSection, AboutMePage, AboutMeContent, MovingLogo, AsarLogo, JobTitle, AboutMe, SkillDev } from './profile.styles.jsx';

const Profile = () => {

    return (
    <ProfilePage>
        <AboutMePage>
            <MovingLogo />
            <AboutMeSection>
                <AsarLogo>
                    <Header />
                </AsarLogo>
                <AboutMeContent>
                    <JobTitle>
                        <i class="bi bi-terminal fs-6"></i> <i class="bi bi-code-square fs-5" /> Web Developer
                    </JobTitle>
                    <AboutMe>
                        Hi, I'm Mohammad.
                        I invite you to see the two react apps I built by using the below tools.
                        I'd be more than happy if you share your comments with me.
                    </AboutMe>
                </AboutMeContent>
                <SkillDev>
                    {LOGO_URL.map( address =>
                        <Image alt={address.alt} src={address.url} style={{width:"max(6vh, 4vw)", padding: "5px", animationDelay: `${address.delay}`}}/>
                    )}
                </SkillDev>
            </AboutMeSection>
        </AboutMePage>
        <Directory />
    </ProfilePage>


    )
}

export default Profile;