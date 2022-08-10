import React,{useState, useEffect} from 'react';
//import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'

import numbers from "../NumberData"


function BirthNumberCard() {
  const userData = useSelector((state) => state.weekday.value)

  const [data, setData] = useState(null)

  useEffect(()=>{

    numbers?.map((num)=>{
      if(num.number==userData.yourNumber){
        setData(num)
      }
    })

  },[])
  

  console.log("singleData",data)

  return (
    <div className=" flex py-2 mb-2 md:mb-12 flex-col space-y-4 items-center text-center p-1 select-none rounded-lg bg-[#AAFDee000] ">
          <div className="flex flex-col justify-center items-center">
              {/* <p>Header</p> */}
              <div className="flex h-12 w-12 bg-black rounded-full justify-center items-center border-2 m-1">
                  <p className="text-3xl text-gray-200 font-poppins  ">{userData.yourNumber}</p>
              </div>
              <p className="text-orange-800 font-poppins">Your Birth Number</p>

          </div>
          <div className="flex flex-col  overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden items-center  " >
            {/* <img className="rounded-full w-44" src={null} /> */}

            <p className="border-b-2 w-44 p-1 text-gray-200 font-tapestry">Vibration</p>
            
               <p className="flex m-1 text-justify italic  p-2 text-gray-800 font-cinzel ">
                {data?.message}
                </p>

                <p className="border-b-2 p-1 text-gray-200 font-tapestry ">Strength</p>

               <p className="flex m-1 text-justify italic  p-2 text-gray-800 font-cinzel">
                {data?.strength}
                </p>
                <p className="border-b-2 p-1  text-gray-200 font-tapestry ">Weakneses</p>

               <p className="flex m-1 text-justify italic p-2 text-gray-800 font-cinzel">
                {data?.weakness}
                </p>

                <p className="border-b-2 p-1 text-gray-200 font-tapestry ">Personality</p>

              <div className="grid grid-cols-2 gap-2 ">
                {data?.personality.map((per)=>(
                  <div className=" flex space-x-2 italic text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600"> 
                    ⍟  <p className="ml-1">{per}</p>
                    
                  </div>
                ))}
                </div>

                <div className="flex pb-4"></div>
            
          </div>
          <h5 className=" italic text-yellow-300">{null}</h5>
            <small className=" text-lg  font-poppins ">
              {null}
            </small>
        </div>
  )
}

export default BirthNumberCard
