import React from 'react'
import { PiFilePlusFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=" relative w-52 h-60 rounded-[23px] bg-zinc-900/90 text-white px-5 py-5 overflow-hidden flex-shrink-0">
        <PiFilePlusFill />
        <div className=' text-sm leading-tight font-medium mt-4'>{data.dec}</div>
        <div className=' footer absolute bottom-0 left-0 w-full'>
          <div className=" flex items-center justify-between py-3 px-5 mb-2">
            <h5>{data.filesize}</h5>
            <span className=' w-6 h-6 rounded-full bg-slate-500 flex justify-center items-center'>
              {data.close ? <RxCross2 size=".7em" color='#ffffff' /> : <HiDownload size=".7em" color='#ffffff' /> }
            </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-3 ${data.tag.tagCo === "blue" ? "bg-blue-500" : "bg-green-500" } flex items-center justify-center uppercase`}>
                  <h3 className='text-xs font-semibold'>{data.tag.tagTi}</h3>
              </div>) 
          }
          
        </div>
      </motion.div>
    </>
  )
}

export default Card
