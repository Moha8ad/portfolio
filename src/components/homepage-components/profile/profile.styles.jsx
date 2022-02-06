import styled, { css, keyframes } from 'styled-components';

export const Image = props => {
    const {
      alt,
      ...otherProps
    } = props;
  
    return (
      <img alt={alt} {...otherProps} />
    );
  }

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
    font-size: max(3.5vh, min(3vw, 1.6rem));
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;
    padding-bottom: max(1.5vh, 1.5vw);

    -webkit-animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInLeft} 0.7s 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMe = styled.div`    
    color: #E3F0F5;
    font-size: max(2.5vh, min(2vw, 1.2rem));
    font-weight: 400;
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;
    -webkit-animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: ${fadeInLeft} 0.6s 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMeContent = styled.div`
    width: max(20vh, 80vw);

    @media only screen and ${device.sm} {
        width: max(40vh, 40vw);
    }

`

export const SkillDev = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: max(20vh, 80vw);
    

    @media only screen and ${device.sm} {
        width: max(40vh, 50vw);
    }
    
    *{
        animation: ${rollInRight} 1.5s ease-out both;
    }
`



export const MovingLogo = styled.span`

    background-position: -100px;
    width: 100%;
    min-height: 100vh;
    background-image: 
    url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png),
    url(https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg), 
    url(https://restfulapi.net/wp-content/uploads/rest.png),
    url(https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg), 
    url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg),
    url(https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg),
    url(https://nodejs.org/static/images/logo.svg),
    url(https://styled-components.com/logo.png),
    url(https://static.requarks.io/logo/firebase.svg);

    padding: max(0.8vh, 0.8vw);
    background-size: max(4vh, 2vw) max(4vh, 2vw);
    background-repeat: no-repeat;
    opacity: 0.2;
    position: absolute;
`
    
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
    
    if (document.querySelector(MovingLogo) != null){
        document.querySelector(MovingLogo).style.backgroundPosition = x;
    }
}
    
document.addEventListener("mousemove", parallax);

export const AboutMeSection = styled.div`

    width: 100%;
    min-height: 100vh;

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
    background: linear-gradient(#000 0%, #0D25B9 100%);
    min-height: 100vh;
`

export const ProfilePage = styled.div`
    font-size: 12px;
    color: white;
`