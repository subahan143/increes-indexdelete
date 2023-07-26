import React, { useState } from 'react'

const Main1 = () => {

const[inp,Setinp]=useState()
const [Home,SetHome]=useState([])    
const sub =()=>{
SetHome(array=>[...array,inp])
}
const Delete=(index)=>{
    const Newarry=[...Home]
    Newarry.splice(index,1)
    SetHome(Newarry)
}
  return (
  <>

  <div className='w-full h-screen bg-orange-400 flex  flex-col items-center gap-5 justify-center '>
    <input onChange={(subahan)=>Setinp (subahan.target.value)} className='w-[300px] h-[40px]' type="text" placeholder='' />
    <button onClick={sub} className='w-[100px] h-[40px] bg-black text-white'> add</button>
   {Home.map((ele,index)=>  <span onClick={()=>Delete(index)} className='w-[300px] flex items-center justify-center cursor-pointer h-[40px] bg-slate-400 '>{ele}</span>)}
  </div>
  
  </>
  )
}

export default Main1
