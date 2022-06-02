import {
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  background-color: black;
  color: grey;
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
 
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
 
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const FooterCopyRight = styled.footer`
text-decoration: none;
outline: none;
color: grey;
margin-top: 3rem;
justify-content: center;
&:hover {
    color: #E38B06;
}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Meem.</Logo>
        <Desc>
          Blah blah blah blah blah blah blah blah blah blah blah, Thank you
        </Desc>
       
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        <FooterCopyRight> © Meem  CopyRight 2022.</FooterCopyRight>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Rhode Island college
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@meem.bleh
        </ContactItem>
      </Right>


    </Container>
  );
};

export default Footer;