import React, { useState } from 'react'

const Main = () => {
    const [Subahan,SetSubahan]=useState(0)

const add=()=>{
    SetSubahan(Subahan+1)
}
const sub = ()=>{
 if(Subahan<=0){
    SetSubahan(0)
 }
 else{
    SetSubahan(Subahan-1)
 }
}

  
  
  
  
  
  
    return (
   <>
   <div className='w-full h-[80vh] bg-gray-700 flex items-center gap-5 justify-center flex-col'>

    <span className='text-2xl text-white bg-black border-2  w-[100px] h-[60px] flex items-center justify-center font-bold '>{Subahan}</span>
    <button onClick={add} className='w-[100px]  h-[60px] bg-red-500'>add</button>
    <button onClick={sub} className='w-[100px] h-[60px] bg-orange-500'>sub</button>
   </div>
   
   </>
  )
}

export default Main
