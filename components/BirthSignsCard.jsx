import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {signs} from "../NumberData";
import Adsense from "../components/Adsense";
<Adsense/>

function BirthElementCard() {
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
          
              <div className="flex flex-col h-12 w-44 bg-orange-000 rounded- justify-centers items-centesr border-0 m-1">
                   <p className="text-sm text-start text-white  font-poppins ">Your Sign</p>
                  <p className="text-2xl text-orange-700 font-poppins ">{userData.yourSign}</p>
              </div>
              

          </div>
          <div className="flex flex-col  overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden items-center " >
          

            <div className=" flex flex-col items-center ">
          <small className="font-cinzel text-lg">
           
          </small>
          <img className="w-24 rounded-2xl h-24 hover:rotate-45 transform duration-100 ease-linear " src={data?.image} />
         
        </div>
            
               <p className="flex m-1 text-justify italic p-2 text-gray-800 font-cinzel">
                {data?.info}
                </p>
            
          </div>
          <div className="flex space-x-1 justify-center items-center">
            <div className="flex flex-col bg-red-00 w-full border-r-2 pr-2">

            <p className="text-sm text-orange-700 capitalize ">colors</p>
            <div className="grid  grid-cols- gap-4 items-center justify-center">
                {data?.colors.map((per)=>(
                  <div className=" flex  px-4 space-x-2   text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600"> 
                    ⍟ <p className="ml-1 capitalize italic ">{per}</p>
                    
                  </div>
                ))}
                </div>

            </div>

         

            <div className="flex bg-red-00 flex-col w-full border-l-2 pl-6">
            <p className="text-sm text-orange-700 capitalize ">Planet</p>
            <div className="grid grid-cols- gap-4 items-center justify-center ">
                {data?.Planet.map((per)=>(
                  <div className=" flex space-x-2  text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600"> 
                    ⍟  <p className="ml-1 capitalize italic ">{per}</p>
                    
                  </div>
                ))}
                </div>
      
            </div>
          </div>
        </div>
  )
}

export default BirthElementCard
