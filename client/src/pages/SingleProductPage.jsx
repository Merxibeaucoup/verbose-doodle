import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import  { useEffect, useState } from 'react'
import HeaderLinks from '../components/HeaderLinks'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux';
import {useDispatch} from "react-redux";


const Container = styled.div`


`

const Wrapper = styled.div`
padding: 50px;
display: flex;


`
const ImgContainer = styled.div`
flex:1 ;


`
const Image = styled.img`
width: 100%;
height: 60vh;
object-fit: fill;

`
const InfoContainer = styled.div`
flex:1;
padding : 0px 15px;

`
const Title = styled.h1`
font-weight: 200;
display: flex;
 justify-content: center;
 align-items: center;

`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
 font-weight: 100;
 font-size: 40px;
 display: flex;
 justify-content: center;
 align-items: center;

`

const AddContainer = styled.div`
  width: 50%;
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
 
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #ffe0b3;
  }
`;





const SingleProductPage = () => {

  {/** handles path to product page */}
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();




    {/** handles path to selected product page.
    connects to backend and gets path and id of 
    selected item
   */}
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  {/** handles quantity number, increase or decrease */}
  const handleQuantity = (type) =>{
    if(type === "decrease"){
      quantity > 1 && setQuantity(quantity-1);
    } else{
      setQuantity(quantity+1);
    }
  }

    {/** handles cart update using redux */}
    const handleClick = ()=>{
      dispatch(

        //* sends product information and product quantity*/
      addProduct({...product,quantity}));
    };


  return (
    <Container>
      
        <Navbar/>
        <HeaderLinks/>
        <Wrapper>
          <ImgContainer>
          <Image src={product.img}/>
          </ImgContainer>

          <InfoContainer>
            <Title> {product.title}</Title>
            <Desc>
              {product.desc}
            </Desc>
            <Price>${product.price}</Price>
            <AddContainer>
              <AmountContainer>
                <Remove onClick ={()=> handleQuantity("decrease")} />
                <Amount>{quantity}</Amount>
                <Add onClick ={()=> handleQuantity("increase")}/>
              </AmountContainer>
              <Button onClick={handleClick} > Add to Cart</Button>
            </AddContainer>
            
          </InfoContainer>

        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default SingleProductPage