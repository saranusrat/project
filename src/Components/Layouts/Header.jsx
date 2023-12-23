import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'

const Header = () => {
  return (
<nav className=" py-[32px] ">
    <Container>
        <Flex>
        <div className=" w-[5%]">
    <Image src={logo}/>
    </div>
    <div className=" w-[95%]">
      <ul>
        <Flex className=" justify-center gap-[40px]">
        <List href="#" text="Home"/>
        <List href="#" text="Shop"/>
        <List href="#" text="About"/>
        <List href="#" text="Contacts"/>
        <List href="#" text="Journal"/>
        </Flex>
      </ul>
    </div>
        </Flex>
    </Container>
</nav>
  )
}

export default Header