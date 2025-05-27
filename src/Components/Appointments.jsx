import React from 'react'
const Appointments = ({icon, title, time , doctor ,bgColor, textColor}) => {
  return (
    <div className='mt-5  w-[fit-content] p-5  rounded-3xl flex flex-col '
    style={{backgroundColor:bgColor}}>
      <div className='flex text-white  w-full gap-3 items-center justify-between'>
        <span className='text-[1rem] laptop:text-[1rem] tablg:text-[1.5rem] pro7:text-[1.5rem]' style={{color:textColor}}>{title}</span>
        <img className='h-6 w-6' src={icon} alt="" />
      </div>
      <span className=' mt-1 text-[0.7rem] laptop:text-[0.7rem] tablg:text-[0.9rem] pro7:text-[0.9rem]' style={{color:textColor}}>{time}</span>
      <span className=' text-[0.7rem] tracking-wider laptop:text-[0.7rem] tablg:text-[1rem] pro7:text-[1rem] 'style={{color:textColor}}>{doctor}</span>
    </div>
  )
}

export default Appointments
