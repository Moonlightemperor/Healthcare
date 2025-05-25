import React from 'react'
const Appointments = ({icon, title, time , doctor ,bgColor, textColor}) => {
  return (
    <div className='mt-5  w-[fit-content] p-6 rounded-3xl flex flex-col '
    style={{backgroundColor:bgColor}}>
      <div className='flex text-white mt-4 w-full gap-3 items-center justify-between'>
        <span style={{color:textColor}}>{title}</span>
        <img className='h-6 w-6' src={icon} alt="" />
      </div>
      <span className=' mt-1 text-[0.7rem]' style={{color:textColor}}>{time}</span>
      <span className=' text-[0.7rem] 'style={{color:textColor}}>{doctor}</span>
    </div>
  )
}

export default Appointments
