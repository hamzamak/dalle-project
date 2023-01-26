import React from 'react'
import { downloadImage } from '../utils'
import { download } from '../assets'
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img src={photo} className="w-full h-auto object-cover rounded-xl" alt={prompt} />

      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>{prompt} </p>
        <div className='mt-5 gap-2 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div className='text-white  w-7 h-7 rounded-full bg-green-700 flex justify-center items-center font-bold text-xs object-cover'>
              {name[0]}
            </div>
            <p className='text-white text-sm'>{name} </p>

          </div>
          <button type='button' className='outline-none bg-transparent border-none' onClick={()=> downloadImage(_id, photo)}>
            <img src={download} className="h-6 w-6 object-contain invert " />

          </button>

        </div>
      </div>

    </div>
  )
}

export default Card