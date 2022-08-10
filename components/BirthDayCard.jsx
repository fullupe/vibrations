import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import {weekdayss} from ".././weekDaysData"

import {weekdays} from "../weekDaysData"

//import {weekdays}  from "../NumberData"

function BirthDayCard() {
  const userData = useSelector((state) => state.weekday.value)

  const [data, setData] = useState(null)

  useEffect(()=>{

    weekdays?.map((week)=>{
      if(week.day==userData.yourDay){
        setData(week)
      }
    })

  },[])

  console.log("kiss1",userData.yourDay1)
  console.log("kiss2",userData.yourNumber)
  console.log("kiss3",userData.yourSign)
  
  
  return (
    <div className=" flex py-2 mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-1 select-none rounded-lg bg-[#AAFDee000] ">
          <div className="flex flex-col justify-center items-center  w-full">
              {/* <p>Header</p> */}
              <div className="flex flex-col h-12 w-44 bg-orange-000 rounded- justify-centers items-centesr border-0 m-1">
                   <p className="text-sm text-start text-white font-poppins ">Born On A</p>
                  <p className="text-2xl text-orange-700 font-poppins text-">{userData?.yourDay}</p>
              </div>
              

          </div>
          <div className="flex flex-col  overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden items-center " >
            {/* <img className="rounded-full w-44" src={null} /> */}

            {/* <p className="border-b-2 w-44 p-1">Positive Vibration</p> */}
            
               <p className="flex m-1 text-justify italic font-cinzel p-2 text-gray-800">
                {data?.message}
                </p>
            
          </div>
          <h5 className=" italic text-yellow-300">{null}</h5>
            <small className=" text-lg  font-poppins ">
              {null}
            </small>
        </div>
  )
}

export default BirthDayCard
