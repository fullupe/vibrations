//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState,useEffect} from 'react'
import { IoIosArrowDropleft } from 'react-icons/io'
import HomeEntry from '../components/HomeEntry';
import Feed from "../components/Feed";


const Home = () => {

  const [mybox, setMybox]=useState(null)

  const [submitdate, setSubmitdat]=useState(false)

   const[days, setDays]=useState([])
   //const[months, setMonths]=useState<any>([])
   const[years, setYears]=useState([])

   //const todayNumber = new Date().toLocaleString().replaceAll("/",'')

// useEffect(()=>{
  const d = new Date().getDate()
  const m = new Date().getMonth()
  const y = new Date().getFullYear()

  console.log("now",  y, m+1 , d)

// },[])
  

 //useEffect(()=>{


  function digitSum(n) {
   
    while(!(n % 10 === n)) {
      if(n===11) return n;
      if(n===22) return n;
      if(n===33) return n; 
      n = n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }

    return n;
}

 

 
 //console.log("pl", digitSum(`${d}${m+1}${y}`))

 //},[])




   

 
 


 


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Gh Right Day</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <div className=" flex flex-col justify-center items-center  w-full h-full bg-[url('https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-23/6ace9bb0-2d79-11eb-9dcd-8b2ef5358591.jpg')] bg-repeat-none bg-cover bg-center max-w-[450px] mx-12 rounded-lg relative overflow-hidden">



    <div className="flex h-14 items-center w-full bg-yellow-000 ">
        <div className=" items-center m-4 flex w-full h-full cursor-pointer z-10">

        <IoIosArrowDropleft onClick={()=>setSubmitdat(false)} className="text-white text-4xl"/>
      
        </div>

    <div className=" flex w-24 h-24 shadow-lg bg-[url('https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-11-23/64e8e750-2d79-11eb-9dcd-8b2ef5358591.jpg')] bg-center bg-cover mt-2 absolute -top-10  left-[85%] rounded-full z-0">
      

    </div>

    </div>

    <div className=" flex justify-center items-center text-white flex-col w-full h-44 bg-orange-000 bg-transparent-50">

      <div className="flex w-24 h-24 justify-center  items-center rounded-full border-2 m-1  bg-red-00">

      <h1 className="animate-pulse text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-poppins ">{digitSum(`${y}${m+1}${d}`)}</h1>
      </div>

      <p className="font-poppins">Today's Number</p>
      

    </div> 

    {!submitdate ? (
       <HomeEntry setSubmitdat={setSubmitdat} submitdate={submitdate} />

    ):(
     
      <Feed/> 
    )}
    </div>
    </div>
  )
}

export default Home
