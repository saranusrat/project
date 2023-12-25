import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import BarIcon from '../Icons/BarIcon'
import Paragraph from '../Paragraph'
import List from '../List'
import { FaSearch } from "react-icons/fa";
import UserIcon from '../Icons/UserIcon'
import { FaShoppingCart } from "react-icons/fa";

const Subheader = ({hover,clickMenu,hoverMenu}) => {
  return (
<Section className="py-10 bg-subBg border border-y-1 border-subBorder absolute w-full">
<Container>
    <Flex>
    <div className=" w-1/4 pt-3 relative">
        <button ref={clickMenu}>
        <Flex className="items-center gap-3 relative">
              <BarIcon/>
              <Paragraph className=" text-primaryColor" text="Shop by Category"/>
            </Flex>
        </button>
        <div ref={hoverMenu} className={`absolute px-5 py-3  bg-[#F5F5F3] top-8 left-0 border border-[#979797] ${hover ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-4">
                  <List text="Shirt" className="text-base" />
                  <List text="Watch" className="text-base"/>
                  <List text="Shoes" className="text-base"/>
                  <List text="Medicine" className="text-base"/>
                  <List text="Grocery"className="text-base" />
                </ul>
        </div>
        </div>
        <div className=" w-1/2 relative">
       <input type="text" placeholder="Search Products" className='w-[601px] font-sans text-sm font-normal text-subSearch py-4 pl-5 ml-6'/>
       <FaSearch className=' absolute left-[560px] bottom-[18px]'/>
        </div>
        <div className=" w-1/4">
        <Flex className="justify-end items-center gap-10 pt-3">
        <UserIcon/>
          <FaShoppingCart />
        </Flex>
        </div>
    </Flex>
</Container>
</Section>
  )
}

export default Subheader