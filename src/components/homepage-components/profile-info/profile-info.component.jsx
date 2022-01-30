import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";

import { AboutMeSection, AsarLogo, AboutMe, SkillDev, SkillLogo } from './profile-info.styles.jsx'

const ProfileInfo = () => {
    return (
    <AboutMeSection>
        <AsarLogo>
            <Header />
        </AsarLogo>

        <AboutMe>
            Hi, I'm Mohammad, learning web development.
            I enjoy dealing with the novel challenges 
            and finding/building a way forward.
            I invite you to see the two react apps I built thus far. 
            I'd be more than happy if you share your comments with me.
        </AboutMe>
        <SkillDev>
            <SkillLogo js />
            <SkillLogo react />
            <SkillLogo nodejs />
            <SkillLogo graphql />
            <SkillLogo apollo />
            <SkillLogo firebase /> 
            <SkillLogo bootstrap /> 
            <SkillLogo styledComponent />
        </SkillDev>
    </AboutMeSection>
    )
}

export default ProfileInfo;