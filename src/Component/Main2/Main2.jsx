import React, { useState } from 'react'

const Main2 = () => {
    const [inp,Setinp]=useState(0)
    const [Main,SetMain]=useState([])

const add=()=>{
    SetMain(array=>[...array,inp])
    


}
const Delete=(index)=>{

const Newarray=[...Main]
Newarray.splice(index,1)
SetMain(Newarray)


}

  return (
<>
<div className='w-full h-screen bg-red-500 flex items-center gap-3 justify-center flex-col '>

<input onChange={(e)=>Setinp (e.target.value)} className='w-[250px] h-[50px] text-[20px]' type="text" />
<button onClick={add} className='w-[100px] h-[40px] text-white border-2 bg-black'>add</button>

<div className='flex items-center justify-center flex-row gap-3 flex-wrap'>
    {Main.map((ele,index)=>  <span onClick={()=>Delete(index)} className='w-[250px] h-[50px] text-white  bg-black flex items-center justify-center cursor-pointer'>{ele}</span>)}
</div>
</div>


</>
  )
}

export default Main2
