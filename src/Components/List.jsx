import React from 'react'

const List = ({className,href,text}) => {
  return (
   <li><a href={href} className={`${className}: font-sans font-normal text-secondaryColor text-sm hover:text-primaryColor hover:font-bold`}>{text}</a></li>
  )
}

export default List