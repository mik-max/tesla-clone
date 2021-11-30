import React from "react";
import styled from "styled-components";
import TitleText from "./TitleText";
import ButtonGroup from "./ButtonGroup";
import { Fade } from "react-awesome-reveal";
function Section ({title, subtitle, rightButton,  leftButton, background}){
     return(
          <Wrap  bgimage = {background}>
               <Fade direction = "up">
                    <TitleText title = {title} subtitle = {subtitle} />
               </Fade>
               <Fade direction = "up">
                    <ButtonGroup rightButton = {rightButton} leftButton = {leftButton} />
               </Fade>
               
          </Wrap>
     );
}

export default Section;
const Wrap = styled.div`
     height: 100vh;
     width: 100%;
     background-image:${props => `url("/images/${props.bgimage}")`};
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
`



/* Notes...
Styled-components is a further library that implements the above-mentioned CSS-in-JS technique. It utilizes tagged template literals — which contain actual CSS code between two backticks — to style your components. This is nice, as you can then copy/paste CSS code from another project (or anywhere else on the Web) and have things work. There’s no converting to camel case or to JS object syntax as with some other libraries.

Styled-components also removes the mapping between components and styles. As can be read in their documentation, this means that when you’re defining your styles, you’re actually creating a normal React component that has your styles attached to it. This makes your code more succinct and easy to follow, as you end up working with a <Layout> component, as opposed to a <div> with a class name of “layout”. */  