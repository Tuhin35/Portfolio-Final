import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Image from '../assets/Banners.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants"
import { Link } from 'react-scroll';
import resume from '../assets/Raihan Uddin Tuhin resume.pdf'
const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center py-5' id='home'>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-7xl'>
              Raihan Uddin <span className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Tuhin</span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[25px] lg:text-[25px] font-secondary
          font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Full stack web-developer ',
                  2000,
                  'Software Engineer ',
                  2000,
                ]} speed={40}
                className='text-accent'
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              <p>Hello, I am Raihan Uddin Tuhin. Home Town BrahmanBaria. I'm now studying software engineering at Daffodil International University.My passion has always been creating new things, and coding adds an added spark to that. I first became interested in web development in 2020 when I chose to learn more about it.After then, I became familiar with the MERN stack and worked on various projects.</p>
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.8)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-64 mt-10  flex flex-row text-[20px] gap-x-6 max-w-max mx-auto'>
              <Link> <FaFacebook></FaFacebook> </Link>
              <Link> <FaGithub /> </Link>
              <Link> <FaLinkedin /> </Link>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={fadeIn('up', 0.6)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact'><button className=' btn btn-lg'>
                Contact me
              </button></Link>
             
              <a href={resume} download="Raihan_Uddin_Tuhin_resume.pdf" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                  <svg className="w-5 text-gradient btn-link h-5 mr-2 text-xl hover:translate-y-1 duration-200 ease-linear" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  <span className="relative">Download resume</span>
                </a>
             
            </motion.div>
            <motion.img
              variants={fadeIn('down', 0.3)} initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]  mix-blend-lighten mx-auto' src={Image} alt=''></motion.img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
