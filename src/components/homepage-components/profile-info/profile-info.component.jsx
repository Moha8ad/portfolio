import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";

import { Entrance, AboutMeSection, AsarLogo, AboutMe, SkillDev, SkillLogo } from './profile-info.styles.jsx'

const ProfileInfo = () => {
    return (
    <Entrance>
    <AboutMeSection>
    <Entrance>
    <AsarLogo>
            <Header />
        </AsarLogo>
        </Entrance>

        <AboutMe>
            Hi, I'm Mohammad, learning web development.
            I enjoy dealing with the novel challenges 
            and finding/building a way forward.
            I invite you to see the two react apps I built thus far. 
            I'd be more than happy if you share your comments with me.
        </AboutMe>
        <SkillDev>
            <SkillLogo react />
            <SkillLogo js />
            <SkillLogo nodejs />
            <SkillLogo firebase />
            <SkillLogo styledComponent />
            <SkillLogo bootstrap />            
            <SkillLogo graphql />
            <SkillLogo apollo />
            </SkillDev>
    </AboutMeSection>
    </Entrance>
    )
}

export default ProfileInfo;