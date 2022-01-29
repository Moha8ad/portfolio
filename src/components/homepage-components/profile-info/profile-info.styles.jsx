import styled, { css, keyframes } from 'styled-components'



export const AboutMeSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-areas:
      "asar-logo asar-logo asar-logo"
      "about-me about-me ."
      ". skill ."
      ". . .";

      min-height: 100vh;
      min-width: 100vw;
      background-color: rgb(0, 21, 81);
      padding: 5px;
`

export const AboutMe = styled.div`
    grid-area: about-me; 
    justify-self: start; 
    align-self: start;
    padding: 20px 10vw;
    color: rgb(0, 140, 210);
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
    grid-template-columns: repeat(5, 1fr); 
    grid-template-rows: auto; 
    gap: 15px;
    grid-template-areas: 
    ". . . . ."; 
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

export const entrance = keyframes`
{
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-bck-center {
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}

`

export const Entrance = styled.div`
	-webkit-animation: ${entrance} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: ${entrance} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`