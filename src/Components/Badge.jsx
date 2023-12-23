import React from 'react'

const Badge = ({className,text}) => {
  return (
   <div className={`${className}: py-2 px-7 w-[92px] bg-primaryColor font-sans font-bold text-sm text-white`}>{text}</div>
  )
}

export default Badge