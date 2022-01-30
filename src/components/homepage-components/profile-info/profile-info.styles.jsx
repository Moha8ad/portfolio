import styled, { css, keyframes } from 'styled-components'

export const entrance = keyframes`
    {
    0% {
      -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
              transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
      -webkit-filter: blur(40px);
              filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
              transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      -webkit-filter: blur(0);
              filter: blur(0);
      opacity: 1;
    }
  }
`

export const AboutMeSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      ". asar-logo ."
      "about-me about-me ."
      "skill skill skill";

      min-height: 100vh;
      min-width: 100vw;
      background-color: rgb(0, 21, 81);
      padding: 5px;

    -webkit-animation: ${entrance} 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
	animation: ${entrance} 0.7s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
`

export const AboutMe = styled.div`
    grid-area: about-me; 
    justify-self: center; 
    align-self: center;
    padding: 20px 10vw;
    color: rgb(0, 200, 190);
    font-size: 1.4rem;
`

export const AsarLogo = styled.div`
    grid-area: asar-logo; 
    justify-self: center; 
    align-self: start;
    padding: 20px 10vw;
`

export const SkillDev = styled.div`
    display: grid; 
    grid-template-columns: repeat(8, 1fr); 
    grid-template-rows: auto; 
    justify-self: center; 
    align-self: center;
    gap: 15px;
    grid-area: skill;
    padding: 5px;
`


export const SkillLogo = styled.span`
    height: 100%;
    width: auto;
    padding: 10px;
    margin: 5px;
    background-size: cover;

    ${props => props.styledComponent && css`
        background-image: url("https://styled-components.com/logo.png");
        height: 60px;
        width: 60px;
    `}

    ${props => props.react && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg");
        height: 60px;
        width: 67.5px;
    `}

    ${props => props.firebase && css`
        background-image: url("https://static.requarks.io/logo/firebase.svg");
        height: 60px;
        width: 43px;
    `}

    ${props => props.nodejs && css`
        background-image: url("https://nodejs.org/static/images/logo.svg");
        height: 60px;
        width: 100px;
    `}
    ${props => props.bootstrap && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg");
        height: 60px;
        width: 75px;
    `}
    ${props => props.js && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
        height: 60px;
        width: 60px;
    `}
    ${props => props.graphql && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg");
        height: 60px;
        width: 60px;
    `}
    ${props => props.apollo && css`
        background-image: url("https://brandeps.com/logo-download/A/Apollo-GraphQL-logo-vector-01.svg");
        height: 60px;
        width: 60px;
    `}
`  

