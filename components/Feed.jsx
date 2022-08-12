import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import BirthNumberCard from './BirthNumberCard'
import BirthDayCard from './BirthDayCard'
import BirthSignCard from './BirthSignsCard'
import BirthNameCard from './BirthNameCard'
import BirthElement from "./BirthElementsCard"
import BirthPersonalityDay from "./BirthPersonalityDays"

const dataClient=[<BirthNumberCard/>,<BirthDayCard/>,<BirthSignCard/>,<BirthElement/>,<BirthPersonalityDay/>,<BirthNameCard/>]

function Feed() {
  return (
    <section  className=" flex flex-col h-4/5 w-full  bg-red-000  items-center  bg-red-000">
   
      <h2 className="text-4xl  text-white font-extrabold font-poppins italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600  " >Numerology</h2>

      <Swiper className="flex  flex-col h-full w-96  gap-5 mt-4  "
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
        
      >
        {dataClient.map((review,index)=>(
         <SwiperSlide key={index} className=" flex py-2 mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-1 select-none rounded-lg bg-[#AAFD] ">
          
          {review}
          
          
        </SwiperSlide> 

         ))} 

      </Swiper>

    </section>
  )
}

export default Feed
