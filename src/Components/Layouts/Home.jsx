import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Heading from '../Heading'
import sale01 from '../../assets/sale01.jpg'
import sale02 from '../../assets/sale02.png'
import sale03 from '../../assets/sale03.jpg'
import phone from '../../assets/phone.png'
import Products from '../Products'
// ==========products image========//
import clock from '../../assets/clock.png'
import watch from '../../assets/watch.png'
import busket from '../../assets/busket.png'
import doll from '../../assets/doll.png'
import seller01 from '../../assets/seller01.png'
import seller02 from '../../assets/seller02.png'
import seller03 from '../../assets/seller03.png'
import seller04 from '../../assets/seller04.png'
import special01 from '../../assets/special01.png'
import special02 from '../../assets/special02.png'
import special03 from '../../assets/special03.png'
import special04 from '../../assets/special04.png'

// ==========products image========//



const Home = () => {
  return (
    <Section>
        <Container>
            <div className=' pt-[140px] pb-32'>
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
            </div>
           <Heading text="New Arrivals" className=" font-sans font-bold text-primaryColor text-[39px] pb-12" as="h2"/>
      <div className=' pb-28'>
      <Products ImgOne={clock} badgeName="New"
        ImgTwo={watch} 
        ImgThree={busket}
        ImgFour={doll}/>
      </div>
      <Heading text="Our Bestsellers" className=" font-sans font-bold text-primaryColor text-[39px] pb-11" as="h2"/>
      <div className=' pb-32'>
      <Products ImgOne={seller01} badgeName="New"
        ImgTwo={seller02} 
        ImgThree={seller03}
        ImgFour={seller04}/>
      </div>
      <Image src={phone} className=" w-full pb-32"/>
      <Heading text="Special Offers" className=" font-sans font-bold text-primaryColor text-[39px] pb-12" as="h2"/>
      <div className=' pb-32'>
      <Products ImgOne={special01} badgeName="New"
        ImgTwo={special02} 
        ImgThree={special03}
        ImgFour={special04}/>
      </div>
        </Container>
    </Section>
  )
}

export default Home