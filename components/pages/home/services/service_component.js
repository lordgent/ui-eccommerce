import React from 'react'

const ServiceComponent = ({ services }) => {
  return (
    <div className='mt-6 p-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-2 bg-white shadow-md rounded items-center'>
    {
         services.map(item => 
                <div key={item.id} className='flex items-center gap-4'>
                    <img src={item.icon} alt="icon-" />
                    <div>
                    <p className='text-[11px] md:text-[13px]'>{item.name}</p>
                    <p className='text-[13px] md:text-[16px]'>{item.description}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ServiceComponent