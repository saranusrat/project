import React from 'react'
import Section from '../Section'
import Image from '../Image'
import phone from '../../assets/phone.png'
import Container from '../Container'

const Phone = () => {
  return (
    <Section>
        <Container>
        <Image src={phone} className=" w-full"/>
        </Container>
    </Section>
  )
}

export default Phone