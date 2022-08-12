import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {weekdays} from "../NumberData"
import { FaLocationArrow} from 'react-icons/fa'


function BirthPersonalityDays() {
    const userData = useSelector((state) => state.weekday.value)
    const [data, setData] = useState(null)

    useEffect(()=>{

        weekdays?.map((week)=>{
          if(week.day==userData.yourDay){
            setData(week)
          }
        })
    
      },[])


  return (
    <div className=" flex py-2 mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-1 select-none rounded-lg bg-[#AAFDee000] ">
          <div className="flex flex-col justify-center items-center  w-full">
      
              <div className="flex flex-col h-12 w-44 bg-orange-000 rounded- justify-centers items-centesr border-0 m-1">
                   <p className="text-sm text-start text-white font-poppins ">Personalities Born On </p>
                  <p className="text-2xl text-orange-700 font-poppins text-">{userData?.yourDay}</p>
              </div>
              

          </div>
          <div className="flex flex-col   overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden  " >
           {data?.personalities?.map((person)=>(
               <div className="flex items-center space-x-2">
                   <FaLocationArrow className="text-orange-200"/>
                   <p className="flex text-start text-white font-poppins text-transparent bg-clip-text bg-gradient-to-r from-black to-pink-600">{person}</p>
               </div>
           ))}
            
          </div>
          <h5 className=" italic text-yellow-300">{null}</h5>
            <small className=" text-lg  font-poppins ">
              {null}
            </small>
        </div>
  )
}

export default BirthPersonalityDays;
