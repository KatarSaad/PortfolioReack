import React from 'react';
import styled, { keyframes } from 'styled-components';
import {CircleExpand,FloatingElement,Spacer,} from "./StyledComp"
import profileImage from './IMG_0178__1_-removebg-preview.jpg';
import { GlowingButton} from "./ProjectPage"
import { SlideCover } from './Animations';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const glowingAnimation2 = keyframes`
0% {
  box-shadow: 0 0 1px #00DFA2;
}
50% {
  box-shadow: 0 0 3px #00DFA2, 0 0 8px #00DFA2;
}
100% {
  box-shadow: 0 0 2px #00DFA2;
}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top:40px;
  margin-bottom:300px;
`;


const ImageWrapper = styled(FloatingElement)`
  width: 30%;  // Adjust this width as necessary
`;

const AboutContainer = styled.div`
  margin: 2rem 0;
  position: relative; /* <-- Add this line */
  z-index: 1;

  margin-top: 0;
  margin-left:50px;
  width: 60%;
  border-radius: 10px;
  padding: 1rem;
  animation: 2s ${fadeIn} ease-in;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 80px;
    bottom: 40px;
    width: 2px;
    background-color: #00DFA2;
    animation: ${glowingAnimation2} 1.5s infinite;
  }

  h2 {
    color: #0693e3;
    font-size: 2.5em;
  }

  p {
    margin-right: 100px;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    border-radius: 5px;
    color: #BDC7C9;
    line-height: 1.6;
    font-size: 1.2em;
    font-family: 'Roboto';
    font-weight: 400;  
  }
  
  p:hover {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.005);
  }
`;
const FloatingWrapper = styled.div`
  position: relative;  // This is to contextually position the ProfileImage
  display: flex;
  justify-content: center;  // To center the ProfileImage horizontally
  align-items: center;     // To center the ProfileImage vertically
  width: 30%;  // Adjust this width as necessary
`;
const glowingUnderlineAnimation = keyframes`
  0% {
    text-decoration-color: #00FFAB;
    text-shadow: 0 0 1px #00FFAB;
  }
  50% {
    text-decoration-color: #00FFAB;
    text-shadow: 0 0 3px #00FFAB, 0 0 2px #00FFAB;
  }
  100% {
    text-decoration-color: #00FFAB;
    text-shadow: 0 0 1px #00FFAB;
  }
`;
const sideBySideAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(1px);
  }
`;
const GlowsText = styled.span`
  animation: ${glowingUnderlineAnimation} 1.5s infinite, ${sideBySideAnimation} 1.2s infinite;
  color: #00FFAB;
  cursor: pointer;
  display: inline-block; // Makes sure the span acts like a block for transformations
  transform: translateZ(0);  // Enable GPU acceleration
  will-change: transform;   // Hints to the browser to use GPU acceleration
  font-size:${(props) => props.size || '24px'};
  color: ${(props) => props.color || '#00FFAB'};

`;
export const GlowsTextNoAnimation = styled.span`
  animation: ${glowingUnderlineAnimation} 1.5s infinite;
  color: #00FFAB;
  cursor: pointer;
  font:"Roboto Slab";
  weight:900;
  display: inline-block; // Makes sure the span acts like a block for transformations
  transform: translateZ(0);  // Enable GPU acceleration
  will-change: transform;   // Hints to the browser to use GPU acceleration
  font-size:${(props) => props.size || '24px'};
  color: ${(props) => props.color || '#00FFAB'};

`;



const ProfileImage = styled.img`
  position: absolute;  // Makes it overlay on top of its parent
  top: 50%;  // Center it vertically
  left: 50%; // Center it horizontally
  transform: translate(-50%, -50%);  // Pull the image back to its center
  width: 450px;
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
`;
const TextMod = styled.div`
  font-family: ${props => props.font || 'Roboto'};
  font-weight: ${props => props.weight || '400'};
  font-size: ${props => props.size || '16px'};
  color: ${props => props.color || 'white'};
  text-decoration: ${props => props.decoration || 'none'};
  text-transform: ${props => props.transform || 'none'};
  letter-spacing: ${props => props.spacing || 'normal'};
  line-height: ${props => props.lineHeight || 'normal'};
`;


const About = () => {
  return (
    <Container>
   <AboutContainer>
   <Spacer size='50px' />

  <TextMod font="Orbitron" weight="600" size="36px" color="#BCEAD5">
    I Make Software
  </TextMod>
  <Spacer  />
  <SlideCover>  <TextMod font="Roboto Slab" weight="500" size="24px" color="#FEFCF3" lineHeight="1.8" spacing="1.2">
    Dedicated to 
    <GlowsText>designing</GlowsText>, 
    <GlowsText>developing</GlowsText>, modern software solutions with a focus on continuous improvement and learning. I'm skilled in frontend tools like 
    <GlowsText as="span" color="#C3EDC0" size="27px">React</GlowsText> and 
    <GlowsText as="span" color="#C3EDC0" size="27px">JavaScript</GlowsText>, as well as backend technologies such as&nbsp;
    <GlowsText as="span" color="#C3EDC0" size="27px">ASP.NET</GlowsText>&nbsp;and&nbsp;
    <GlowsText as="span" color="#C3EDC0" size="27px">C#</GlowsText>.&nbsp;I 
    <GlowsText>design</GlowsText> robust 
    <GlowsText>software architectures</GlowsText> and turn 
    <GlowsText>system requirements</GlowsText> into real solutions. Using principles like&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#DEF5E5">OOP</TextMod>&nbsp;and&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#DEF5E5" >design patterns</TextMod>, my code is&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#DEF5E5">clear</TextMod>&nbsp;and&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#DEF5E5">efficient</TextMod>. I embrace challenges, always aiming for growth and improvement in&nbsp;
    <TextMod as="span" size="27px" weight="900" color="#DEF5E5">agile</TextMod>&nbsp;settings.
  </TextMod>
  </SlideCover>

  <Spacer size="100px"/>
  <GlowingButton bgColor="#00DFA2" bgColorChange="E8FFCE" TextColor="#E8FFCE" hoverTextColor="00DFA2">
  Hire me!!!!!!!
</GlowingButton>
</AboutContainer>
    
    <FloatingWrapper>
      <FloatingElement>
        <CircleExpand>
          {/* Your Image or any content here */}
        </CircleExpand>
      </FloatingElement>
      <ProfileImage src={profileImage} alt="Your Name" />
    </FloatingWrapper>
  </Container>
);
};

export default About;
