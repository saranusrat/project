import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import sale01 from '../../assets/sale01.jpg'
import sale02 from '../../assets/sale02.png'
import sale03 from '../../assets/sale03.jpg'


const Sale = () => {
  return (
   <Section className="pt-[140px] pb-[128px]">
<Container>
    <Flex className="gap-10">
        <div className=' w-1/2'>
            <Image src={sale01} className=" w-full"/>
        </div>
        <div className=' w-1/2'>
            <div>
            <Image src={sale02} className=" w-full"/>
            </div>
            <div className=' mt-10'>
                <Image src={sale03} className=" w-full"/>
            </div>
        </div>
    </Flex>
</Container>
   </Section>
  )
}

export default Sale