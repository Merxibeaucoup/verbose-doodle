import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

import HeaderLinks from '../components/HeaderLinks'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'


const Container = styled.div`

`
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select = styled.select`

padding: 10px;
margin-right: 20px;
`

const Option = styled.option`

`


const Productpage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };



  return (
    <Container>
  
        <Navbar/>
        <HeaderLinks/>
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter> 
            <FilterText> Filter Products:</FilterText>
            <Select name ="genre" onChange={handleFilters}> 
            <Option disabled> Genre </Option>
              <Option>rap</Option>
              <Option>r&b</Option>
              <Option>rock</Option>
              <Option>pop</Option>

             
            </Select >
          </Filter>
          <Filter> 
            <FilterText> Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
            <Option value = "newest">newest</Option>
              <Option value = "asc">price (low to high)</Option>
              <Option value = "desc">price (high to low)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat ={cat} filters={filters} sort ={sort}/>
        <Footer/>
    </Container>
  )
}

export default Productpage