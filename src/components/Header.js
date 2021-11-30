import styled from "styled-components";
import { useState } from "react";
import {selectCars} from '../features/car/Carslice'
import { useSelector } from "react-redux";

function Header (){
     const [burgerStatus, setBurgerStatus] = useState(false);
     const cars = useSelector(selectCars);
     return (
          <Container>
               <a>
                    <img src="/images/logo.svg" alt = ""/>
               </a>
               <Menu>
                    {cars && cars.map((car, index) =>(
                          <a key= {index} href = "#">{car}</a>
                    ))}
                   
               </Menu>
               <RightMenu>
                    <a href = "#">Shop</a>
                    <a href = "#">Account</a>
                    <span><i className="fa fa-bars" aria-hidden="true" onClick = {() => setBurgerStatus(true)}></i></span>
               </RightMenu>
               <BurgerNavMenu show = {burgerStatus}>
                    <CustomWrapper>
                      <span><i className="fa fa-times" aria-hidden="true" onClick = {() => setBurgerStatus(false)}></i></span>
                    </CustomWrapper>
                    {cars && cars.map((car, index) =>(
                         <li><a key= {index} href = "#">{car}</a></li>
                    ))}
                    <li><a href= "">Existing Inventory</a></li>
                    <li><a href= "">Used Inventory</a></li>
                    <li><a href= "">Trade-In</a></li>
                    <li><a href= "">Roadster</a></li>
                    <li><a href= "">Semi</a></li>
                    <li><a href= "">Cybertruck</a></li>
                    <li><a href= "">Cybertruck</a></li>
               </BurgerNavMenu>
          </Container>
     );
}
export default Header;

const Container = styled.div`
   min-height:60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top: 0;
   left: 0;
   right: 0;
   z-index: 1;
`

const Menu = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex: 1;
     a {
          font-weight: 600;
          text-transform: uppercase;
          padding: 0px 10px;
          flex-wrap: nowrap;
     }
     @media(max-width: 768px){
          display: none;
     }
`
const RightMenu = styled.div`
     display: flex;
     align-items: center;
     a {
          font-weight: 600;
          text-transform: uppercase;
          margin-right: 10px;
          flex-wrap: nowrap;
     }
  

`
const BurgerNavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    z-index:1;
    width: 300px;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: .3s ease-in-out;
   
    li{
      list-style-type: none;
      padding: 15px 0px;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      a{
           font-weight: 600;
      }
    }
    span{
         cursor: pointer;
    }
`
const CustomWrapper = styled.div`
     display: flex;
     justify-content: flex-end;

`
