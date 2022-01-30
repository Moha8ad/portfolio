import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";

import { AboutMeSection, AsarLogo, JobTitle, AboutMe, SkillDev, SkillLogo } from './profile-info.styles.jsx'

const ProfileInfo = () => {
    return (
    <AboutMeSection>
        <AsarLogo>
            <Header />
        </AsarLogo>
        <JobTitle>
            <span class="text-secondary" style={{fontSize: '1rem'}}>on my way to be a</span> Front-end Developer
        </JobTitle>
        <AboutMe>
            Hi, I'm Mohammad, learning web development.
            I enjoy dealing with the novel challenges in this path
            and finding/building a way forward.
            The following list shows the skills I've been learning and practicing
            during the past six months.
            I invite you to see the two react apps I built thus far. 
            I'd be more than happy if you share your comments with me.
        </AboutMe>
        <SkillDev>
            <SkillLogo js />
            <SkillLogo react />
            <SkillLogo redux />
            <SkillLogo nodejs />
            <SkillLogo graphql />
            <SkillLogo apollo />
            <SkillLogo firebase /> 
            <SkillLogo git />
            <SkillLogo github />
            <SkillLogo bootstrap /> 
            <SkillLogo styledComponent />
        </SkillDev>
    </AboutMeSection>
    )
}

export default ProfileInfo;