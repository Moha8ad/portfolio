import styled, { css, keyframes } from 'styled-components';

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
    color: #E1A5FF;
    font-size: min(28px, 5vw);
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;
    padding-bottom: min(30px, 5%);

    -webkit-animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMe = styled.div`    
    color: #E3F0F5;
    font-size: min(18px, 2.5vw);;
    font-weight: 400;
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;
    -webkit-animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMeContent = styled.div`
    width: min(500px, 60%);
`

export const SkillDev = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: min(700px, 80%);
`

export const customSize = css`
    height: 40px;
    width: 40px;
`

export const SkillLogo = styled.span`
    background-size: cover;
    margin: 10px;
    justify-self: center;

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
        background-image: url("https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg");
        ${customSize}
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
document.addEventListener("mousemove", parallax);
function parallax(e) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let logo1 = `${2 - (mouseX - w) * 0.01}% ${2 - (mouseY - h) * 0.02}%`;
    let logo2 = `${7 - (mouseX - w) * 0.02}% ${24 - (mouseY - h) * 0.01}%`;
    let logo3 = `${12 - (mouseX - w) * 0.03}% ${10 - (mouseY - h) * -0.01}%`;
    let logo4 = `${17 - (mouseX - w) * 0.005}% ${18 - (mouseY - h) * -0.01}%`;
    let logo5 = `${22 - (mouseX - w) * 0.01}% ${28 - (mouseY - h) * -0.02}%`;
    let logo6 = `${27 - (mouseX - w) * -0.02}% ${6 - (mouseY - h) * 0.03}%`;
    let logo7 = `${75 - (mouseX - w) * 0.01}% ${14 - (mouseY - h) * 0.01}%`;
    let logo8 = `${84 - (mouseX - w) * -0.04}% ${22 - (mouseY - h) * 0.01}%`;
    let logo9 = `${88 - (mouseX - w) * -0.03}% ${10 - (mouseY - h) * -0.01}%`;
    let logo10 = `${94 - (mouseX - w) * -0.02}% ${26 - (mouseY - h) * -0.03}%`;
    let logo11 = `${98 - (mouseX - w) * -0.01}% ${2 - (mouseY - h) * 0.01}%`;
    let x = `${logo11}, ${logo10}, ${logo9}, ${logo8}, ${logo7}, ${logo6}, ${logo5}, ${logo4}, ${logo3}, ${logo2}, ${logo1}`;
    document.querySelector(`${MovingLogo}`).style.backgroundPosition = x;
}
export const MovingLogo = styled.span`

    background-position: -100px;
    width: 100%;
    min-height: 100vh;
    background-image: 
    url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg), 
    url(https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg),
    url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png),
    url(https://restfulapi.net/wp-content/uploads/rest.png),
    url(https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg), 
    url(https://static.requarks.io/logo/firebase.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg),
    url(https://styled-components.com/logo.png),
    url(https://nodejs.org/static/images/logo.svg);

    background-size: 40px auto;
    background-repeat: no-repeat;
    opacity: 0.2;
    transition: transform 2s ease-in-out;
    position: absolute;
    
`

export const AboutMeSection = styled.div`

    width: 100%;
    min-height: 100vh;

    background: linear-gradient(#000 0%, #0D25B9 100%);

    
     display: flex;
     flex-direction: column;
     flex-wrap: nowrap;
     justify-content: space-evenly;
     align-items: center;
     align-content: center;



    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */

    user-select: none; 
    cursor: default;
`

export const AboutMePage = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100vw;

`

export const ProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`