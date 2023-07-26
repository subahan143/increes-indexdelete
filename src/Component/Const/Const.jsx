import React, { useState } from 'react'

const Const = () => {
const [inp,Setinp]=useState(0)
const [About,SetAbout]=useState([])


const home=()=>{
    SetAbout(array=>[...array,inp])

}
const Delete=(index)=>{
    const Newarray=[...About]
    Newarray.splice(index,1)
    SetAbout(Newarray)

}

  return (
  <>
  <div className='w-full h-screen bg-pink-400 flex items-center justify-center flex-col gap-4'>
    <input onChange={(e)=>Setinp (e.target.value)} className='w-[200px] h-[40px] ' type="text" />
    <button onClick={home} className='w-[100px] h-[40px] bg-slate-950 text-white'>add</button>
  {About &&  About.map((ele  ,index)=>  <span onClick={()=>Delete(index)} className='w-[200px] h-[40px] bg-slate-700 text-white flex items-center justify-center cursor-pointer font-bold '>{ele}</span>)}
  </div>
  
  </>
  )
}

export default Const
