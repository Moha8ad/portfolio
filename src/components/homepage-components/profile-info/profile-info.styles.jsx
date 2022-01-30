import styled, { css, keyframes } from 'styled-components'

export const colorChange = keyframes`
    0%{background-position:10% 60%}
    25%{background-position:100% 30%}
    100%{background-position:0% 0%}
`

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
        -webkit-transform: translateX(1000px) rotate(720deg);
        transform: translateX(1000px) rotate(720deg);
        opacity: 0;
    }
    100% {
        -webkit-transform: translateX(0) rotate(0deg);
        transform: translateX(0) rotate(0deg)
        opacity: 1;

    }
`

export const AboutMeSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-areas:
        ". asar-logo ."
        ". about-me ."
        ". skill .";

    min-height: 100vh;
    min-width: 100vw;

    -webkit-user-select: none;  /* Chrome all / Safari all */
    -moz-user-select: none;     /* Firefox all */
    -ms-user-select: none;      /* IE 10+ */
    user-select: none; 
    cursor: default;

	-webkit-animation: ${colorChange} 4s linear 1 alternate both;
	animation: ${colorChange} 4s linear 1 alternate both;

    background-image: linear-gradient( 135deg, #002661 10%, #0396FF 100%);
    background-size: 250% 250%;
    animation: ${colorChange} 4s ease 1;
`

export const AsarLogo = styled.div`
    grid-area: asar-logo; 
    justify-self: center; 
    align-self: center;
    padding: 10px;

    -webkit-animation: ${fadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInRight} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const AboutMe = styled.div`
    grid-area: about-me; 
    justify-self: center; 
    align-self: start;
    color: #0396FF;
    font-size: 1.6rem;
    font-family: 'Quicksand', 'Open Sans Condensed', Georgia, Times, 'Times New Roman', serif;

    @media only screen and (max-width: 600px) {
        padding: 1rem; 
    }

    -webkit-animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	animation: ${fadeInLeft} 0.6s 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const SkillDev = styled.div`
    display: grid; 
    grid-template-columns: repeat(9, 1fr); 
    grid-template-rows: auto; 
    justify-self: center; 
    align-self: start;
    gap: 15px;
    grid-area: skill;
    padding: 5px;

    @media only screen and (max-width: 992px) {
        grid-template-columns: repeat(4, 1fr); 
    }

    @media only screen and (max-width: 776px) {
        grid-template-columns: repeat(3, 1fr); 
    }
`

export const SkillLogo = styled.span`
    height: 100%;
    width: auto;
    padding: 10px;
    margin: 5px;
    background-size: cover;

    ${props => props.js && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
        height: 60px;
        width: 60px;
	    animation: ${rollInRight} 1.65s 1s ease-out both;  
    `}
    ${props => props.react && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg");
        height: 60px;
        width: 67.5px;
	    animation: ${rollInRight} 1.65s 1.2s ease-out both;  
    `}
    ${props => props.redux && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png");
        height: 60px;
        width: 67.5px;
	    animation: ${rollInRight} 1.65s 1.4s ease-out both;  
    `}
    ${props => props.nodejs && css`
        background-image: url("https://nodejs.org/static/images/logo.svg");
        height: 60px;
        width: 100px;
	    animation: ${rollInRight} 1.65s 1.5s ease-out both;  
    `}

    ${props => props.graphql && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg");
        height: 60px;
        width: 60px;
	    animation: ${rollInRight} 1.65s 1.6s ease-out both;  
    `}
    ${props => props.apollo && css`
        background-image: url("https://brandeps.com/logo-download/A/Apollo-GraphQL-logo-vector-01.svg");
        height: 60px;
        width: 60px;
	    animation: ${rollInRight} 1.65s 1.7s ease-out both;  
    `}
    ${props => props.firebase && css`
        background-image: url("https://static.requarks.io/logo/firebase.svg");
        height: 60px;
        width: 43px;
	    animation: ${rollInRight} 1.65s 1.8s ease-out both;  
    `}
    ${props => props.bootstrap && css`
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg");
        height: 60px;
        width: 75px;
        animation: ${rollInRight} 1.65s 1.9s ease-out both;  
    `}
    ${props => props.styledComponent && css`
        background-image: url("https://styled-components.com/logo.png");
        height: 60px;
        width: 60px;
        animation: ${rollInRight} 1.65s 2s ease-out both;    
    `}
`