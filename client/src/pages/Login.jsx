import React from 'react'
import styled from "styled-components";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(assets/elice-moore-E--AUpYXbjM-unsplash.jpg)
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction:column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:10px 0px;
  padding: 10px;
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
 
 margin: 5px 0px;
 font-size: 12px;
 text-decoration: underline;
 cursor: pointer;
  
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
    <Wrapper>
      <Title>LOG IN</Title>
      <Form>
        <Input placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        <Input placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
        {error && <Error>check credentials and try again !...</Error>}
        <Link>FORGOT YOUR PASSWORD?</Link>
       
        <Link href = "/register"  style={{ color: 'inherit'}}>CREATE A NEW ACCOUNT</Link>
       
      </Form>
    </Wrapper>
  </Container>
  )
}

export default Login