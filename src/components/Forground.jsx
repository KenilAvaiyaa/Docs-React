import React, { useRef, useState } from 'react'
import Card from './Card'

const Forground = () => {

  const ref = useRef(null)

  const data = [
    {
      dec:"Hello my name is Kenil and this  is my first react app. yappppp!!",
      filesize : ".9mb",
      close : false,
      tag : { isOpen : true, tagTi: "Downlod now", tagCo: "green"}
    },
    {
      dec:" this he's world, he get whareva he whants",
      filesize : "1mb",
      close : true,
      tag : { isOpen : true, tagTi: "Downlod now", tagCo: "blue"}
    },
    {
      dec:"Hello my name is yesha and my portfolio and CV",
      filesize : "2mb",
      close : false,
      tag : { isOpen : false, tagTi: "Uplode", tagCo: "green"}
    }
  ];
  return (
    <>
      <div ref={ref}  className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>

        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}

      </div>
    </>
  )
}

export default Forground
