import React, { useEffect, useState } from 'react'
import { GiOppositeHearts } from 'react-icons/gi'
import { BiMale,BiFemale } from 'react-icons/bi'
import { GiGreatPyramid} from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux'


import {weekdays} from "../NumberData"


function BirthNameCard() {
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
                   <p className="text-sm text-start text-white font-poppins ">Ghanaian Tribe's</p>
                  <p className="text-2xl text-orange-700 font-poppins">Naming's</p>
              </div>
              

          </div>
          <div className="flex flex-col  overflow-y-scroll scrollbar-hide pt-8  rounded-fulld w-full h-96 space-y-2 border-b-2 border-t-2 border-yellow-000  overflow-hidden items-center font-cinzel " >
         


                    <div className="flex   w-96  justify-between px-6 ">
                        <div className="flex w-10">
                        <GiGreatPyramid className="text-orange-00 text-3xl"/>
                        </div>
                        <div className="flex w-10 h-10 border-1 rounded-full bg-green-200 items-center justify-center mr-8">
                        <BiMale className="text-green-500 text-3xl "/>
                        </div>
                        <div className="flex w-10 h-10 border-2  rounded-full bg-green-200 items-center justify-center mr-12" >
                        <BiFemale className="text-green-500 text-3xl"/>
                        </div>
                    </div>

            <div className="flex  justify-between space-x-2 w-[370px] mx-2 px-3 text-white rounded-lg border-2 bg-red-00">
               <div className="flex   flex-col justify-center items-center py-2">
                   <div className="w-8 h-8 rounded-full bg-green-300 justify-center items-center flex ">
                       <GiOppositeHearts className="text-green-500 "/>
                   </div>
                   <p className="text-xs">Akan's</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize w-full">
                <p className="text-xs ">{data?.akans.male}</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize  w-full">
                <p className="text-xs">{data?.akans?.female}</p>
               </div>
            </div>


            <div className="flex justify-between space-x-2 w-[370px] mx-2 px-3 text-white rounded-lg border-2 bg-red-00">
               <div className="flex flex-col justify-center items-center py-2">
               <div className="w-8 h-8 rounded-full bg-orange-200 justify-center items-center flex">
                       <GiOppositeHearts className="text-orange-500"/>
                   </div>
                   <p className="text-xs">Fanti's</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize w-full">
                <p className="text-xs text-start">{data?.fantis.male}</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize w-full">
                <p className="text-xs">{data?.fantis.female}</p>
               </div>
            </div>

            <div className="flex justify-between space-x-2 w-[370px] mx-2 px-3 text-white rounded-lg border-2 bg-red-00">
               <div className="flex flex-col justify-center items-center py-2">
               <div className="w-8 h-8 rounded-full bg-red-200 justify-center items-center flex">
                       <GiOppositeHearts className="text-red-500"/>
                   </div>
                   <p className="text-xs">Ewe's</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize    w-full">
                <p className="text-xs">{data?.ewes.female}</p>
               </div>

               <div className="flex flex-col justify-center items-center py-2 capitalize   w-full">
                <p className="text-xs">{data?.ewes.female}</p>
               </div>
            </div>
            
          </div>
          <h5 className=" italic text-yellow-300">{null}</h5>
            <small className=" text-lg  font-poppins ">
              {null}
            </small>
        </div>
  )
}

export default BirthNameCard;
