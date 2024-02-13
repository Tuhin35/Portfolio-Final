import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants"
import { Link } from 'react-scroll';
import { BsArrowUpRight } from 'react-icons/bs'
import html from "../assets/Developer logo/html-svgrepo-com.svg"
import CSS from "../assets/Developer logo/css-3-svgrepo-com.svg"
import Bootstrap from "../assets/Developer logo/bootstrap-5-1.svg"
import Express from "../assets/Developer logo/express-js-icon.svg"
import Figma from "../assets/Developer logo/figma-svgrepo-com.svg"
import Firebase from "../assets/Developer logo/firebase-svgrepo-com.svg"
import Github from "../assets/Developer logo/github-svgrepo-com.svg"
import JS from "../assets/Developer logo/js-svgrepo-com.svg"
import Mongo from "../assets/Developer logo/mongodb-svgrepo-com.svg"
import Netlify from "../assets/Developer logo/netlify.svg"
import Node from "../assets/Developer logo/node-svgrepo-com.svg"
import Tailwind from "../assets/Developer logo/tailwind-css-2.svg"
import Vercel from "../assets/Developer logo/vercel.svg"
import Technology from './Technology';
import { FcEngineering } from 'react-icons/fc';

const services = [
  {
    name: 'Full stack web developer',
    description: "MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based ",
    link: "Learn more"

  },

]
const skills = [
  {
    name: "HTML",
    img: html,
    level: "Advance"
  },
  {
    name: "CSS",
    img: CSS,
    level: "Advance"
  },
  {
    name: "Javascript",
    img: JS,
    level: "Advance"
  },
  {
    name: "Bootstrap",
    img: Bootstrap,
    level: "Advance"
  },
  {
    name: "Tailwind CSS",
    img: Tailwind,
    level: "Advance"
  },

  
  {
    name: "Node js",
    img: Node,
    level: "Beginner"
  },
  {
    name: "Express js",
    img: Express,
    level: "Beginner"
  },
]
const familier = [
  {
    name: "Github",
    img: Github,
    level: "Moderate"
  },
  {
    name: "Figma",
    img: Figma,
    level: "Advance"
  },
  {
    name: "Firebase",
    img: Firebase,
    level: "Moderate"
  },
  {
    name: "Mongo DB",
    img: Mongo,
    level: "Beginner"
  },
  {
    name: "Netlify",
    img: Netlify,
    level: "Moderate"
  },
  {
    name: "Vercel",
    img: Vercel,
    level: "Moderate"
  },

]
const Services = () => {
  return <section className='section my-10' id='service'>
    <div className="container mx-auto">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 my-auto">
        <motion.div
         variants={fadeIn('left', 0.1)} initial="hidden"
         whileInView={'show'}
         viewport={{ once: false, amount: 0.2 }}
         className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
             mix-blend-lighten mb-12 lg:mb-0">
          <motion.div
            variants={fadeIn('left', 0.3)} initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className='h2 text-accent my-6'> what i DO</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelancer full stack web Developer with over 5 years of experience</h3>
           <Link to='work'> <button  className='btn btn-sm'>see my work</button></Link>
          </motion.div>
          <div className='mt-10'>
            {services.map((service, i) => {
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px]  flex'
                  key={i}>
                  <motion.div
                    variants={fadeIn('up', 0.5)} initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                  font-semibold mb-6
                  '>{name} </h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </motion.div>
                  <motion.div
                    variants={fadeIn('down', 0.6)} initial="hidden"
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                    className='flex flex-col flex-1 items-end'>
                    <Link className='btn w-9 h-9 mb-[42px]  flex justify-center items-center'>
                      <BsArrowUpRight className=''></BsArrowUpRight>
                    </Link>
                    <Link className='text-gradient text-sm'>{link}</Link>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>
        <div>
          <div>

            <div>
              <h1 className='text-xl md:text-[32px] font-semibold text-center text-white md:text-left md:leading-[4.25rem] w-full'>Technology I have expertise...<FcEngineering className="inline-block text-4xl animate-spin" /></h1>
              <motion.div
               variants={fadeIn('up', 0.6)} initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.6 }}
              className="mt-1 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-4 mx-auto expertise sm:gap-4  cursor-pointer p-2 border-b-2">
                {
                  skills.map((skill, i) =>
                    <Technology skill={skill} key={i} />
                  )
                }

              </motion.div>
              <motion.div
               variants={fadeIn('right', 0.6)} initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.6 }}
              className="sm:mb-[50px] flex flex-col items-start md:pl-5 mx-auto">
                <h1 className="text-xl md:text-[32px] font-semibold text-center text-white md:text-left md:leading-[4.25rem]">Others technologies_  <FcEngineering className="inline-block text-4xl animate-spin" /></h1>
                <p className="text-center md:text-left text-para text-lg  ">Tools, but I have less experience in following</p>
              </motion.div>
              <motion.div
               variants={fadeIn('down', 0.12)} initial="hidden"
               whileInView={'show'}
               viewport={{ once: false, amount: 0.12 }}
              className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 mx-auto expertise sm:gap-4  cursor-pointer">
                {
                  familier.map((skill, i) =>
                    <Technology skill={skill} key={i} />
                  )
                }

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>;
};

export default Services;
