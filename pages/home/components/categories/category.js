import React from 'react'

const CategoryComponent = ({ categories }) => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-4  mt-4 bg-white '>
    {
         categories.map(item => 
                <div key={item.id} className='grid items-center gap-2 shadow-sm p-6 bg-white rounded shadow-md border border-gray-100 cursor-pointer hover:border-[#2C742F] transition duration-300'>
                    <img src={item.icon} alt="icon-" />
                    <p className='text-center'>{item.name}</p>
                </div>
            )
        }
    </div>
  )
}

export default CategoryComponent