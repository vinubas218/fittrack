import React, { useState } from 'react'
import { FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import About from './About';
import { motion } from 'framer-motion';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const fadeRightvariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <div>
      <div className='flex fixed top-0 left-0 z-[50] items-center w-full justify-evenly p-5 bg-gray-200 '>
        <img
          src={'/logo.png'}
          className='h-10 cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <nav className='uppercase hidden md:flex gap-7 cursor-pointer '>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#progress">Progress</a>
          <a href="#support">Support</a>
          <a href="#consultation">Take a free consultation</a>
        </nav>
        <div className='hidden md:flex gap-3 cursor-pointer'>
          <p className='text-xl hover:scale-125'><FiSearch /></p>
          <p className='text-xl hover:scale-125'><IoCartOutline /></p>
          <p className='text-xl hover:scale-125'><FiUser /></p>
        </div>

        <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {
        menuOpen && (
          <div className='uppercase flex fixed top-20 w-full left-0 z-[50] flex-col gap-4 items-center p-5 bg-gray-100 cursor-pointer '>
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#progress">Progress</a>
            <a href="#support">Support</a>
            <a href="#consultation">Take a free consultation</a>
          </div>
        )
      }

      <div className='relative bg-[url("/bg.jpg")] h-screen bg-cover bg-no-repeat bg-center'>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className='relative text-left md:ml-170 py-50 px-5 max-w-xl'>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeRightvariants}
            viewport={{ amount: 0.2 }}
            className='text-4xl text-amber-500 font-bold'
          >
            FitTrack Users Thrive: 80% Achieve Weight Goals in 6 Months!
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeRightvariants}
            viewport={{ amount: 0.3 }}
            className='text-white font-medium py-3'
          >
            Track your progress, set goals, and stay motivated with FitTrack. Get personalized insights and real-time data to help you reach your fitness goals faster
          </motion.p>
          <div className='py-4 cursor-pointer'>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeRightvariants}
              viewport={{ amount: 0.1 }}
              className='bg-green-600 w-fit p-3 rounded-xl text-xs font-medium animate-pulse hover:bg-green-700'
            >
              Get Started Today
            </motion.p>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home
