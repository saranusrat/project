import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Section from '../Section'
import Flex from '../Flex'
import Image from '../Image'
import seller01 from '../../assets/seller01.png'
import seller02 from '../../assets/seller02.png'
import seller03 from '../../assets/seller03.png'
import seller04 from '../../assets/seller04.png'
import Badge from '../Badge'
import Paragraph from '../Paragraph'
import Price from '../Price'
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const BestSeller = () => {
  return (
    <Section className="pb-[118px]">
    <Container>
            <Heading className="font-sans font-bold text-4xl text-primaryColor pb-11" text="Our Bestsellers" as="h2"/>
            <Flex className=" gap-10">
                <div className=" w-1/4 relative group">
                    <Image src={seller01} className=" w-full"/>
                  <div className=" absolute top-4 left-4">
                    <Badge text="new" />
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
               
                <div className=" w-1/4 relative group">
                    <Image src={seller02} className=" w-full"/>
                  <div className=" absolute top-4 left-4">
                    <Badge text="new" />
                  </div>
                  <Flex className="justify-between py-4">
                    <Paragraph className=" font-bold text-xl text-primaryColor" text="Basic Crew Neck Tee"/>
                    <Price text="$44.00"/>
                  </Flex>
                  <Price text="Black" />
                  <div className='bg-white w-full absolute bottom-[78px] py-[25px] invisible group-hover:visible delay-500'>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Wish List"/>
                    <FaHeart />
                </Flex>
                <Flex className="justify-end gap-3 mr-7 py-5">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Compare"/>
                    <IoGitCompareSharp />
                </Flex>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Cart"/>
                    <FaCartShopping />
                </Flex>
               </div>
    
                </div>
               
                <div className=" w-1/4 relative group">
                    <Image src={seller03} className=" w-full"/>
                  <div className=" absolute top-4 left-4">
                    <Badge text="new" />
                  </div>
                  <Flex className="justify-between py-4">
                    <Paragraph className=" font-bold text-xl text-primaryColor" text="Basic Crew Neck Tee"/>
                    <Price text="$44.00"/>
                  </Flex>
                  <Price text="Black" />
                  <div className=' bg-white w-full absolute bottom-[78px] py-[25px] invisible group-hover:visible delay-500'>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Wish List"/>
                    <FaHeart />
                </Flex>
                <Flex className="justify-end gap-3 mr-7 py-5">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Compare"/>
                    <IoGitCompareSharp />
                </Flex>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Cart"/>
                    <FaCartShopping />
                </Flex>
               </div>
    
                </div>
               
                <div className=" w-1/4 relative group">
                    <Image src={seller04} className=" w-full"/>
                  <div className=" absolute top-4 left-4">
                    <Badge text="new" />
                  </div>
                  <Flex className="justify-between py-4">
                    <Paragraph className=" font-bold text-xl text-primaryColor" text="Basic Crew Neck Tee"/>
                    <Price text="$44.00"/>
                  </Flex>
                  <Price text="Black" />
                  <div className=' bg-white w-full absolute bottom-[78px] py-[25px] invisible group-hover:visible delay-500'>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Wish List"/>
                    <FaHeart />
                </Flex>
                <Flex className="justify-end gap-3 mr-7 py-5">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Compare"/>
                    <IoGitCompareSharp />
                </Flex>
                <Flex className="justify-end gap-3 mr-7">
                    <Paragraph className=" font-sans font-normal text-base text-secondaryColor hover:font-bold hover:text-primaryColor" text="Add to Cart"/>
                    <FaCartShopping />
                </Flex>
               </div>
    
                </div>
               
            </Flex>
        </Container>
    
    </Section>
       
  )
}

export default BestSeller