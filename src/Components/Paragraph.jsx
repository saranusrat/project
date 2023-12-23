import React from 'react'

const Paragraph = ({className,text}) => {
  return (
   <p className={`${className}: font-sans font-normal text-sm`}>{text}</p>
  )
}

export default Paragraph