import { Badge } from '@material-ui/core'
import { Search, ShoppingCartRounded } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import { mobile } from '../responsive'


//   <---  Style components --!>
const Container = styled.div`
    height: 60px;
   
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`
//   <--- Start Left  --!>

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    
    
`



const SearchContainer = styled.div`
  
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    

`

//   <--- End Left  --!>

//   <--- Start Center  --!>


const Center = styled.div`
    flex:1;
    text-align: center;

`
const Logo = styled.h1`
    font-weight: bold;
    
`


//   <--- End Center  --!>

//   <--- Start Right  --!>


const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
   
   

`
const Menuitem = styled.div`
 font-style: 14px;
 cursor: pointer;
 margin-left: 25px;
 padding-right:10px;
 &:hover {
    
    color: coral;
   
  }
`



//   <--- End Right  --!>

//   <--- End Style components --!>


const Navbar = () => {

    {/** handles number of items in the cart */}
    const quantity = useSelector(state=>state.cart.quantity)
console.log(quantity)
  return (
    <Container>
        <Wrapper>
            <Left>
               
                <SearchContainer>
                    <Input placeholder="SEARCH" />
                   <Search style ={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Meem.</Logo>

            </Center>
            <Right>

                <Link to ="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Menuitem>SIGN IN</Menuitem>
                </Link>

                {/**maybe add a register button */}
                <Link to = "/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Menuitem>
                <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartRounded/>
                </Badge>
                </Menuitem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar