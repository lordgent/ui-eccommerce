import React from 'react'

const ServiceComponent = ({ services }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4  mt-4 bg-white  mt-4 shadow-md p-6 bg-white rounded '>
    {
         services.map(item => 
                <div key={item.id} className='flex items-center gap-2'>
                    <img src={item.icon} alt="icon-" />
                    <div>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ServiceComponent