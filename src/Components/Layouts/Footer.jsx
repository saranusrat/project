import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import List from '../List'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn ,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
   <Section className="bg-subBg py-[56px]">
    <Container>
   <Flex>
   <div className=' w-2/5'>
            <Flex className=" gap-36">
                <div>
                    <Heading text="MENU" className="font-sans font-bold text-base text-primaryColor pb-[17px]" as="h4"/>
                  <ul >
                  <List  text="Home"/>
                    <List  text="Shop"/>
                    <List  text="About"/>
                    <List  text="Contact"/>
                    <List  text="Journal"/>
                  </ul>
                </div>
                <div>
                    <Heading text="SHOP" className="font-sans font-bold text-base text-primaryColor pb-[17px]" as="h4"/>
                  <ul >
                  <List  text="Category 1"/>
                    <List  text="Category 2"/>
                    <List  text="Category 3"/>
                    <List  text="Category 4"/>
                    <List  text="Category 5"/>
                  </ul>
                </div>
                <div>
                    <Heading text="HELP" className="font-sans font-bold text-base text-primaryColor pb-[17px]" as="h4"/>
                  <ul >
                  <List  text="Privacy Policy"/>
                    <List  text="Terms & Conditions"/>
                    <List  text="Special E-shop"/>
                    <List  text="Shipping"/>
                    <List  text="Secure Payments"/>
                  </ul>
                </div>
                
                
                
            </Flex>
        </div>
        <div className=' w-2/6 ml-36'>
        <Heading className=" font-sans font-bold text-primaryColor text-base" text="(052) 611-5711" as="h4"/>
            <Heading className=" font-sans font-bold text-primaryColor text-base" text="company@domain.com" as="h4"/>
            <Paragraph className="mt-4 text-secondaryColor " text="575 Crescent Ave. Quakertown, PA 18951"/>
        </div>
        <div className=' w-2/6'>
            <Image src={logo} className=" ml-14"/>
        </div>
   </Flex>
   <Flex className="justify-between pt-14">
    <div>
        <Flex className="gap-3">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        </Flex>
    </div>
    <div>
    <Paragraph className=" text-secondaryColor " text="2020 Orebi Minimal eCommerce Figma Template by Adveits"/>
    </div>
   </Flex>
    </Container>
   </Section>
  )
}

export default Footer