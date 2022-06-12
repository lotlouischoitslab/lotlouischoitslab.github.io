import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-white">About Me</p>
                </div>
                <div>

                </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hello. I am Louis Sungwoo Cho. Nice to meet you and please feel free to take a look at my profile page.</p>
                    </div>
                    <div>
                        <p> I am an aspiring Transportation Engineer and a Computer Scientist
                        enthusiastic about developing Autonomous Vehicles and Intelligent Transportation Systems (ITS) 
                        using Aritificial Intelligence (AI) and Internet of Things (IoT). I have always envisioned how urban mobility would look like in
                        futuristic Smart Cities.
                        </p>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default About