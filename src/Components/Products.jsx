import React from 'react'
import Flex from './Flex'
import Product from './Product'

const Products = ({ImgOne,ImgTwo,ImgThree,ImgFour,badgeName}) => {
  return (
   <Flex className="gap-10">
    <Product ImgSrc={ImgOne} badge={badgeName}/>
    <Product ImgSrc={ImgTwo} badge={badgeName}/>
    <Product ImgSrc={ImgThree} badge={badgeName}/>
    <Product ImgSrc={ImgFour} badge={badgeName}/>
   </Flex>
  )
}

export default Products