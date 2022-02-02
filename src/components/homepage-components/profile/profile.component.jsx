import React from "react";

import Header from "../../all-reusable-components/asar-logo-lg-wt/asar-logo-lg-wt.component.jsx";
import Directory from "../directory/directory.component"

import { ProfilePage, AboutMeSection, AsarLogo, JobTitle, AboutMe, SkillDev, SkillLogo } from './profile.styles.jsx'

const Profile = () => {
    return (
    <ProfilePage>
        <AboutMeSection>
            <AsarLogo>
                <Header />
            </AsarLogo>
            <JobTitle>
            <i class="bi bi-terminal fs-6"></i> <i class="bi bi-code-square fs-5" /> Web Developer 
            </JobTitle>
            <AboutMe>
                Hi, I'm Mohammad.
                I invite you to see the two react apps I built by using the below tools. 
                I'd be more than happy if you share your comments with me.
            </AboutMe>
            <SkillDev>
                <SkillLogo js />
                <SkillLogo react />
                <SkillLogo redux />
                <SkillLogo nodejs />
                <SkillLogo rest />
                <SkillLogo firebase /> 
                <SkillLogo git />
                <SkillLogo github />
                <SkillLogo wordpress />
                <SkillLogo bootstrap /> 
                <SkillLogo styledComponent />
            </SkillDev>
        </AboutMeSection>
        <Directory />
    </ProfilePage>


    )
}

export default Profile;