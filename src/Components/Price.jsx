import React from 'react'

const Price = ({className,text}) => {
  return (
    <h4 className={`${className}: font-sans text-secondaryColor text-base font-normal`}>{text}</h4>
  )
}

export default Price