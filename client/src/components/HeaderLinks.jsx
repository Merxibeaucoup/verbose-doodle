import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
color: black;

`
const Line1 = styled.hr`
  color: black;
  margin-top:60px;
  
`;

const Items = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
   

`

const Menuitem = styled.div`
 font-style: 14px;
 cursor: pointer;
 margin-left: 45px;
 padding-right:55px;
 &:hover {
    
    color: coral;
   
  }
`

const Line2 = styled.hr`
  color: black;
  margin-top:10px;
  
`;



const HeaderLinks = () => {
  return (
    <Container>

       <Line1/>
       <Items>
         <Link to ="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
       <Menuitem>HOME</Menuitem>
       </Link>
       <Link to ="/products" style={{ color: 'inherit', textDecoration: 'inherit'}}>
       <Menuitem>SHOP</Menuitem>
       </Link>
       <Link to ="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
       <Menuitem>ABOUT</Menuitem>
       </Link>
       <Link to ="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
       <Menuitem>CONTACT</Menuitem>
       </Link>
       </Items>
       <Line2/>
    </Container>
  )
}

export default HeaderLinks