import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import styled  from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'



const Container = styled.div`
    display: flex;
    padding: 0;
    justify-content: space-between;
   


`

const Categories = () => {
  return (
    <Parallax speed={-15}>
    <Container>
  
        {categories.map(item =>(
            <CategoryItem item = {item} key={item.id}/>

        ))}
    </Container>
    </Parallax>
  )
}

export default Categories