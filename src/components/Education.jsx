import React from 'react'

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-black text-gray-300 py-4'>
      {/*Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div > 
          <p className='text-4xl font-bold inline border-b-4 border-[white]'>EDUCATION</p>
          <ul>
            <li className='text-2xl p-4 justify-right'>Majoring in Civil and Environmental Engineering (Specialization: Transportation Engineering) at the University of Illinois at Urbana-Champaign </li>
            <li className='text-2xl p-4 justify-right'>Minoring in Computer Science (Focus Area: Artificial Intelligence and Big Data) at the University of Illinois at Urbana-Champaign </li>
          </ul>
            </div>

        
      </div>
    </div>
  )
}

export default Education
