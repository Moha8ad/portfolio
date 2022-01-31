import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";
import Directory from "../directory/directory.component"

import { AboutMeSection, AsarLogo, JobTitle, AboutMe, SkillDev, SkillLogo } from './profile.styles.jsx'

const Profile = () => {
    return (
    <div>
    <AboutMeSection>
        <AsarLogo>
            <Header />
        </AsarLogo>
        <JobTitle>
            Web Developement
        </JobTitle>
        <AboutMe>
            Hi, I'm Mohammad, learning web development.
            I enjoy dealing with the novel challenges in this path
            and finding/building a way forward.
            The list on the left shows the skills I've been learning and practicing
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
    <Directory />
    </div>


    )
}

export default Profile;