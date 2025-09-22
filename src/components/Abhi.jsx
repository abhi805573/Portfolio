import React from 'react'
import AbhiImg from '../assets/abhi.png'

const Abhi = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <div>
        <img 
          className='mx-auto mb-8 w-52 h-52 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow' 
          src={AbhiImg} 
          alt="Abhijeet" 
        />
      </div>

      <h1 className='text-4xl text-purple-500 font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
          Kambale Abhijeet
        </span>
        , Full-Stack Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>

      <div className='mt-6 space-x-4'>
        {/* Contact Button → scroll to contact section */}
        <a 
          href="#contact"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'
        >
          Contact Me
        </a>

        {/* Resume Button → open Google Drive link */}
        <a 
          href="https://drive.google.com/file/d/1KLjYm4P9WV8LLGm3rzBYa5kkuKt8NFtW/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Abhi
