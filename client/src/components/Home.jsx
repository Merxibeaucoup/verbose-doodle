import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    bottom: 0;
    position: relative;
    overflow: hidden;

`




const Wrapper = styled.div`
    height:100%;
    display: flex;
`

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
   
`
//   <--- Start image  --!>

const ImgContainer = styled.div`
    height: 100%;
    flex:1;

`
const Image = styled.img`
margin-top:10px;
height: 90%;
width: 214%;


`

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
    

`

const Button = styled.button`
    padding: 10px;
    font-size: 25px;
    border-radius:10px;
    background-color: #1c1a1a;
    color:white;
    cursor:pointer;
    position: absolute;
    top:28%;
    right: 12%;
    &:hover {
    background-color: coral;
    color: black;
  }
    


`
const Home =() => {
   



  return (
   <Container>
      

       <Wrapper>
           <Slide>
            <ImgContainer>
                <Image src='assets/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg'/>
            </ImgContainer>


            <InfoContainer>
            <Link to ="/products">
            <Button>Shop Now</Button>
            </Link>


            </InfoContainer>
            </Slide>
           
           
            
       </Wrapper>
      

   </Container>
  )
}

export default Home