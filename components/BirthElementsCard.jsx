import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {signs} from "../NumberData"

function BirthElementsCard() {

  const userData = useSelector((state) => state.weekday.value)

  const [data, setData] = useState(null)

  useEffect(()=>{

    signs?.map((sign)=>{
      if(sign.name==userData.yourSign){
        setData(sign)
      }
    })

  },[])
  return (
    <div className=" flex py-2 mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-1 select-none rounded-lg bg-[#AAFDee000] ">
          <div className="flex flex-col justify-center items-center  w-full">
              {/* <p>Header</p> */}
              <div className="flex flex-col h-12 w-44 bg-orange-000 rounded- justify-centers items-centesr border-0 m-1">
                   <p className="text-sm text-start text-white font-poppins ">Your Element</p>
                  <p className="text-2xl text-orange-700 font-poppins">{data?.element}  </p>
                  {/* ❤️‍🔥 💦 🌬 ⏚  */}
              </div>
              

          </div>
          <div className="flex flex-col  overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden items-center " >
            {/* <img className="rounded-full w-44" src={null} /> */}

            {/* <p className="border-b-2 w-44 p-1">Positive Vibration</p> */}
            
               <p className="flex m-1 text-justify italic p-2 text-gray-800 font-cinzel">
                {data?.elementInfo}
                </p>
            
          </div>
          
           
        </div>
  )
}

export default BirthElementsCard;
