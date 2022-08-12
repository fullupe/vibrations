import { useState,useEffect} from 'react'

import { FaRegArrowAltCircleDown } from 'react-icons/fa'

import { useSelector, useDispatch } from 'react-redux'

import {addWeekDay} from "../slices/WeekDaySlice"

import { BallTriangle,Circles } from  'react-loader-spinner'

interface props{ 
  setSubmitdat:any
  submitdate:any
  
}


function HomeEntry({setSubmitdat}:props, {submitdate}:props) {

  const dispatch = useDispatch()

  const[selectedMonth, setSelectedMonth]=useState<any>()
  const [selectedYear,setSelectedYear]=useState<any>();
  const[selectedDay,setSelectedDay]=useState<any>();
  const [selectedElement,setSelectedElement]=useState<any>()


    const[days, setDays]=useState<any>([])
   const[years, setYears]=useState<any>([])

    useEffect(() => {

        let maxOffset = 110;
        let thisYear = (new Date()).getFullYear()+10;
        let allYears = [];
        for(let minOffset = 0; minOffset <= maxOffset; minOffset++) {
            allYears.push(thisYear - minOffset)
        }
     
        setYears(allYears)
       //console.log(allYears)
    
    
      //  Generate 1-30
       let dayMax = 31
       let alldays=[];
    
       for(let i=1; i <= dayMax ; i++){
          alldays.push(i)
       } 
       setDays(alldays)

       console.log(alldays)
    
       }, [])


       //console.log(selectedDay,selectedMonth,selectedYear,)

       function digitSum(n:any) {
        while(!(n % 10 === n)) {
          if(n===11)return n;
          if(n===22)return n;
          if(n===33)return n; 
          n = n.toString().split('').reduce((acc: number, curr: string) => acc + parseInt(curr), 0);
        }
        return n;
      }
      function reduceDate(dateStr: string){
        let arrayDate = new Date(dateStr);
        let d = arrayDate.getDay();
      let weekdays =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      console.log(d) 
      console.log("DATE",arrayDate)
       return weekdays[d]; 
     }

    
    

       useEffect(()=>{

        //  Get Elements by month and day

    const between = (x:any, min:any, max:any) => {
      return x >= min && x <= max;
    }
    
    let xx = selectedDay < 10 ? `0${selectedDay}` : selectedDay

    let x =`${selectedMonth}${xx}`

   

     if(between(x, 11, 119)){ 
      setSelectedElement("Capricorn")
    }else if(between(x, 120, 218)){
      setSelectedElement("Aquarius")
    }else if(between(x, 219, 320)){
      setSelectedElement("Pisces")
    }else if (between(x, 321, 419)) {
      setSelectedElement("Aries")
    }else if(between(x, 420, 520)) {
      setSelectedElement("Taurus")
    }else if(between(x, 521, 620)){
      setSelectedElement("Gemini")
    }else if(between(x, 621, 722)){
      setSelectedElement("Cancer")
    }else if(between(x, 723, 822)){
      setSelectedElement("Leo")
    }else if(between(x, 823, 922)){
      setSelectedElement("Virgo")
    }else if(between(x, 923, 1022)){
      setSelectedElement("Libra")
    }else if(between(x, 1023, 1121)){
      setSelectedElement("Scorpio")
    }else if(between(x, 1122, 1221)){
      setSelectedElement("Sagittarius") 
      
    }else{
      setSelectedElement("Capricorn") 
    }
  
       },[selectedDay])


       const SubmitUserDate=()=>{
        const dateReady = `${selectedYear}${selectedMonth}${selectedDay}`;

        //let dateReady1 = `${selectedYear} ${selectedMonth} ${selectedDay}`;


        //console.log("see",dateReady1)

        //console.log("lets see",dateReady1)
       
       //dispatch(addDate( digitSum(dateReady)))

       //console.log("check",dateReady)

       let userData ={
         yourNumber: digitSum(dateReady),
         yourDay:reduceDate(`${selectedYear}/${selectedMonth}/${selectedDay}`),
         yourSign:selectedElement,
       } 

       dispatch(addWeekDay(userData))

       

       setSubmitdat(!submitdate)



       
      }
      



  return (
    <div className="flex flex-col items-center">

       {
        
       selectedDay && <>
        <Circles color="#FC6238" height={50} width={80} />
        <p className="text-white font-poppins italic">Ready...🚀</p>
       
       </> 
       }

        <div className="flex  h-[400px] items-center bg-blue-000  justify-center">
       

<select onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear} className="px-4 text-lg text-center  hover:cursor-pointer font-poppins py-2 rounded-full  w-23 m-4 text-white italic outline-none opacity-80 bg-red-500" id="year" name="year">
<option className="text-lg">Year</option>
{years.map((year: number )=>(
  <option  key={year} value={year}>{year}</option>  
))}
  </select>
  <select onChange={(e) => setSelectedMonth(e.target.value)}
            value={selectedMonth} className="px-4 text-lg text-center hover:cursor-pointer font-poppins py-2 rounded-full w-23 m-4 text-white italic outline-none opacity-80 bg-red-500" id="month" name="month">
  
<option className="text-lg">Month</option>
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select>

<select onChange={(e) => setSelectedDay(e.target.value)}
            value={selectedDay} className="px-4 py-2 text-lg text-center  hover:cursor-pointer font-poppins rounded-full w-23 m-4 text-white italic outline-none opacity-80 bg-red-500" id="Day" name="Day">
<option className="text-lg">Day</option>

{days.map((day:number)=>(
    
<option key={day} value={day}>{day}</option>
    ))}
</select>

</div>

<div    className="flex flex-col items-center w-full justify-center p-8">

{
selectedDay  &&
  <FaRegArrowAltCircleDown className="text-white animate-bounce"/>
}
<button
         className=" h-full bg-[#a2203e] hover:cursor-pointer font-poppins  w-44 hover:bg-[#530319] text-white font-bold opacity-80 py-2 px-4 rounded-full transition-all my-5"
          
          disabled={!selectedDay || !selectedMonth || !selectedYear}
          onClick={SubmitUserDate}
          
        >
        Submit
        </button>
</div>

    </div>
  )
}

export default HomeEntry