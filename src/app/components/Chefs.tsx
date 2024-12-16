import React from 'react'
import Image from "next/image"

const OurChefs = () => {
  return (
    <div>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chefs
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src="/chefs/C-1.jpeg" alt="" width={700} height={600} className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer" />
          <Image src="/chefs/C-2.jpeg" alt="" width={700} height={600} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chefs/C-3.jpeg" alt="" width={700} height={600} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chefs/C-4.jpeg" alt="" width={700} height={600} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
        <div className='flex justify-center py-6 border-white'>
          <button className='text-white p-3 rounded-3xl bg-black border border-[#FF9F0D]  shadow-lg'>See More</button>
        </div>
      </section>
    </div>
  )
}

export default OurChefs