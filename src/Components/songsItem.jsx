import React, { useContext } from 'react'
import { playerContext } from '../Context/playerContext'

const songsItem = ({name,image,desc,id}) => {
    
  const {playwithId}=useContext(playerContext)
  return (
    <div onClick={()=>playwithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default songsItem