import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Badge from './Badge'
import Paragraph from './Paragraph'
import Price from './Price'
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";


const Product = ({ImgSrc,badge}) => {
  return (

            <div className=" w-1/4 relative group">
                <Image src={ImgSrc} className=" w-full"/>
              <div className=" absolute top-4 left-4">
                <Badge text={badge} />
              </div>
              <Flex className="justify-between py-4">
                <Paragraph className=" font-bold text-xl text-primaryColor" text="Basic Crew Neck Tee"/>
                <Price text="$44.00"/>
              </Flex>
              <Price text="Black" />
           <div className=' bg-white w-full absolute bottom-[78px] py-[25px]  invisible group-hover:visible delay-500'>
            <Flex className="justify-end gap-3 mr-7">
                <Paragraph className=" font-sans font-normal text-base hover:font-bold hover:text-primaryColor text-secondaryColor" text="Add to Wish List"/>
                <FaHeart />
            </Flex>
            <Flex className="justify-end gap-3 mr-7 py-5">
                <Paragraph className=" font-sans font-normal text-base hover:font-bold hover:text-primaryColor text-secondaryColor" text="Compare"/>
                <IoGitCompareSharp />
            </Flex>
            <Flex className="justify-end gap-3 mr-7">
                <Paragraph className=" font-sans font-normal text-base hover:font-bold hover:text-primaryColor text-secondaryColor" text="Add to Cart"/>
                <FaCartShopping />
            </Flex>
           </div>
            </div>
          
  )
}

export default Product