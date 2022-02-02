import styled, { css, keyframes } from 'styled-components'
import { BackgroundImage } from '../menu-item/menu-item.styles';

const breakpoints = {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
};

export const device = {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    xxl: `(min-width: ${breakpoints.xl})`,
};

export const fadeInRight = keyframes`
    0% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`

export const fadeInLeft = keyframes`
    0% {
        -webkit-transform: translateX(-50px);
        transform: translateX(-50px);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
`

export const rollInRight = keyframes`
    0% {
        -webkit-transform: translateX(50vh) rotate(720deg);
        transform: translateX(50vh) rotate(720deg);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg)
        opacity: 1;

    }
`

export const AsarLogo = styled.div`

    -webkit-animation: ${fadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const JobTitle = styled.div`

    padding: 10vh 2vw 1vh;
    
    color: #E1A5FF;
    font-size: 1.7rem;
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;

    -webkit-animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMe = styled.div`
    
    padding: 1vh 2vw 15vh;
    color: #E3F0F5;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;
    
    -webkit-animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const SkillDev = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: auto; 
    gap: 20px;

    max-width: 100vw;

    justify-self: center;
    align-self: center;
`

export const customSize = css`
    height: 40px;
    width: 40px;
`

export const SkillLogo = styled.span`
    background-size: cover;
    padding: 10px;
    justify-self: center;
    align-self: center;

    ${props => props.js && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
        ${customSize}
	    animation: ${rollInRight} 1.65s 1s ease-out both;  
    `}
    ${props => props.react && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg");
        height: 40px;
        width: 45px;
	    animation: ${rollInRight} 1.65s 1.2s ease-out both;  
    `}
    ${props => props.redux && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png");
        height: 40px;
        width: 42px;
	    animation: ${rollInRight} 1.65s 1.4s ease-out both;  
    `}
    ${props => props.nodejs && css`
        background-image: url("https://nodejs.org/static/images/logo.svg");
        height: 40px;
        width: 65px;
	    animation: ${rollInRight} 1.65s 1.5s ease-out both;  
    `}
    ${props => props.rest && css`
        background-image: url("https://restfulapi.net/wp-content/uploads/rest.png");
        ${customSize}
	    animation: ${rollInRight} 1.65s 1.6s ease-out both;  
    `}
    ${props => props.firebase && css`
        background-image: url("https://static.requarks.io/logo/firebase.svg");
        height: 40px;
        width: 25px;
	    animation: ${rollInRight} 1.65s 1.7s ease-out both;  
    `}
    ${props => props.git && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg");
        ${customSize}
        animation: ${rollInRight} 1.65s 1.8s ease-out both; 
    `}
    ${props => props.github && css`
        background-image: url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
        ${customSize}
        animation: ${rollInRight} 1.65s 1.9s ease-out both; 
    `}
    ${props => props.wordpress && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg");
        ${customSize}
	    animation: ${rollInRight} 1.65s 2s ease-out both;  
    `}
    ${props => props.bootstrap && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg");
        height: 40px;
        width: 50px;
        animation: ${rollInRight} 1.65s 2.1s ease-out both;  
    `}
    ${props => props.styledComponent && css`
        background-image: url("https://styled-components.com/logo.png");
        ${customSize}
        animation: ${rollInRight} 1.65s 2.2s ease-out both; 
    `}
`

export const AboutMeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    max-width: 100vw;
    padding: 1rem;

    background-image: linear-gradient(0deg, #000 0%, #0D25B9 100%);

    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */

    user-select: none; 
    cursor: default;
`

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and ${device.xs} { 
        ${AboutMeSection} { 
            padding: 1rem;
        }

        ${JobTitle} {
            padding: 10vh 2vw 1vh;
        }

        ${AboutMe} {
            padding: 1vh 2vw 10vh;
        }

        ${SkillDev}{
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
    }
    @media only screen and ${device.sm} { 
        ${AboutMeSection} { 
            padding: 3rem;
        }
        ${JobTitle} {
            padding: 15vh 2vw 1vh;
        }

        ${AboutMe} {
            padding: 1vh 2vw 15vh;
        }

        ${SkillDev}{
            grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
            gap: 10%;
        }
    }
    @media only screen and ${device.md} { 
        ${AboutMeSection} { 
            padding: 4rem;
        }
        ${JobTitle} {
            padding: 15vh 15vw 1vh;
        }

        ${AboutMe} {
            padding: 1vh 15vw 15vh;
        }

        ${SkillDev}{
            grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
            gap: 20px;
            padding: 0 10vh;
        }

        
    }
    @media only screen and ${device.lg} { 
        ${AboutMeSection} { 
            padding: 4rem;
        }        
        ${JobTitle} {
            padding: 10vh 25vw 2vh;
        }

        ${AboutMe} {
            padding: 0 25vw 20vh;
        }

        ${SkillDev}{
            grid-template-columns: repeat(auto-fill, minmax(8%, 1fr));
            gap: 1%;
            padding: 0 10vh;
        }

    }
    @media only screen and ${device.xl} { 
        ${AboutMeSection} { 
            padding: 5rem;
        }
        ${JobTitle} {
            padding: 15vh 25vw 2vh;
        }

        ${AboutMe} {
            padding: 0 25vw 25vh;
        }

        ${SkillDev}{
            grid-template-columns: repeat(auto-fill, minmax(8%, 1fr));
            gap: 1%;
            padding: 0 20vh;
        }

        
    }
`