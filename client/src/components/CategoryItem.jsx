import React from 'react'
import { Link } from 'react-router-dom';
import styled  from 'styled-components'

const Container = styled.div`
flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  margin-top:0;


`;
const Image = styled.img`
width: 100%;
height: 80%;
object-fit: cover;

`;

const Info = styled.div`

position: absolute;
top: 90px;
left:0;
width:100%;
height: 100%;
display: flex;
flex-direction:column;
align-items: center;


`;
const Title = styled.h1`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 color: white;
 margin-bottom:20px;


`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:grey;
    cursor: pointer;
    font-weight: 600;


`;






const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link  to ={`/products/${item.cat}`} >
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem