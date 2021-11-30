import styled from "styled-components";
export const Wrap = styled.div`
     height: 100vh;
     width: 100%;
     background-image: ${(props) => `url("../images/${props.bgImage}")`};
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
`