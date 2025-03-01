import React from 'react'

const Hero = () => {
  return (
    <div className="px-10 py-20 lg:px-20 bg-[linear-gradient(#00000071,#00000071),url('Silo1.jpg')] bg-cover bg-center text-white">
        <h1 className='text-4xl md:text-5xl'>Welcome</h1>
        <h1 className='text-xl md:text-2xl font-semibold'>
            Discover Millions of Movies, TV Series and Actors
        </h1>
        <div className='rounded-lg overflow-hidden flex mt-5'>
            <input type="text" placeholder='Search Movies,TV Series,Actors... ' className='w-full py-2 px-4 text-black'
             />
             <button className='bg-blue-500 px-5 font-semibold hover:bg-blue-600'>Search</button>
        </div>
    </div>
  )
}

export default Hero